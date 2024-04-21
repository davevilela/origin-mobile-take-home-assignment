import { PropsWithChildren } from 'react';
import { AnimatePresence, YStack, YStackProps } from 'tamagui';

export function Fade({
  children,
  open,
  ...stackProps
}: PropsWithChildren<{ open?: boolean } & YStackProps>) {
  return (
    <AnimatePresence>
      {!!open && (
        <YStack
          animation="quick"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
          f={1}
          position="relative"
          {...stackProps}>
          {children}
        </YStack>
      )}
    </AnimatePresence>
  );
}
