import { createFileRoute } from "@tanstack/react-router";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import Stripe from "stripe";

export const Route = createFileRoute("/api/public/stripe-webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const sig = request.headers.get("stripe-signature");
        const secret = process.env.STRIPE_WEBHOOK_SECRET;
        const key = process.env.STRIPE_SECRET_KEY;
        if (!sig || !secret || !key) {
          return new Response("Misconfigured", { status: 500 });
        }
        const stripe = new Stripe(key, { apiVersion: "2024-06-20" as any });
        const body = await request.text();
        let event: Stripe.Event;
        try {
          event = await stripe.webhooks.constructEventAsync(body, sig, secret);
        } catch (err) {
          return new Response(`Webhook Error: ${(err as Error).message}`, { status: 400 });
        }

        const updateForCustomer = async (
          customerId: string,
          patch: { is_premium: boolean; subscription_status: string }
        ) => {
          await supabaseAdmin
            .from("user_profiles")
            .update(patch)
            .eq("stripe_customer_id", customerId);
        };

        switch (event.type) {
          case "checkout.session.completed": {
            const s = event.data.object as Stripe.Checkout.Session;
            const userId = (s.metadata?.user_id as string) || null;
            const customerId = (s.customer as string) || null;
            if (userId && customerId) {
              await supabaseAdmin
                .from("user_profiles")
                .update({
                  stripe_customer_id: customerId,
                  is_premium: true,
                  subscription_status: "active",
                })
                .eq("user_id", userId);
            } else if (customerId) {
              await updateForCustomer(customerId, {
                is_premium: true,
                subscription_status: "active",
              });
            }
            break;
          }
          case "customer.subscription.created":
          case "customer.subscription.updated": {
            const sub = event.data.object as Stripe.Subscription;
            const customerId = sub.customer as string;
            const active = sub.status === "active" || sub.status === "trialing";
            await updateForCustomer(customerId, {
              is_premium: active,
              subscription_status: sub.status,
            });
            break;
          }
          case "customer.subscription.deleted": {
            const sub = event.data.object as Stripe.Subscription;
            await updateForCustomer(sub.customer as string, {
              is_premium: false,
              subscription_status: "canceled",
            });
            break;
          }
          default:
            break;
        }
        return new Response("ok", { status: 200 });
      },
    },
  },
});
