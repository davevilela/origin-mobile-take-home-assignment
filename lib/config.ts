if (!process.env.EXPO_PUBLIC_SUPABASE_URL) {
  throw new Error(
    `EXPO_PUBLIC_SUPABASE_URL is not set. Please update the root .env.local and restart the server.`
  );
}

if (!process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error(
    `EXPO_PUBLIC_SUPABASE_ANON_KEY is not set. Please update the root .env.local and restart the server.`
  );
}

export const Config = {
  supabaseUrl: String(process.env.EXPO_PUBLIC_SUPABASE_URL),
  supabaseAnonKey: String(process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY),
  baseApiUrl: String(process.env.EXPO_PUBLIC_BASE_API_URL),
};
