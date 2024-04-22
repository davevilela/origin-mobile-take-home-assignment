import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

import { globalStorage } from './storage';

type PersistorStorage = Parameters<typeof createSyncStoragePersister>[0]['storage'];

const clientStorage: PersistorStorage = {
  setItem: (key, value) => {
    globalStorage.set(key, value);
  },
  getItem: (key: string) => {
    const value = globalStorage.getString(key);

    return value === undefined ? null : value;
  },
  removeItem: (key) => {
    globalStorage.delete(key);
  },
};

export const queryClientPersister = createSyncStoragePersister({ storage: clientStorage });
