import { Session } from '@supabase/supabase-js';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { View } from 'react-native';

import { AppProvider } from '~/providers/AppProvider';
import { useLoadSession } from '~/providers/auth/AuthProvider';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: '(app)',
};

export default function RootLayout() {
  const [fontLoaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  const [initialSession, setInitialSession] = useState<Session | null>(null);
  const { isLoading: isLoadingSession } = useLoadSession({
    onSession(session) {
      setInitialSession(session);
    },
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded && !isLoadingSession) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded, isLoadingSession]);

  if (!fontLoaded || isLoadingSession) return null;

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <AppProvider initialSession={initialSession}>
        <Stack />
      </AppProvider>
    </View>
  );
}
