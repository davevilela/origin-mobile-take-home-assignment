import {
  lightShadowColorStrong,
  lightShadowColor,
  darkShadowColorStrong,
  darkShadowColor,
  lightColors,
  darkColors,
} from './colors';

export const shadows = {
  light: {
    shadowColor: lightShadowColorStrong,
    shadowColorHover: lightShadowColorStrong,
    shadowColorPress: lightShadowColor,
    shadowColorFocus: lightShadowColor,
  },
  dark: {
    shadowColor: darkShadowColorStrong,
    shadowColorHover: darkShadowColorStrong,
    shadowColorPress: darkShadowColor,
    shadowColorFocus: darkShadowColor,
  },
};

export const nonInherited = {
  light: {
    ...lightColors,
    ...shadows.light,
  },
  dark: {
    ...darkColors,
    ...shadows.dark,
  },
};

export const overlayThemeDefinitions = [
  {
    parent: 'light',
    theme: {
      background: 'rgba(0,0,0,0.5)',
    },
  },
  {
    parent: 'dark',
    theme: {
      background: 'rgba(0,0,0,0.9)',
    },
  },
];

export const inverseSurface1 = [
  {
    parent: 'active',
    template: 'inverseActive',
  },
  {
    parent: '',
    template: 'inverseSurface1',
  },
] as any;

export const surface1 = [
  {
    parent: 'active',
    template: 'surfaceActive',
  },
  {
    parent: '',
    template: 'surface1',
  },
] as any;

export const surface2 = [
  {
    parent: 'active',
    template: 'surfaceActive',
  },
  {
    parent: '',
    template: 'surface2',
  },
] as any;

export const surface3 = [
  {
    parent: 'active',
    template: 'surfaceActive',
  },
  {
    parent: '',
    template: 'surface3',
  },
  {
    parent: 'alt1',
    template: 'surface2',
  },
] as any;

export const componentThemeDefinitions = {
  ListItem: {
    template: 'surface1',
  },
  SelectTrigger: surface1,
  Card: surface1,
  Button: surface3,
  Checkbox: surface2,
  Switch: surface2,
  SwitchThumb: inverseSurface1,
  TooltipContent: surface2,
  DrawerFrame: {
    template: 'surface1',
  },
  Progress: {
    template: 'surface1',
  },
  RadioGroupItem: surface2,
  TooltipArrow: {
    template: 'surface1',
  },
  SliderTrackActive: {
    template: 'surface3',
  },
  SliderTrack: {
    template: 'surface1',
  },
  SliderThumb: inverseSurface1,
  Tooltip: inverseSurface1,
  ProgressIndicator: inverseSurface1,
  SheetOverlay: overlayThemeDefinitions,
  DialogOverlay: overlayThemeDefinitions,
  ModalOverlay: overlayThemeDefinitions,
  Input: surface2,
  TextArea: surface2,
};
