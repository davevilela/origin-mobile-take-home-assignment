import { useNetInfo } from '@react-native-community/netinfo';
import { WifiOff } from '@tamagui/lucide-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SizableText, XStack, YStack } from 'tamagui';

export function NetinfoIndicator() {
  const { top } = useSafeAreaInsets();
  const { isInternetReachable } = useNetInfo();

  if (isInternetReachable) return null;
  return (
    <YStack pt={top} bg="$red8">
      <XStack ai="center" jc="center" w="100%" bg="$red8" px="$3.5" py="$2" gap="$3">
        <WifiOff size={30} mt="$0.5" strokeWidth={2.5} />
        <SizableText lineHeight="$2">
          You are offline. Some of the app's capabilities won't be available.
        </SizableText>
      </XStack>
    </YStack>
  );
}
