// src/lib/premium.ts
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

export interface PremiumStatus {
  is_premium: boolean;
  subscription_status: string;
  stripe_customer_id: string | null;
}

export function usePremium() {
  const { user, ready: authReady } = useAuth();
  const [status, setStatus] = useState<PremiumStatus>({
    is_premium: false,
    subscription_status: "inactive",
    stripe_customer_id: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authReady) return;
    if (!user) {
      setLoading(false);
      return;
    }
    supabase
      .from("user_profiles")
      .select("is_premium, subscription_status, stripe_customer_id")
      .eq("user_id", user.id)
      .single()
      .then(({ data, error }) => {
        if (!error && data) {
          setStatus({
            is_premium: data.is_premium ?? false,
            subscription_status: data.subscription_status ?? "inactive",
            stripe_customer_id: data.stripe_customer_id ?? null,
          });
        }
        setLoading(false);
      });
  }, [user, authReady]);

  return { ...status, loading };
}
