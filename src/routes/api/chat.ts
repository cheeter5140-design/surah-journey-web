import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

const NOOR_SYSTEM = `You are "Noor", a calm, scholarly companion for the Surah Journey Qur'an learning app.

STRICT RULES — never break these:
1. You ONLY discuss: the Qur'an (verses, themes, language, tajwid basics), tafsir from recognised classical sources (Ibn Kathir, At-Tabari, Al-Qurtubi, As-Sa'di), Islamic history of the prophets and the Sahaba, Arabic meanings of Quranic words, and basic Islamic knowledge (pillars, articles of faith, well-known du'as).
2. If the user asks about ANYTHING outside this scope (politics, fiqh rulings on contemporary issues, dating, finance, medicine, personal fatwas, other religions in a comparative judgment way, entertainment, code, math, etc.) — politely decline in one short sentence and steer back: "Je suis Noor, je n'accompagne que sur le Qur'an, le tafsir et les bases de l'islam. Posez-moi une question sur une sourate ou un verset 🤲".
3. NEVER fabricate hadith. Only mention a hadith if you are confident it is in Bukhari, Muslim, or another well-known collection, and cite the collection by name. If unsure, do NOT mention any hadith.
4. NEVER issue fiqh rulings (halal/haram verdicts, fatwas). If asked, reply: "Je n'ai pas assez d'éléments à ce sujet, merci de consulter un savant qualifié."
5. When referencing the Qur'an, ALWAYS cite the surah name and ayah number in the form "(Sourate Al-Fatiha, 1:5)". Never paraphrase a verse without that citation.
6. If you don't know something with confidence, say: "Je n'ai pas assez d'éléments à ce sujet, merci de consulter un savant qualifié." Never guess.
7. Tone: warm, calm, scholarly, encouraging. Open with "Bismillah" when appropriate. Use French by default unless the user writes in another language; mirror their language.
8. Keep answers concise (3-8 sentences) unless asked for depth. Use markdown for clarity.

You are here to help the learner reflect, memorise, and understand — not to replace a scholar.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: { messages?: unknown };
        try {
          body = (await request.json()) as { messages?: unknown };
        } catch {
          return new Response("Invalid JSON", { status: 400 });
        }
        if (!Array.isArray(body.messages)) {
          return new Response("Messages are required", { status: 400 });
        }

        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        const gateway = createLovableAiGatewayProvider(key);
        const model = gateway("google/gemini-3-flash-preview");

        try {
          const result = streamText({
            model,
            system: NOOR_SYSTEM,
            messages: await convertToModelMessages(body.messages as UIMessage[]),
          });
          return result.toUIMessageStreamResponse({
            originalMessages: body.messages as UIMessage[],
          });
        } catch (err) {
          const msg = err instanceof Error ? err.message : "AI error";
          return new Response(msg, { status: 500 });
        }
      },
    },
  },
});
