import { SafeAreaView } from 'react-native-safe-area-context';

import { TransactionsList } from '../components/TransactionsList';

import { useSearchContext } from '~/hooks/useSearch';

export function TransactionListScreen() {
  const { search } = useSearchContext();
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
      <TransactionsList searchTerm={search} />
    </SafeAreaView>
  );
}
