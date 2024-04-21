import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

type PersistorStorage = Parameters<typeof createSyncStoragePersister>[0]['storage'];

const clientStorage: PersistorStorage = {
  setItem: (key, value) => {
    storage.set(key, value);
  },
  getItem: (key: string) => {
    const value = storage.getString(key);
    return value === undefined ? null : value;
  },
  removeItem: (key) => {
    storage.delete(key);
  },
};

export const queryClientPersister = createSyncStoragePersister({ storage: clientStorage });
