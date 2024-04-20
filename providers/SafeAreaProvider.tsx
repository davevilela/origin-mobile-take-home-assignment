import { PropsWithChildren } from 'react';
import { SafeAreaProvider as SafeAreaProviderOG } from 'react-native-safe-area-context';

export const SafeAreaProvider = ({ children }: PropsWithChildren) => {
  return <SafeAreaProviderOG>{children}</SafeAreaProviderOG>;
};
