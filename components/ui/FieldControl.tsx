import { PropsWithChildren, useId } from 'react';
import { Fieldset, Label, SizeTokens, StackProps, Theme, ThemeableStack } from 'tamagui';

import { FieldError } from './FieldError';
import { Shake } from './Shake';

export function FieldControl(
  props: PropsWithChildren<
    {
      name?: string;
      label?: string;
      size?: SizeTokens;
      errorMessage?: string;
    } & StackProps
  >
) {
  const { size, children, label, name, errorMessage, ...rest } = props;
  const randomId = useId();

  const id = name || randomId;
  const error = !!errorMessage?.length;
  return (
    <Fieldset {...rest}>
      <Theme name={error ? 'red' : null}>
        {!!label && <Label size={size}>{label}</Label>}

        <Shake shakeKey={errorMessage}>
          <ThemeableStack id={id}>{children}</ThemeableStack>
        </Shake>
        <FieldError message={errorMessage} />
      </Theme>
    </Fieldset>
  );
}
