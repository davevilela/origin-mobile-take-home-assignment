import { ComponentProps, PropsWithChildren } from 'react';

import { ReactQueryProvider } from './ReactQueryProvider';
import { SafeAreaProvider } from './SafeAreaProvider';
import { TamaguiProvider } from './TamaguiProvider';
import { ThemeProvider } from './ThemeProvider';
import { AuthProvider } from './auth/AuthProvider';

import { compose } from '~/lib/react/utils';

const BaseProviders = compose([
  ThemeProvider,
  SafeAreaProvider,
  TamaguiProvider,
  ReactQueryProvider,
]);

export function AppProvider({
  children,
  ...authProviderProps
}: PropsWithChildren<ComponentProps<typeof AuthProvider>>) {
  return (
    <BaseProviders>
      <AuthProvider {...authProviderProps}>{children}</AuthProvider>
    </BaseProviders>
  );
}
