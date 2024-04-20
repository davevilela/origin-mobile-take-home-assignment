import { color, colorTokens } from './colors';
import { objectFromEntries, objectKeys } from './helpers';

export const palettes = (() => {
  const transparent = (hsl: string, opacity = 0) =>
    hsl.replace(`%)`, `%, ${opacity})`).replace(`hsl(`, `hsla(`);

  const getColorPalette = (colors: object): string[] => {
    const colorPalette = Object.values(colors);
    // make the transparent color vibrant and towards the middle
    const colorI = colorPalette.length - 4;

    // add our transparent colors first/last
    // and make sure the last (foreground) color is white/black rather than colorful
    // this is mostly for consistency with the older theme-base
    return [
      transparent(colorPalette[0], 0),
      transparent(colorPalette[0], 0.25),
      transparent(colorPalette[0], 0.5),
      transparent(colorPalette[0], 0.75),
      ...colorPalette,
      transparent(colorPalette[colorI], 0.75),
      transparent(colorPalette[colorI], 0.5),
      transparent(colorPalette[colorI], 0.25),
      transparent(colorPalette[colorI], 0),
    ];
  };

  const lightPalette = [
    color.white0,
    color.white075,
    color.white05,
    color.white025,
    color.white1,
    color.white2,
    color.white3,
    color.white4,
    color.white5,
    color.white6,
    color.white7,
    color.white8,
    color.white9,
    color.white10,
    color.white11,
    color.white12,
    color.black075,
    color.black05,
    color.black025,
    color.black0,
  ];

  const darkPalette = [
    color.black0,
    color.black075,
    color.black05,
    color.black025,
    color.black1,
    color.black2,
    color.black3,
    color.black4,
    color.black5,
    color.black6,
    color.black7,
    color.black8,
    color.black9,
    color.black10,
    color.black11,
    color.black12,
    color.white075,
    color.white05,
    color.white025,
    color.white0,
  ];

  const lightPalettes = objectFromEntries(
    objectKeys(colorTokens.light).map(
      (key) => [`light_${key}`, getColorPalette(colorTokens.light[key])] as const
    )
  );

  const darkPalettes = objectFromEntries(
    objectKeys(colorTokens.dark).map(
      (key) => [`dark_${key}`, getColorPalette(colorTokens.dark[key])] as const
    )
  );

  const colorPalettes = {
    ...lightPalettes,
    ...darkPalettes,
  };

  return {
    light: lightPalette,
    dark: darkPalette,
    ...colorPalettes,
  };
})();
