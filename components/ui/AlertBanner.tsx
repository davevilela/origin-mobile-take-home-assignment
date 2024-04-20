import type { IconProps } from '@tamagui/helpers-icon';
import { AlertCircle, Check, MessageCircleX } from '@tamagui/lucide-icons';
import { Theme, Card, XStack, SizableText, ThemeName } from 'tamagui';
type AlertStatus = 'success' | 'error' | 'warning';

export type AlertProps = {
  title: string;
  // message?: string;
  status?: 'success' | 'error' | 'warning';
};

type AlertTemplate = {
  Icon: React.NamedExoticComponent<IconProps>;
  theme: ThemeName;
};
const alertTemplates = {
  error: {
    Icon: MessageCircleX,
    theme: 'red_active',
  },
  success: {
    Icon: Check,
    theme: 'green_active',
  },
  warning: {
    Icon: AlertCircle,
    theme: 'amber_alt1',
  },
} as Record<AlertStatus, AlertTemplate>;

export function AlertBanner(props: AlertProps) {
  const { status = 'success', title } = props;
  const { Icon, theme } = alertTemplates[status];
  return (
    <Theme name={theme}>
      <Card bordered backgrounded>
        <Card.Header>
          <XStack gap="$2">
            <Icon strokeWidth={2} />
            <SizableText fontWeight="700">{title}</SizableText>
          </XStack>
        </Card.Header>
      </Card>
    </Theme>
  );
}
