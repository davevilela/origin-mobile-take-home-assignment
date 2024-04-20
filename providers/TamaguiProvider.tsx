import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { PropsWithChildren } from 'react';
import { useTheme, TamaguiProvider as TamaguiProviderOG } from 'tamagui';

import { useRootTheme, useThemeSetting } from './ThemeProvider';

import config from '~/tamagui.config';

/** Maps tamagui colors to react-navigation system colors */
function ReactNavigationThemeWrapper({ children }: PropsWithChildren) {
  const { resolvedTheme } = useThemeSetting();
  const theme = useTheme();

  const fallback = resolvedTheme === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <ThemeProvider
      value={{
        dark: resolvedTheme === 'dark',
        colors: {
          ...fallback.colors,
          text: theme.color.val,
        },
      }}>
      {children}
    </ThemeProvider>
  );
}

export const TamaguiProvider = ({ children }: { children: React.ReactNode }) => {
  const [rootTheme] = useRootTheme();

  return (
    <TamaguiProviderOG
      config={config}
      disableInjectCSS
      disableRootThemeClass
      defaultTheme={rootTheme}>
      <ReactNavigationThemeWrapper>{children}</ReactNavigationThemeWrapper>
    </TamaguiProviderOG>
  );
};
