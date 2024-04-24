import { FlashList } from '@shopify/flash-list';
import { Link } from 'expo-router';
import { useMemo } from 'react';
import { RefreshControl } from 'react-native';
import { YStack } from 'tamagui';

import { TransactionItem } from './TransactionItem';
import { useTransactionsInfiniteQuery } from '../hooks/useTransactions';

export function TransactionsList(props: { searchTerm: string }) {
  const { searchTerm = '' } = props;
  const { transactions, refetch, isLoading, isRefetching, fetchNextPage, hasNextPage } =
    useTransactionsInfiniteQuery({
      pageSize: 10,
    });

  const filteredItems = useMemo(
    () =>
      transactions?.filter(
        (transaction) =>
          transaction.Vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
          transaction.Type.toLowerCase().includes(searchTerm.toLowerCase()) ||
          transaction.Category.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm, transactions]
  );

  const listSize = filteredItems?.length;

  return (
    <YStack f={1} px="$4">
      <FlashList
        data={filteredItems}
        refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={() => refetch()} />}
        ListHeaderComponent={<YStack h="$4" />}
        contentInsetAdjustmentBehavior="automatic"
        keyExtractor={(item) => String(item.Id)}
        onEndReached={() => {
          if (isLoading || !hasNextPage) return;
          fetchNextPage();
        }}
        extraData={{ listSize }}
        renderItem={({ item, index, extraData }) => {
          const isLast = index === extraData.listSize - 1;
          const isFirst = index === 0;

          return (
            <Link href={`/(app)/transaction/${item.Id}`} asChild>
              <TransactionItem
                transaction={item}
                {...(isFirst ? transactionItemStyles.first : {})}
                {...(isLast ? transactionItemStyles.last : {})}
              />
            </Link>
          );
        }}
        estimatedItemSize={381}
      />
    </YStack>
  );
}

const transactionItemStyles = {
  first: { borderTopRightRadius: '$5', borderTopLeftRadius: '$5' },
  last: { borderBottomRightRadius: '$5', borderBottomLeftRadius: '$5' },
} as const;
