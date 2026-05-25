
-- ============ user_profiles ============
CREATE TABLE public.user_profiles (
  user_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text,
  is_premium boolean NOT NULL DEFAULT false,
  stripe_customer_id text,
  subscription_status text NOT NULL DEFAULT 'inactive',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users read own user_profiles"
ON public.user_profiles FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users insert own user_profiles"
ON public.user_profiles FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Update allowed but trigger blocks billing-sensitive columns
CREATE POLICY "Users update own user_profiles"
ON public.user_profiles FOR UPDATE
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Block client-side changes to billing columns
CREATE OR REPLACE FUNCTION public.protect_billing_columns()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF auth.uid() IS NOT NULL THEN
    -- only enforce when called by authenticated client (not by service role / triggers)
    IF NEW.is_premium IS DISTINCT FROM OLD.is_premium
       OR NEW.stripe_customer_id IS DISTINCT FROM OLD.stripe_customer_id
       OR NEW.subscription_status IS DISTINCT FROM OLD.subscription_status THEN
      RAISE EXCEPTION 'Billing columns can only be updated by the server';
    END IF;
  END IF;
  NEW.updated_at := now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER protect_user_profiles_billing
BEFORE UPDATE ON public.user_profiles
FOR EACH ROW EXECUTE FUNCTION public.protect_billing_columns();

-- Auto-create user_profiles row on signup
CREATE OR REPLACE FUNCTION public.handle_new_user_profile_billing()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.user_profiles (user_id, email)
  VALUES (NEW.id, NEW.email)
  ON CONFLICT (user_id) DO NOTHING;
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created_billing
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user_profile_billing();

-- ============ surah_progress ============
CREATE TABLE public.surah_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  surah_number integer NOT NULL CHECK (surah_number BETWEEN 1 AND 114),
  verses_memorized integer[] NOT NULL DEFAULT '{}',
  status text NOT NULL DEFAULT 'not_started'
    CHECK (status IN ('not_started','in_progress','memorized','needs_review')),
  memory_strength integer NOT NULL DEFAULT 1
    CHECK (memory_strength BETWEEN 1 AND 100),
  last_reviewed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, surah_number)
);

ALTER TABLE public.surah_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users read own surah_progress"
ON public.surah_progress FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users insert own surah_progress"
ON public.surah_progress FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users update own surah_progress"
ON public.surah_progress FOR UPDATE USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users delete own surah_progress"
ON public.surah_progress FOR DELETE USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.touch_updated_at()
RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at := now(); RETURN NEW; END; $$;

CREATE TRIGGER touch_surah_progress
BEFORE UPDATE ON public.surah_progress
FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- ============ study_plans ============
CREATE TABLE public.study_plans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  surah_number integer NOT NULL CHECK (surah_number BETWEEN 1 AND 114),
  target_date date NOT NULL,
  items jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.study_plans ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users read own study_plans"
ON public.study_plans FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users insert own study_plans"
ON public.study_plans FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users update own study_plans"
ON public.study_plans FOR UPDATE USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users delete own study_plans"
ON public.study_plans FOR DELETE USING (auth.uid() = user_id);

CREATE TRIGGER touch_study_plans
BEFORE UPDATE ON public.study_plans
FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- Backfill user_profiles for existing users
INSERT INTO public.user_profiles (user_id, email)
SELECT id, email FROM auth.users
ON CONFLICT (user_id) DO NOTHING;
