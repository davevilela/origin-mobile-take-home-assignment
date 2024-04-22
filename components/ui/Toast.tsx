import { X } from '@tamagui/lucide-icons';
import {
  ToastProvider as ToastProviderOG,
  ToastViewportProps,
  ToastViewport as ToastViewportOg,
  useToastState,
  Toast,
} from '@tamagui/toast';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Portal, XStack, YStack } from 'tamagui';

export const CustomToast = () => {
  const currentToast = useToastState();

  if (!currentToast || currentToast.isHandledNatively) {
    return null;
  }

  return (
    <Toast
      key={currentToast.id}
      duration={currentToast.duration}
      viewportName={currentToast.viewportName}
      enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
      exitStyle={{ opacity: 0, scale: 1, y: -20 }}
      y={0}
      opacity={1}
      scale={1}
      animation="100ms"
      themeInverse>
      <YStack>
        <XStack gap="$3">
          <Toast.Title>{currentToast.title}</Toast.Title>

          <Toast.Close asChild>
            <Button
              chromeless
              icon={X}
              size="$1"
              circular
              style={{ alignItems: 'center', justifyContent: 'center' }}>
              Close
            </Button>
          </Toast.Close>
        </XStack>
        {!!currentToast.message && <Toast.Description>{currentToast.message}</Toast.Description>}
      </YStack>
    </Toast>
  );
};

export const ToastViewport = () => {
  const { top, right, left } = useSafeAreaInsets();
  return <ToastViewportOg top={top + 5} left={left} right={right} />;
};

export const ToastProvider = ({
  children,
  ...viewportProps
}: { children: React.ReactNode } & ToastViewportProps) => {
  return (
    <ToastProviderOG
      swipeDirection="horizontal"
      swipeThreshold={20}
      duration={6000}
      native={
        [
          /* uncomment the next line to do native toasts on mobile - note that it won't be as customizable as custom toasts, especially on android */
          // 'mobile'
        ]
      }>
      {children}
      <Portal zIndex={9999}>
        <ToastViewport {...viewportProps} />
      </Portal>
      <CustomToast />
    </ToastProviderOG>
  );
};
