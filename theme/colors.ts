import {
  blue,
  blueDark,
  green,
  greenDark,
  orange,
  orangeDark,
  pink,
  pinkDark,
  purple,
  purpleDark,
  red,
  redDark,
  yellow,
  yellowDark,
  indigo,
  indigoDark,
  amber,
  amberDark,
  lime,
  limeDark,
  gray,
  grayDark,
} from '@tamagui/colors';

import { postfixObjKeys } from './helpers';

export const grayPalettes = {
  gray: {
    ...gray,
    gray1: '#fff',
    gray2: '#f8f8f8',
  },
  grayDark: {
    ...grayDark,
    gray12: '#fff',
  },
};

export const accentPalettes = {
  accent: {
    accent1: 'hsla(191, 100%, 50%, 0.25)',
    accent2: 'hsla(191, 100%, 50%, 0.5)',
    accent3: 'hsla(191, 100%, 50%, 0.75)',
    accent4: 'hsla(191, 100%, 50%, 1)',
    accent5: 'hsla(191, 100%, 51%, 1)',
    accent6: 'hsla(191, 100%, 51%, 1)',
    accent7: 'hsla(191, 100%, 52%, 1)',
    accent8: 'hsla(191, 100%, 52%, 1)',
    accent9: 'hsla(191, 100%, 53%, 1)',
    accent10: 'hsla(191, 100%, 53%, 1)',
    accent11: 'hsla(191, 100%, 54%, 1)',
    accent12: '#fff',
  },
  accentDark: {
    accent1: 'hsla(191, 100%, 35%, 0.25)',
    accent2: 'hsla(191, 100%, 35%, 0.5)',
    accent3: 'hsla(191, 100%, 35%, 0.75)',
    accent4: 'hsla(191, 100%, 35%, 1)',
    accent5: 'hsla(191, 100%, 37%, 1)',
    accent6: 'hsla(191, 100%, 38%, 1)',
    accent7: 'hsla(191, 100%, 40%, 1)',
    accent8: 'hsla(191, 100%, 191%, 1)',
    accent9: 'hsla(191, 100%, 43%, 1)',
    accent10: 'hsla(191, 100%, 45%, 1)',
    accent11: 'hsla(191, 100%, 47%, 1)',
    accent12: '#fff',
  },
};

export const colorTokens = {
  light: {
    blue,
    gray: grayPalettes.gray,
    green,
    orange,
    pink,
    purple,
    red,
    yellow,
    indigo,
    amber,
    lime,
    accent: accentPalettes.accent,
  },
  dark: {
    blue: blueDark,
    gray: grayPalettes.grayDark,
    green: greenDark,
    orange: orangeDark,
    pink: pinkDark,
    purple: purpleDark,
    red: redDark,
    yellow: yellowDark,
    indigo: indigoDark,
    amber: amberDark,
    lime: limeDark,
    accent: accentPalettes.accentDark,
  },
};

export const lightShadowColor = 'rgba(0,0,0,0.04)';
export const lightShadowColorStrong = 'rgba(0,0,0,0.085)';
export const darkShadowColor = 'rgba(0,0,0,0.2)';
export const darkShadowColorStrong = 'rgba(0,0,0,0.3)';

export const darkColors = {
  ...colorTokens.dark.blue,
  ...colorTokens.dark.gray,
  ...colorTokens.dark.green,
  ...colorTokens.dark.orange,
  ...colorTokens.dark.pink,
  ...colorTokens.dark.purple,
  ...colorTokens.dark.red,
  ...colorTokens.dark.yellow,
  ...colorTokens.dark.accent,
};

export const lightColors = {
  ...colorTokens.light.blue,
  ...colorTokens.light.gray,
  ...colorTokens.light.green,
  ...colorTokens.light.orange,
  ...colorTokens.light.pink,
  ...colorTokens.light.purple,
  ...colorTokens.light.red,
  ...colorTokens.light.yellow,
  ...colorTokens.light.accent,
};

export const color = {
  // brancos transparentes

  white0: 'rgba(255,255,255,0)',
  white075: 'rgba(255,255,255,0.75)',
  white05: 'rgba(255,255,255,0.5)',
  white025: 'rgba(255,255,255,0.25)',

  // transparent colors
  black0: 'rgba(10,10,10,0)',
  black075: 'rgba(10,10,10,0.75)',
  black05: 'rgba(10,10,10,0.5)',
  black025: 'rgba(10,10,10,0.25)',

  // whites
  white1: grayPalettes.gray.gray1,
  white2: grayPalettes.gray.gray2,
  white3: grayPalettes.gray.gray3,
  white4: grayPalettes.gray.gray4,
  white5: grayPalettes.gray.gray5,
  white6: grayPalettes.gray.gray6,
  white7: grayPalettes.gray.gray7,
  white8: grayPalettes.gray.gray8,
  white9: grayPalettes.gray.gray9,
  white10: grayPalettes.gray.gray10,
  white11: grayPalettes.gray.gray11,
  white12: grayPalettes.gray.gray12,

  // blacks
  black1: grayPalettes.grayDark.gray1,
  black2: grayPalettes.grayDark.gray2,
  black3: grayPalettes.grayDark.gray3,
  black4: grayPalettes.grayDark.gray4,
  black5: grayPalettes.grayDark.gray5,
  black6: grayPalettes.grayDark.gray6,
  black7: grayPalettes.grayDark.gray7,
  black8: grayPalettes.grayDark.gray8,
  black9: grayPalettes.grayDark.gray9,
  black10: grayPalettes.grayDark.gray10,
  black11: grayPalettes.grayDark.gray11,
  black12: grayPalettes.grayDark.gray12,

  // other color tokens
  ...postfixObjKeys(lightColors, 'Light'),
  ...postfixObjKeys(darkColors, 'Dark'),
};
