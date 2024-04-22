import { Session } from '@supabase/supabase-js';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { LogBox, View } from 'react-native';

import { NetinfoIndicator } from '~/components/NetinfoIndicator';
import { AppProvider } from '~/providers/AppProvider';
import { useLoadSession } from '~/providers/auth/AuthProvider';

SplashScreen.preventAutoHideAsync();
// Warning: Cannot update a component (`Input`) while rendering a different component (`Theme`)

LogBox.ignoreLogs(['??', 'Warning: Cannot update a component']);

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
        <NetinfoIndicator />
        <Stack>
          <Stack.Screen
            name="profile"
            options={{
              // Set the presentation mode to modal for our modal route.
              presentation: 'modal',
            }}
          />
        </Stack>
      </AppProvider>
    </View>
  );
}
