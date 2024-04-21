import { AuthError, Session } from '@supabase/supabase-js';
import { useRouter, router, useSegments, usePathname } from 'expo-router';
import React, { PropsWithChildren, createContext, useCallback, useEffect, useState } from 'react';
import { Platform } from 'react-native';

import { useStableCallback } from '~/lib/react/utils';
import { supabase } from '~/lib/supabase/supabaseClient';
import { useSupabase } from '~/lib/supabase/useSupabase';

export type AuthControllerProps = {
  initialSession?: Session | null;
};

export function useAuthDataProvider(props: AuthControllerProps) {
  const { initialSession } = props;
  const [session, setSession] = useState<Session | null>(initialSession || null);

  const { error, isLoading } = useLoadSession({
    onSession(session) {
      setSession(session);
    },
  });

  useAuthStateChanged({
    onSession(session) {
      setSession(session);
    },
  });

  const signOut = useCallback(() => {
    supabase.auth.signOut();
  }, []);

  return {
    error,
    signOut,
    isLoading,
    session,
  };
}

export type AuthContextValue = ReturnType<typeof useAuthDataProvider>;

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

export function AuthProvider({ children, initialSession }: PropsWithChildren<AuthControllerProps>) {
  const controller = useAuthDataProvider({ initialSession });
  return (
    <AuthContext.Provider value={controller}>
      <AuthGuard>{children}</AuthGuard>
    </AuthContext.Provider>
  );
}

export const useAuth = () => React.useContext(AuthContext);

export function useLoadSession({
  onSession,
}: { onSession?: (session: Session | null) => void } = {}) {
  const _onSession = useStableCallback(onSession);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<AuthError | null>(null);
  useEffect(function init() {
    supabase.auth
      .getSession()
      .then(({ data: { session: newSession } }) => {
        _onSession?.(newSession);
      })
      .catch((error) => setError(new AuthError(error.message)))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { isLoading, error };
}

export function useAuthStateChanged({
  onSession,
}: {
  onSession?: (session: Session | null) => void;
}) {
  const _onSession = useStableCallback(onSession);
  useEffect(function subscribeToAuthStateChanges() {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      _onSession?.(newSession);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);
}

export const useRedirectAfterSignOut = () => {
  const supabase = useSupabase();
  const router = useRouter();
  useEffect(() => {
    const signOutListener = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_OUT') {
        router.replace('/sign-in');
      }
    });
    return () => {
      signOutListener.data.subscription.unsubscribe();
    };
  }, [supabase, router]);
};

export function AuthGuard({ children }: PropsWithChildren) {
  useProtectedRoute();

  return <>{children}</>;
}

export function useProtectedRoute() {
  const { session, isLoading } = useAuth();
  const segments = useSegments();
  const pathname = usePathname();

  const isSignUp = pathname === '/sign-up';

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';
    if (isLoading || isSignUp) return;
    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !session &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      replaceRoute('/sign-in');
    } else if ((!!session && inAuthGroup) || (!!session && !segments.length)) {
      // Redirect away from the sign-in page.
      replaceRoute('/(app)/');
    }
  }, [segments, session, isLoading]);

  return !isLoading;
}

/**
 * temporary fix
 *
 * see https://github.com/expo/router/issues/740
 * see https://github.com/expo/router/issues/745
 *  */
const replaceRoute = (href: any) => {
  if (Platform.OS === 'ios') {
    setTimeout(() => {
      router.replace(href);
    }, 1);
  } else {
    setImmediate(() => {
      router.replace(href);
    });
  }
};
