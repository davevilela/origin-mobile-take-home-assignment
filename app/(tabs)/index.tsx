import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Button } from 'tamagui';

import { useAuth } from '~/providers/auth/AuthProvider';

export default function Home() {
  const { signOut } = useAuth();
  return (
    <>
      <Stack.Screen options={{ title: 'Tab One' }} />
      <View style={styles.container}>
        <Button onPress={() => signOut()}>Sign out</Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
