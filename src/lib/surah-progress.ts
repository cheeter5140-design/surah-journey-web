import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

export interface SurahProgressRow {
  surah_number: number;
  memory_strength: number;
  last_reviewed_at: string | null;
  status: string;
}

export function useSurahProgress() {
  const { user, ready } = useAuth();
  const [rows, setRows] = useState<SurahProgressRow[]>([]);

  useEffect(() => {
    if (!ready || !user) return;
    supabase
      .from("surah_progress")
      .select("surah_number, memory_strength, last_reviewed_at, status")
      .eq("user_id", user.id)
      .then(({ data }) => setRows((data as SurahProgressRow[]) || []));
  }, [user, ready]);

  const byNumber = new Map(rows.map((r) => [r.surah_number, r]));
  return { rows, byNumber };
}
