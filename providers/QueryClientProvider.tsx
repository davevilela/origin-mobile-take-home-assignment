import NetInfo from '@react-native-community/netinfo';
import { useToastController } from '@tamagui/toast';
import { MutationCache, QueryClient, focusManager, onlineManager } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { PropsWithChildren, useState } from 'react';
import type { AppStateStatus } from 'react-native';
import { Platform } from 'react-native';

import { setTransactionsMutationDefaults } from '~/features/transactions/services/transactionMutations';
import { useAppState } from '~/hooks/useAppState';
import { queryClientPersister } from '~/lib/queryClientPersister';

onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(state.isConnected != null && state.isConnected && Boolean(state.isInternetReachable));
  });
});

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

const CACHE_TTL = 1000 * 60 * 60 * 24 * 7;
export function QueryClientProvider({ children }: PropsWithChildren) {
  const toast = useToastController();
  useAppState(onAppStateChange);

  const [queryClient] = useState(() => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: Infinity,
          gcTime: CACHE_TTL,
        },
        mutations: {
          gcTime: CACHE_TTL,
          retry: true,
        },
      },
      // configure global cache callbacks to show toast notifications
      mutationCache: new MutationCache({
        onSuccess: (data) => {
          console.log('[Mutation success]', data);
          // toast.success(data.message)
        },
        onError: (error) => {
          toast.show('An error has occurred.', {
            native: true,
            message: 'Please, try again.',
            burntOptions: { preset: 'none' },
          });
          console.log('[Mutation error]', error);
        },
      }),
      // native query config
    });
    return setTransactionsMutationDefaults(queryClient);
  });

  return (
    <PersistQueryClientProvider
      persistOptions={{ persister: queryClientPersister, maxAge: 1000 * 60 * 60 * 24 * 7 }}
      client={queryClient}
      onSuccess={() => {
        if (onlineManager.isOnline()) {
          queryClient.resumePausedMutations().then(() => {
            console.log('invalidating queries');
            queryClient.invalidateQueries();
          });
        }
      }}>
      {children}
    </PersistQueryClientProvider>
  );
}
