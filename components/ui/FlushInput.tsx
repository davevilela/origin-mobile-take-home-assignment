import React, { PropsWithChildren, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { InputProps, YStack, SizableText, Input, StackProps, Stack } from 'tamagui';

import { mergeRefs } from '~/lib/react/utils';

export function FlushInputFrame(
  props: PropsWithChildren<
    {
      focused?: boolean;
      label?: string;
      rightElement?: React.ReactNode;
    } & StackProps
  >
) {
  const { focused, label, children, rightElement, ...stackProps } = props;
  return (
    <Stack
      {...stackProps}
      borderWidth={1}
      borderRadius="$6"
      bg="$color5"
      bc={focused ? '$colorFocus' : '$color7'}
      py="$2"
      w="100%"
      flexDirection="row"
      paddingStart="$3"
      paddingEnd="$2"
      ai="center">
      <YStack f={1} gap="$-1.5">
        {label && (
          <SizableText fontSize="$3" h="min">
            {label}
          </SizableText>
        )}
        {children}
      </YStack>
      {rightElement}
    </Stack>
  );
}

type FlushInputProps = {
  label?: string;
  rightElement?: React.ReactNode;
} & InputProps;

export const FlushInput = React.forwardRef<TextInput, FlushInputProps>(
  function FlushInput(props, ref) {
    const { label, rightElement, ...restProps } = props;
    const inputRef = useRef<TextInput>(null);
    const [focused, setFocused] = useState(false);

    return (
      <FlushInputFrame
        label={label}
        focused={focused}
        rightElement={rightElement}
        onPress={() => inputRef.current?.focus()}>
        <Input
          ref={mergeRefs([inputRef, ref])}
          {...restProps}
          bg="$colorTransparent"
          h="$2"
          bw="$0"
          p="$0"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </FlushInputFrame>
    );
  }
);
