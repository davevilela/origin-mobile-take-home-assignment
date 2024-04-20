import { Stack } from 'expo-router';

import { SignUpScreen } from '~/features/auth/screens/SignUpScreen';

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Sign Up',
        }}
      />
      <SignUpScreen />
    </>
  );
}
