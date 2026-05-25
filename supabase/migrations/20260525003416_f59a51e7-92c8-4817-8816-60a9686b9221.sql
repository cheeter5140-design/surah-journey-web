
-- Fix search_path on touch_updated_at
CREATE OR REPLACE FUNCTION public.touch_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN NEW.updated_at := now(); RETURN NEW; END; $$;

-- Revoke EXECUTE from public/anon/authenticated for SECURITY DEFINER trigger fns
REVOKE EXECUTE ON FUNCTION public.protect_billing_columns() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.handle_new_user_profile_billing() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.touch_updated_at() FROM PUBLIC, anon, authenticated;

-- Also lock down pre-existing helpers if they exist
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_proc WHERE proname='handle_new_user_progress' AND pronamespace='public'::regnamespace) THEN
    EXECUTE 'REVOKE EXECUTE ON FUNCTION public.handle_new_user_progress() FROM PUBLIC, anon, authenticated';
  END IF;
  IF EXISTS (SELECT 1 FROM pg_proc WHERE proname='handle_new_user_profile' AND pronamespace='public'::regnamespace) THEN
    EXECUTE 'REVOKE EXECUTE ON FUNCTION public.handle_new_user_profile() FROM PUBLIC, anon, authenticated';
  END IF;
END $$;
