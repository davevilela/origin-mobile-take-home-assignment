import { Stack } from 'expo-router';
import { YStack, useTheme } from 'tamagui';

import { CurrenUserAvatar } from '~/components/CurrentUserAvatar';
import { TransactionListScreen } from '~/features/transactions/screens/TransactionListScreen';
import { SearchContextProvider, useSearch } from '~/hooks/useSearch';

export default function Home() {
  const theme = useTheme();
  const searchState = useSearch();
  const { setSearch } = searchState;
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Transactions',
          headerShown: true,
          headerSearchBarOptions: {
            inputType: 'text',
            headerIconColor: theme.color12.val,
            textColor: theme.color12.val,
            hintTextColor: theme.color10.val,
            shouldShowHintSearchIcon: false,
            placeholder: 'Type to search',
            onChangeText: (term) => setSearch(term.nativeEvent.text),
          },
          headerRight() {
            return (
              <YStack alignSelf="flex-end" h="100%">
                <CurrenUserAvatar />
              </YStack>
            );
          },
        }}
      />
      <SearchContextProvider value={searchState}>
        <TransactionListScreen />
      </SearchContextProvider>
    </>
  );
}
