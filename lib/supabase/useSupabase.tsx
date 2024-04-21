import { supabase } from './supabaseClient';
import { TypedSupabaseClient } from './types/supabase';

export const useSupabase = () => supabase as TypedSupabaseClient;
