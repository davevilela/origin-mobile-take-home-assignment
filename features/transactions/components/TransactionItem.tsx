import { ChevronRight } from '@tamagui/lucide-icons';
import React, { ComponentRef } from 'react';
import { ListItem, SizableText, XStack, YStack, Text, Theme, ListItemProps } from 'tamagui';

import { transactionUIConfigurations } from '../utils';

import { Transaction } from '~/features/transactions/types/transactions';
import { formatCurrency, formatDateDistance } from '~/lib/helpers';

type TransactionItemProps = {
  transaction: Transaction;
} & ListItemProps;

export const TransactionItem = React.forwardRef<
  ComponentRef<typeof ListItem>,
  TransactionItemProps
>(function TransactionItem(props, ref) {
  const { transaction, ...listItemProps } = props;
  const { IconComponent, formatTransactionValue, theme } =
    transactionUIConfigurations[transaction.Type];
  return (
    <ListItem ref={ref} {...listItemProps} pressTheme p="$0" pl="$3" bg="$gray1">
      <XStack f={1} bbw={1} bc="$gray6" py="$2" pr="$2">
        <YStack f={1}>
          <SizableText numberOfLines={1} size="$6">
            {transaction.Vendor}
          </SizableText>

          <Text theme={theme} textTransform="capitalize">
            {transaction.Type}
          </Text>
          <Theme name="alt2">
            <Text textTransform="capitalize" theme="alt2">
              {transaction.Category}
            </Text>
            <Text theme="alt2">{formatDateDistance(new Date(transaction.Date))}</Text>
          </Theme>
        </YStack>
        <YStack theme="alt1" ai="flex-end" jc="space-between">
          <XStack py="$1.5" ai="flex-start">
            <Text fontSize="$5" lineHeight="$3" theme={theme}>
              {formatCurrency(formatTransactionValue(transaction.Amount))}
            </Text>
            <ChevronRight />
          </XStack>
          <IconComponent size="$1" />
        </YStack>
      </XStack>
    </ListItem>
  );
});
