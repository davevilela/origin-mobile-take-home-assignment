import { Eye, EyeOff } from '@tamagui/lucide-icons';
import { Button, useControllableState } from 'tamagui';

export function SecureEntryButton({
  isSecure,
  onChange,
}: {
  isSecure: boolean;
  onChange?: (isSecure: boolean) => void;
}) {
  const [state, setState] = useControllableState({
    defaultProp: true,
    onChange,
    prop: isSecure,
  });

  const EyeIcon = state ? Eye : EyeOff;
  return (
    <Button
      theme="active"
      tabIndex={0}
      onPress={(ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        setState((old) => !old);
      }}
      icon={<EyeIcon size={20} strokeWidth={3} />}
      size="$2.5"
      bordered
      borderRadius="$6"
    />
  );
}
