import { AuthError, Session } from '@supabase/supabase-js';
import { useState } from 'react';

import { UserSignUpSchema } from '../schemas/signUpSchema';

import { useSupabase } from '~/lib/supabase/useSupabase';

type UserSignUpData = Partial<UserSignUpSchema>;

type SignUpWithEmailResponse = {
  success: boolean;
  error: AuthError | Error | null;
  session: Session | null;
};

const INITIAL_STATE: SignUpWithEmailResponse = {
  success: false,
  error: null,
  session: null,
};

export function useSignUpWithEmail() {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState<SignUpWithEmailResponse>(INITIAL_STATE);
  const supabase = useSupabase();

  const onSubmit = async (payload: UserSignUpData): Promise<SignUpWithEmailResponse> => {
    let response: SignUpWithEmailResponse = {
      error: new Error('Unexpected Error'),
      success: false,
      session: null,
    };
    try {
      setState(INITIAL_STATE);
      setLoading(true);
      const { ...formData } = payload;
      const parsedData = UserSignUpSchema.parse(formData);

      const { email, password, name } = parsedData;

      const {
        data: { session },
        error,
      } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
        },
      });

      if (error) {
        throw error;
      }

      response = {
        error: null,
        success: true,
        session: session!,
      };
    } catch (error) {
      // if (isAuthApiError(error)) {
      //   // error.code == ErrorCode
      // }
      if (error instanceof Error) {
        response = {
          success: false,
          session: null,
          error,
        };
      }
    } finally {
      setLoading(false);
    }

    setState(response);
    return response;
  };

  return [onSubmit, { loading, ...state }] as const;
}
