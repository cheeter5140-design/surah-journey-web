# Plan : Premium, Paywall Stripe & Outils avancés

Le projet est déjà connecté à Lovable Cloud (Supabase géré) avec auth Google + tables `profiles` / `user_progress` / `friendships`. Je vais étendre proprement plutôt que dupliquer.

## 1. Auth (déjà en place, ajouts ciblés)
- Google Sign-In : déjà fonctionnel via le broker Lovable sur `/login`.
- **Ajouter Email + mot de passe** (inscription + connexion) sur la page `/login`, avec onglets *Connexion / Inscription*. Outlook = via Microsoft OAuth (je l'active aussi via `configure_social_auth`).
- Garder la redirection `/login` → `/onboarding` → `/`.

## 2. Base de données (migration)
Je n'écrase pas l'existant. Je crée :

**`user_profiles`** (séparée de `profiles` qui sert au pseudo public)
- `user_id uuid PK references auth.users on delete cascade`
- `email text`
- `is_premium boolean default false`
- `stripe_customer_id text`
- `subscription_status text` (`inactive` / `active` / `canceled` / `past_due`)
- `updated_at timestamptz`
- Trigger sur `auth.users` → insert auto à l'inscription.
- RLS : SELECT/UPDATE `auth.uid() = user_id`. **Pas** d'UPDATE direct sur `is_premium` / `stripe_customer_id` / `subscription_status` côté client (policy restreinte aux champs sûrs via trigger qui bloque la modif de ces colonnes ; les écritures Stripe passent par `supabaseAdmin` côté serveur).

**`surah_progress`**
- `id uuid PK`, `user_id uuid` (FK `auth.users`), `surah_number int`
- `verses_memorized int[] default '{}'`
- `status text check in ('not_started','in_progress','memorized','needs_review') default 'not_started'`
- `memory_strength int check between 1 and 100 default 1`
- `last_reviewed_at timestamptz`
- Unique `(user_id, surah_number)`
- RLS : toutes opérations `auth.uid() = user_id`.

## 3. Stripe (Lovable seamless payments)
- Lancer `recommend_payment_provider` → puis `enable_stripe_payments`.
- Créer le produit "Sadaqah Jariyah & Premium" — 4.99 €/mois récurrent via `batch_create_product` (étape post-enable).
- **Server functions** (`src/lib/billing.functions.ts`) :
  - `createCheckoutSession` → crée session Stripe (mode subscription) et renvoie l'URL.
  - `createPortalSession` → ouvre le portail client.
  - `getBillingStatus` → renvoie `is_premium`, `subscription_status`.
- **Webhook** Stripe : route publique `src/routes/api/public/stripe-webhook.ts` qui vérifie la signature et met à jour `user_profiles.is_premium` + `subscription_status` (events `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`).

## 4. UI Paywall
- Nouvelle route `/premium` : page épurée avec gradient, liste de bénéfices (Peeking Mode, Smart Planner, Spaced Repetition colors, +futurs), bouton **"Devenir Premium — 4,99 €/mois"** + bouton **"Gérer mon abonnement"** (visible si déjà premium).
- Lien dans la `TopBar` (badge couronne).
- Hook `usePremium()` → lit `user_profiles.is_premium` (cache react-query).

## 5. Fonctionnalités Premium

**5a. Peeking Mode** (`src/components/PeekingVerse.tsx`)
- Dans `lesson.$surahId.tsx`, bouton 👁️ pour flouter/dévoiler le verset. Hold-to-reveal (mousedown/touchstart). Cadenas si non-premium → redirige `/premium`.

**5b. Smart Planner** (`/planner`)
- Form : choix sourate + nombre de jours.
- Calcule un plan (versets/jour répartis également).
- Stocké dans une nouvelle table `study_plans` (id, user_id, surah_number, target_date, items jsonb `[{day, date, verses, done}]`).
- Bouton "marquer manqué" → recalcule la répartition restante sur les jours restants.
- RLS user-scoped.

**5c. Spaced Repetition colors**
- Fonction utilitaire `getStrengthColor(memory_strength, last_reviewed_at)` :
  - vert si strength ≥ 70 ET reviewed < 3 jours
  - orange si strength 40-70 OU reviewed 3-7 jours
  - rouge sinon
- Appliqué sur `SurahPath` (pastille colorée) et carte sourate.

## Détails techniques
- Toutes les server functions critiques (billing, webhook update) utilisent `supabaseAdmin` côté serveur.
- Secret nécessaire : `STRIPE_WEBHOOK_SECRET` (ajouté via `add_secret` après l'enable).
- Types regenerés automatiquement après migration.

## Fichiers principaux créés/modifiés
- migration SQL (3 tables + triggers + RLS)
- `src/lib/billing.functions.ts`, `src/lib/billing.server.ts`
- `src/lib/premium.ts` (hook)
- `src/lib/spaced-repetition.ts`
- `src/routes/premium.tsx`, `src/routes/planner.tsx`
- `src/routes/api/public/stripe-webhook.ts`
- `src/components/PeekingVerse.tsx`, `src/components/PremiumLock.tsx`
- `src/routes/login.tsx` (ajout email/password tabs)
- `src/routes/lesson.$surahId.tsx`, `src/components/SurahPath.tsx`, `src/components/TopBar.tsx` (intégrations)

Confirme et je lance la migration puis l'activation Stripe.