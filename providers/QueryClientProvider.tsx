import NetInfo from '@react-native-community/netinfo';
import { QueryClient, focusManager, onlineManager } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { PropsWithChildren } from 'react';
import type { AppStateStatus } from 'react-native';
import { Platform } from 'react-native';

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: 2,
    },
  },
  // native query config
});

export function QueryClientProvider({ children }: PropsWithChildren) {
  useAppState(onAppStateChange);

  return (
    <PersistQueryClientProvider
      persistOptions={{ persister: queryClientPersister }}
      client={queryClient}
      onSuccess={() => {
        // queryClient.resumePausedMutations
      }}>
      {children}
    </PersistQueryClientProvider>
  );
}
