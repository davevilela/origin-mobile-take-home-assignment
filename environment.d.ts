declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      NODE_ENV: 'development' | 'production' | 'test';

      EXPO_PUBLIC_URL: string;

      EXPO_PUBLIC_SUPABASE_URL: string;
      EXPO_PUBLIC_SUPABASE_ANON_KEY: string;
      EXPO_PUBLIC_BASE_API_URL: string;
    }
  }
}

export {};
