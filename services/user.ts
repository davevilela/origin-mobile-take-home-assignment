import { SupabaseClient } from '@supabase/supabase-js';

import { Database } from '~/lib/supabase/types/database.types';

export async function upsertUserProfile(
  supabase: SupabaseClient<Database>,
  params: Database['public']['Tables']['profiles']['Update'] & { id: string }
) {
  return supabase.from('profiles').upsert(params);
}
