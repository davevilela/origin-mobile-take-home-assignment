import { useNetInfo } from '@react-native-community/netinfo';
import { LogOut } from '@tamagui/lucide-icons';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { Card, YStack, Text, Button, H3, H4, XStack } from 'tamagui';

import { CustomAvatar } from '~/components/ui/CustomAvatar';
import { useProfile } from '~/features/auth/hooks/useProfile';
import { useAuth } from '~/providers/auth/AuthProvider';

function NetworkMetrics() {
  const { isConnected, type } = useNetInfo();
  return (
    <Card size="$4" bordered borderRadius="$7">
      <Card.Header ai="center" gap="$3" flexDirection="column">
        <XStack jc="space-between" w="100%">
          <Text fontWeight="bold">Connection Status:</Text>
          <Text theme={isConnected ? 'green_alt1' : 'red_alt1'}>
            {isConnected ? 'Connected' : 'Disconnected'}
          </Text>
        </XStack>
        <XStack jc="space-between" w="100%">
          <Text fontWeight="bold">Connection type:</Text>
          <Text textTransform="capitalize">{type}</Text>
        </XStack>
      </Card.Header>
    </Card>
  );
}

export default function Modal() {
  const { profile } = useProfile();
  const { signOut } = useAuth();
  const { full_name, avatarUrl, email } = profile || {};
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Profile',
          presentation: 'modal',
        }}
      />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <YStack f={1} bg="$background" p="$5" gap="$5">
        {/* <AvatarPickerCard /> */}

        <Card size="$3" bordered borderRadius="$7">
          <Card.Header ai="center" gap="$3" flexDirection="row">
            <CustomAvatar size="$5" src={avatarUrl!} fallbackType="image" username="Davi Vilela" />
            <YStack f={1}>
              <Text fontWeight="700" fontSize="$6">
                {full_name}
              </Text>
              <Text theme="alt1" fontSize="$5">
                {email}
              </Text>
            </YStack>
            <Button bordered>Edit</Button>
          </Card.Header>
        </Card>
        <NetworkMetrics />

        <Button iconAfter={<LogOut />} onPress={() => signOut()} size="$5" theme="red_alt2">
          Sign-out
        </Button>
      </YStack>
    </>
  );
}
