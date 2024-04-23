import { AuthApiError } from '@supabase/supabase-js';
import { useState } from 'react';

import { SignInSchema } from '../schemas/signInSchema';

import { useSupabase } from '~/lib/supabase/useSupabase';

export function useSignInWithCredentials() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AuthApiError | null>(null);
  const supabase = useSupabase();

  async function signInWithCredentials({ email, password }: SignInSchema) {
    setLoading(true);
    try {
      const response = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      return response;
    } catch (error) {
      if (error instanceof AuthApiError) {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  }

  return [signInWithCredentials, { loading, error }] as const;
}
