import { StatusBar } from 'expo-status-bar';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import { useColorScheme } from 'react-native';
import { useForceUpdate } from 'tamagui';

import { globalStorage } from '~/lib/storage';

const THEME_STORAGE_KEY = '@preferred_theme';

type ThemeName = 'light' | 'dark' | 'system';

function useThemeController() {
  const [current, setCurrent] = useState<ThemeName>('system');
  const systemTheme = useColorScheme();

  useLayoutEffect(() => {
    async function main() {
      const persistedTheme = globalStorage.getString(THEME_STORAGE_KEY);

      if (persistedTheme) {
        setCurrent(persistedTheme as ThemeName);
      }
    }
    main();
  }, []);

  useEffect(() => {
    async function main() {
      globalStorage.set(THEME_STORAGE_KEY, current);
      // await AsyncStorage.setItem('@preferred_theme', current)
    }
    main();
  }, [current]);

  const forceUpdate = useForceUpdate();

  const themeContext = useMemo(() => {
    return {
      themes: ['light', 'dark'],
      onChangeTheme: (next: string) => {
        setCurrent(next as ThemeName);
        forceUpdate();
      },
      current,
      systemTheme,
    };
  }, [current, forceUpdate, systemTheme]);

  return themeContext;
}

type ThemeContextValue = ReturnType<typeof useThemeController>;
export const ThemeContext = createContext<ThemeContextValue | null>(null);

export const useThemeSetting = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useThemeSetting should be used within the context provider.');
  }
  const outputContext = {
    ...context,
    systemTheme: context.systemTheme as 'light' | 'dark',
    themes: context.themes!,
    current: context.current ?? 'system',
    resolvedTheme: context.current === 'system' ? context.systemTheme : context.current ?? 'system',
    set: (value: string) => {
      context.onChangeTheme?.(value);
    },
    toggle: () => {
      const map = {
        light: 'dark',
        dark: 'system',
        system: 'light',
      };
      context.onChangeTheme?.(map[(context.current as ThemeName) ?? 'system']);
    },
  };

  return outputContext;
};

export const useRootTheme = () => {
  const context = useThemeSetting();

  return [
    context.current === 'system' ? context.systemTheme : context.current,
    context.set,
  ] as const;
};

const StatusbarProvider = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme } = useThemeSetting();

  return (
    <>
      <StatusBar style={resolvedTheme === 'dark' ? 'light' : 'dark'} />
      {children}
    </>
  );
};

export function ThemeProvider({ children }: PropsWithChildren) {
  const themeContext = useThemeController();
  return (
    <ThemeContext.Provider value={themeContext}>
      <StatusbarProvider>{children}</StatusbarProvider>
    </ThemeContext.Provider>
  );
}
