import { FlashList } from '@shopify/flash-list';
import type { IconProps } from '@tamagui/helpers-icon';
import { Banknote, ChevronRight, Landmark, Receipt, WalletCards } from '@tamagui/lucide-icons';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Link, Stack } from 'expo-router';
import { useDeferredValue, useMemo, useState } from 'react';
import { Pressable, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListItem, SizableText, Text, Theme, ThemeName, XStack, YStack } from 'tamagui';

import { CustomAvatar } from '~/components/ui/CustomAvatar';
import { transactionServices } from '~/features/transactions/services/transactionsServices';
import { Transaction, TransactionTypes } from '~/features/transactions/types/transactions';
import { formatDateDistance } from '~/lib/helpers';
import { useAuth } from '~/providers/auth/AuthProvider';

function useTransactionsQuery({ pageSize = 10 }: { pageSize?: number } = {}) {
  const query = useInfiniteQuery({
    queryKey: ['transactions'],

    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) => {
      const res = await transactionServices.fetchTransactions({ page: pageParam, pageSize });
      return res;
    },
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.Page + 1;
      const maxPage = Math.ceil(lastPage.TotalRecords / lastPage.PageSize);
      return nextPage <= maxPage ? nextPage : undefined; // Only return nextPage if it exists
    },
  });

  const transactions = useMemo(
    () =>
      query.data?.pages.reduce((prev, page) => {
        return [...prev, ...page.Transactions];
      }, [] as Transaction[]),
    [query.data?.pages]
  );

  return { transactions, ...query };
}

type TransactionTemplateType = { Icon: React.NamedExoticComponent<IconProps>; theme: ThemeName };

const transactionTypeThemes: Record<TransactionTypes, TransactionTemplateType> = {
  deposit: {
    Icon: WalletCards,
    theme: 'green_alt1',
  },
  invoice: {
    Icon: Receipt,
    theme: 'orange_alt1',
  },
  payment: {
    Icon: Banknote,
    theme: 'accent_alt1',
  },
  withdrawal: {
    Icon: Landmark,
    theme: 'blue_alt1',
  },
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const { session, signOut } = useAuth();
  const { transactions, refetch, isLoading, fetchNextPage, hasNextPage } = useTransactionsQuery({
    pageSize: 10,
  });

  const deferredSearchTerm = useDeferredValue(searchTerm);

  const filteredItems = useMemo(
    () =>
      transactions?.filter(
        (transaction) =>
          transaction.Vendor.toLowerCase().includes(deferredSearchTerm.toLowerCase()) ||
          transaction.Category.toLowerCase().includes(deferredSearchTerm.toLowerCase())
      ),
    [deferredSearchTerm, transactions]
  );

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Transactions',

          headerShown: true,

          headerSearchBarOptions: {
            inputType: 'text',
            placeholder: 'Type to search',
            onChangeText: (term) => setSearchTerm(term.nativeEvent.text),
          },
          headerRight(props) {
            return (
              <YStack alignSelf="flex-end" h="100%">
                <Pressable onPress={() => signOut()}>
                  <CustomAvatar
                    size="$2.5"
                    username={session?.user.email || ''}
                    fallbackType="image"
                  />
                </Pressable>
              </YStack>
            );
          },
        }}
      />
      <SafeAreaView style={{ flex: 1 }} edges={['left', 'right', 'top']}>
        <YStack f={1} px="$4">
          <FlashList
            data={filteredItems}
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={() => refetch({})} />}
            ListHeaderComponent={<YStack h="$4" />}
            contentInsetAdjustmentBehavior="automatic"
            keyExtractor={(item) => String(item.Id)}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoading || hasNextPage) return;
              fetchNextPage();
            }}
            renderItem={({ item, index }) => {
              const { Icon, theme } = transactionTypeThemes[item.Type];
              return (
                <Link href={`/(app)/transactions/${item.Id}`} asChild>
                  <ListItem
                    pressTheme
                    p="$0"
                    pl="$3"
                    bg="$gray1"
                    {...(index === 0
                      ? { borderTopRightRadius: '$5', borderTopLeftRadius: '$5' }
                      : {})}
                    {...(index === (transactions?.length || 0) - 1
                      ? { borderBottomRightRadius: '$5', borderBottomLeftRadius: '$5' }
                      : {})}>
                    <XStack f={1} bbw={1} bc="$gray6" py="$2" pr="$2">
                      <YStack f={1}>
                        <SizableText numberOfLines={1} size="$6">
                          {item.Vendor}
                        </SizableText>

                        <Text theme={theme} textTransform="capitalize">
                          {item.Type}
                        </Text>
                        <Theme name="alt2">
                          <Text textTransform="capitalize" theme="alt2">
                            {item.Category}
                          </Text>
                          <Text theme="alt2">{formatDateDistance(new Date(item.Date))}</Text>
                        </Theme>
                      </YStack>
                      <YStack theme="alt1" ai="flex-end" jc="space-between">
                        <XStack py="$1.5" ai="flex-start">
                          <SizableText size="$5" lineHeight="$3">
                            {formatCurrency(item.Amount)}
                          </SizableText>
                          <ChevronRight />
                        </XStack>
                        <Icon size="$1" />
                      </YStack>
                    </XStack>
                  </ListItem>
                </Link>
              );
            }}
            estimatedItemSize={381}
          />
        </YStack>
      </SafeAreaView>
    </>
  );
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'narrowSymbol',
  }).format(amount);
}
