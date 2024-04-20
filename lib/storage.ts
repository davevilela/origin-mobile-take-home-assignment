import { MMKV } from 'react-native-mmkv';

export const makeStorage = (userId: string) => {
  return new MMKV({
    id: `user-${userId}-storage`,
    encryptionKey: 'hunter2',
  });
};

export const globalStorage = new MMKV();
