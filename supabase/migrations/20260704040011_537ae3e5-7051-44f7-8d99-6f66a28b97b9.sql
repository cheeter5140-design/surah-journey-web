
-- 1. friendships: defense-in-depth restrictive policy blocking requester from updating
CREATE POLICY "Requester cannot update friendship"
ON public.friendships
AS RESTRICTIVE
FOR UPDATE
TO authenticated
USING (auth.uid() <> requester_id)
WITH CHECK (auth.uid() <> requester_id);

-- 2. user_profiles: allow owner to delete their own row
CREATE POLICY "Users delete own user_profiles"
ON public.user_profiles
FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

-- 3. user_progress: allow owner to delete their own row
CREATE POLICY "Users delete own progress"
ON public.user_progress
FOR DELETE
TO authenticated
USING (auth.uid() = user_id);
