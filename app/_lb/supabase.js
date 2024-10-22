import { createClient } from "@supabase/supabase-js";

export const supabase = createClient("git ", process.env.SUPABASE_KEY);
