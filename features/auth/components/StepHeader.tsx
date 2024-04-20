import { YStack, XStack, H2, SizableText } from 'tamagui';

export function StepTitle({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle?: string;
  icon: JSX.Element;
}) {
  return (
    <YStack gap="$3">
      <XStack ai="center" gap="$2">
        {icon}
        <H2>{title}</H2>
      </XStack>
      {!!subtitle && (
        <SizableText theme="alt1" size="$7">
          {subtitle}
        </SizableText>
      )}
    </YStack>
  );
}
