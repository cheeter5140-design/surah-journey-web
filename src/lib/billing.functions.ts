import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import Stripe from "stripe";

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY missing");
  return new Stripe(key, { apiVersion: "2024-06-20" as any });
}

function getOrigin(): string {
  // Fallback to published URL
  return process.env.PUBLIC_SITE_URL || "https://surah-journey-web.lovable.app";
}

export const createCheckoutSession = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { userId } = context;
    const stripe = getStripe();
    const priceId = process.env.STRIPE_PRICE_ID;
    if (!priceId) throw new Error("STRIPE_PRICE_ID missing");

    // Load profile to find or create Stripe customer
    const { data: profile } = await supabaseAdmin
      .from("user_profiles")
      .select("email, stripe_customer_id")
      .eq("user_id", userId)
      .maybeSingle();

    let customerId = profile?.stripe_customer_id ?? null;
    const email = profile?.email ?? undefined;

    if (!customerId) {
      const customer = await stripe.customers.create({
        email,
        metadata: { user_id: userId },
      });
      customerId = customer.id;
      await supabaseAdmin
        .from("user_profiles")
        .update({ stripe_customer_id: customerId })
        .eq("user_id", userId);
    }

    const origin = getOrigin();
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer: customerId,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/premium?success=1`,
      cancel_url: `${origin}/premium?canceled=1`,
      allow_promotion_codes: true,
      metadata: { user_id: userId },
      subscription_data: { metadata: { user_id: userId } },
    });

    return { url: session.url };
  });

export const createPortalSession = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { userId } = context;
    const stripe = getStripe();
    const { data: profile } = await supabaseAdmin
      .from("user_profiles")
      .select("stripe_customer_id")
      .eq("user_id", userId)
      .maybeSingle();
    if (!profile?.stripe_customer_id) throw new Error("No Stripe customer");
    const origin = getOrigin();
    const portal = await stripe.billingPortal.sessions.create({
      customer: profile.stripe_customer_id,
      return_url: `${origin}/premium`,
    });
    return { url: portal.url };
  });
