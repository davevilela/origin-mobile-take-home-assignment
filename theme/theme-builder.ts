import { createThemeBuilder } from '@tamagui/theme-builder';

import { componentThemeDefinitions, nonInherited } from './componentThemeDefinitions';
import { colorThemeDefinition } from './helpers';
import { palettes } from './palettes';
import { templates } from './templates';

// --- themeBuilder ---

const themeBuilder = createThemeBuilder()
  .addPalettes(palettes)
  .addTemplates(templates)
  .addThemes({
    light: {
      template: 'base',
      palette: 'light',
      nonInheritedValues: nonInherited.light,
    },
    dark: {
      template: 'base',
      palette: 'dark',
      nonInheritedValues: nonInherited.dark,
    },
  })
  .addChildThemes({
    orange: colorThemeDefinition('orange'),
    yellow: colorThemeDefinition('yellow'),
    green: colorThemeDefinition('green'),
    blue: colorThemeDefinition('blue'),
    purple: colorThemeDefinition('purple'),
    pink: colorThemeDefinition('pink'),
    red: colorThemeDefinition('red'),
    gray: colorThemeDefinition('gray'),
    indigo: colorThemeDefinition('indigo'),
    lime: colorThemeDefinition('lime'),
    amber: colorThemeDefinition('amber'),
    accent: [
      { parent: 'light', template: 'base', palette: 'light_accent' },
      { parent: 'dark', template: 'base', palette: 'dark_accent' },
    ],
  })
  .addChildThemes({
    alt1: {
      template: 'alt1',
    },
    alt2: {
      template: 'alt2',
    },
    active: {
      template: 'surface3',
    },
  })
  .addChildThemes(componentThemeDefinitions, {
    // avoidNestingWithin: ["alt1", "alt2"],
  });

// --- themes ---

const themesIn = themeBuilder.build();

export type Theme = Record<keyof typeof templates.base, string> & typeof nonInherited.light;
export type ThemesOut = Record<keyof typeof themesIn, Theme>;
export const themes = themesIn as ThemesOut;

// --- utils ---
