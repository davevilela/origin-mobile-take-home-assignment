import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SignInScreen } from '~/features/auth/screens/SignInScreen';

export default function Screen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
      <Stack.Screen
        options={{
          title: 'Sign In',
          headerShown: false,
        }}
      />

      <SignInScreen />
    </SafeAreaView>
  );
}
