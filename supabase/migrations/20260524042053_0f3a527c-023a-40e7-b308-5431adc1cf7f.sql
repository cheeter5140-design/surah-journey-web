-- Restrict profile visibility to authenticated users
DROP POLICY IF EXISTS "Profiles are viewable by everyone" ON public.profiles;
CREATE POLICY "Profiles viewable by authenticated users"
ON public.profiles
FOR SELECT
TO authenticated
USING (true);

-- Restrict friendship status updates to the addressee only
DROP POLICY IF EXISTS "Addressee can update (accept) friend requests" ON public.friendships;
CREATE POLICY "Only addressee can update friendship status"
ON public.friendships
FOR UPDATE
TO authenticated
USING (auth.uid() = addressee_id)
WITH CHECK (auth.uid() = addressee_id);
