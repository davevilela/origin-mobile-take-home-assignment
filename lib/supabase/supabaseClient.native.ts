import 'react-native-url-polyfill/auto';

import { createClient } from '@supabase/supabase-js';

import { getSecureStorageAdapter } from './SecureStorageAdapter.native';
import { Database } from './types/database.types';
import { Config } from '../config';

export const supabase = createClient<Database>(Config.supabaseUrl, Config.supabaseAnonKey, {
  auth: {
    storage: getSecureStorageAdapter(),
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
