type Theme = {
  background0: string;
  background025: string;
  background05: string;
  background075: string;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
  color7: string;
  color8: string;
  color9: string;
  color10: string;
  color11: string;
  color12: string;
  color0: string;
  color025: string;
  color05: string;
  color075: string;
  background: string;
  backgroundHover: string;
  backgroundPress: string;
  backgroundFocus: string;
  borderColor: string;
  borderColorHover: string;
  borderColorFocus: string;
  borderColorPress: string;
  color: string;
  colorHover: string;
  colorPress: string;
  colorFocus: string;
  colorTransparent: string;
  placeholderColor: string;
  outlineColor: string;
  blue1: string;
  blue2: string;
  blue3: string;
  blue4: string;
  blue5: string;
  blue6: string;
  blue7: string;
  blue8: string;
  blue9: string;
  blue10: string;
  blue11: string;
  blue12: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  gray8: string;
  gray9: string;
  gray10: string;
  gray11: string;
  gray12: string;
  green1: string;
  green2: string;
  green3: string;
  green4: string;
  green5: string;
  green6: string;
  green7: string;
  green8: string;
  green9: string;
  green10: string;
  green11: string;
  green12: string;
  orange1: string;
  orange2: string;
  orange3: string;
  orange4: string;
  orange5: string;
  orange6: string;
  orange7: string;
  orange8: string;
  orange9: string;
  orange10: string;
  orange11: string;
  orange12: string;
  pink1: string;
  pink2: string;
  pink3: string;
  pink4: string;
  pink5: string;
  pink6: string;
  pink7: string;
  pink8: string;
  pink9: string;
  pink10: string;
  pink11: string;
  pink12: string;
  purple1: string;
  purple2: string;
  purple3: string;
  purple4: string;
  purple5: string;
  purple6: string;
  purple7: string;
  purple8: string;
  purple9: string;
  purple10: string;
  purple11: string;
  purple12: string;
  red1: string;
  red2: string;
  red3: string;
  red4: string;
  red5: string;
  red6: string;
  red7: string;
  red8: string;
  red9: string;
  red10: string;
  red11: string;
  red12: string;
  yellow1: string;
  yellow2: string;
  yellow3: string;
  yellow4: string;
  yellow5: string;
  yellow6: string;
  yellow7: string;
  yellow8: string;
  yellow9: string;
  yellow10: string;
  yellow11: string;
  yellow12: string;
  accent1: string;
  accent2: string;
  accent3: string;
  accent4: string;
  accent5: string;
  accent6: string;
  accent7: string;
  accent8: string;
  accent9: string;
  accent10: string;
  accent11: string;
  accent12: string;
  shadowColor: string;
  shadowColorHover: string;
  shadowColorPress: string;
  shadowColorFocus: string;

}

function t(a: [number, number][]) {
  let res: Record<string,string> = {}
  for (const [ki, vi] of a) {
    res[ks[ki] as string] = vs[vi] as string
  }
  return res as Theme
}
const vs = [
  'rgba(255,255,255,0)',
  'rgba(255,255,255,0.75)',
  'rgba(255,255,255,0.5)',
  'rgba(255,255,255,0.25)',
  '#fff',
  '#f8f8f8',
  'hsl(0, 0%, 95.1%)',
  'hsl(0, 0%, 93.0%)',
  'hsl(0, 0%, 90.9%)',
  'hsl(0, 0%, 88.7%)',
  'hsl(0, 0%, 85.8%)',
  'hsl(0, 0%, 78.0%)',
  'hsl(0, 0%, 56.1%)',
  'hsl(0, 0%, 52.3%)',
  'hsl(0, 0%, 43.5%)',
  'hsl(0, 0%, 9.0%)',
  'rgba(10,10,10,0)',
  'rgba(10,10,10,0.25)',
  'rgba(10,10,10,0.5)',
  'rgba(10,10,10,0.75)',
  'hsl(206, 100%, 99.2%)',
  'hsl(210, 100%, 98.0%)',
  'hsl(209, 100%, 96.5%)',
  'hsl(210, 98.8%, 94.0%)',
  'hsl(209, 95.0%, 90.1%)',
  'hsl(209, 81.2%, 84.5%)',
  'hsl(208, 77.5%, 76.9%)',
  'hsl(206, 81.9%, 65.3%)',
  'hsl(206, 100%, 50.0%)',
  'hsl(208, 100%, 47.3%)',
  'hsl(211, 100%, 43.2%)',
  'hsl(211, 100%, 15.0%)',
  'hsl(136, 50.0%, 98.9%)',
  'hsl(138, 62.5%, 96.9%)',
  'hsl(139, 55.2%, 94.5%)',
  'hsl(140, 48.7%, 91.0%)',
  'hsl(141, 43.7%, 86.0%)',
  'hsl(143, 40.3%, 79.0%)',
  'hsl(146, 38.5%, 69.0%)',
  'hsl(151, 40.2%, 54.1%)',
  'hsl(151, 55.0%, 41.5%)',
  'hsl(152, 57.5%, 37.6%)',
  'hsl(153, 67.0%, 28.5%)',
  'hsl(155, 40.0%, 14.0%)',
  'hsl(24, 70.0%, 99.0%)',
  'hsl(24, 83.3%, 97.6%)',
  'hsl(24, 100%, 95.3%)',
  'hsl(25, 100%, 92.2%)',
  'hsl(25, 100%, 88.2%)',
  'hsl(25, 100%, 82.8%)',
  'hsl(24, 100%, 75.3%)',
  'hsl(24, 94.5%, 64.3%)',
  'hsl(24, 94.0%, 50.0%)',
  'hsl(24, 100%, 46.5%)',
  'hsl(24, 100%, 37.0%)',
  'hsl(15, 60.0%, 17.0%)',
  'hsl(322, 100%, 99.4%)',
  'hsl(323, 100%, 98.4%)',
  'hsl(323, 86.3%, 96.5%)',
  'hsl(323, 78.7%, 94.2%)',
  'hsl(323, 72.2%, 91.1%)',
  'hsl(323, 66.3%, 86.6%)',
  'hsl(323, 62.0%, 80.1%)',
  'hsl(323, 60.3%, 72.4%)',
  'hsl(322, 65.0%, 54.5%)',
  'hsl(322, 63.9%, 50.7%)',
  'hsl(322, 75.0%, 46.0%)',
  'hsl(320, 70.0%, 13.5%)',
  'hsl(280, 65.0%, 99.4%)',
  'hsl(276, 100%, 99.0%)',
  'hsl(276, 83.1%, 97.0%)',
  'hsl(275, 76.4%, 94.7%)',
  'hsl(275, 70.8%, 91.8%)',
  'hsl(274, 65.4%, 87.8%)',
  'hsl(273, 61.0%, 81.7%)',
  'hsl(272, 60.0%, 73.5%)',
  'hsl(272, 51.0%, 54.0%)',
  'hsl(272, 46.8%, 50.3%)',
  'hsl(272, 50.0%, 45.8%)',
  'hsl(272, 66.0%, 16.0%)',
  'hsl(359, 100%, 99.4%)',
  'hsl(359, 100%, 98.6%)',
  'hsl(360, 100%, 96.8%)',
  'hsl(360, 97.9%, 94.8%)',
  'hsl(360, 90.2%, 91.9%)',
  'hsl(360, 81.7%, 87.8%)',
  'hsl(359, 74.2%, 81.7%)',
  'hsl(359, 69.5%, 74.3%)',
  'hsl(358, 75.0%, 59.0%)',
  'hsl(358, 69.4%, 55.2%)',
  'hsl(358, 65.0%, 48.7%)',
  'hsl(354, 50.0%, 14.6%)',
  'hsl(60, 54.0%, 98.5%)',
  'hsl(52, 100%, 95.5%)',
  'hsl(55, 100%, 90.9%)',
  'hsl(54, 100%, 86.6%)',
  'hsl(52, 97.9%, 82.0%)',
  'hsl(50, 89.4%, 76.1%)',
  'hsl(47, 80.4%, 68.0%)',
  'hsl(48, 100%, 46.1%)',
  'hsl(53, 92.0%, 50.0%)',
  'hsl(50, 100%, 48.5%)',
  'hsl(42, 100%, 29.0%)',
  'hsl(40, 55.0%, 13.5%)',
  'hsla(191, 100%, 50%, 0.25)',
  'hsla(191, 100%, 50%, 0.5)',
  'hsla(191, 100%, 50%, 0.75)',
  'hsla(191, 100%, 50%, 1)',
  'hsla(191, 100%, 51%, 1)',
  'hsla(191, 100%, 52%, 1)',
  'hsla(191, 100%, 53%, 1)',
  'hsla(191, 100%, 54%, 1)',
  'rgba(0,0,0,0.085)',
  'rgba(0,0,0,0.04)',
  'hsl(0, 0%, 8.5%)',
  'hsl(0, 0%, 11.0%)',
  'hsl(0, 0%, 13.6%)',
  'hsl(0, 0%, 15.8%)',
  'hsl(0, 0%, 17.9%)',
  'hsl(0, 0%, 20.5%)',
  'hsl(0, 0%, 24.3%)',
  'hsl(0, 0%, 31.2%)',
  'hsl(0, 0%, 43.9%)',
  'hsl(0, 0%, 49.4%)',
  'hsl(0, 0%, 62.8%)',
  'hsl(212, 35.0%, 9.2%)',
  'hsl(216, 50.0%, 11.8%)',
  'hsl(214, 59.4%, 15.3%)',
  'hsl(214, 65.8%, 17.9%)',
  'hsl(213, 71.2%, 20.2%)',
  'hsl(212, 77.4%, 23.1%)',
  'hsl(211, 85.1%, 27.4%)',
  'hsl(211, 89.7%, 34.1%)',
  'hsl(209, 100%, 60.6%)',
  'hsl(210, 100%, 66.1%)',
  'hsl(206, 98.0%, 95.8%)',
  'hsl(146, 30.0%, 7.4%)',
  'hsl(155, 44.2%, 8.4%)',
  'hsl(155, 46.7%, 10.9%)',
  'hsl(154, 48.4%, 12.9%)',
  'hsl(154, 49.7%, 14.9%)',
  'hsl(154, 50.9%, 17.6%)',
  'hsl(153, 51.8%, 21.8%)',
  'hsl(151, 51.7%, 28.4%)',
  'hsl(151, 49.3%, 46.5%)',
  'hsl(151, 50.0%, 53.2%)',
  'hsl(137, 72.0%, 94.0%)',
  'hsl(30, 70.0%, 7.2%)',
  'hsl(28, 100%, 8.4%)',
  'hsl(26, 91.1%, 11.6%)',
  'hsl(25, 88.3%, 14.1%)',
  'hsl(24, 87.6%, 16.6%)',
  'hsl(24, 88.6%, 19.8%)',
  'hsl(24, 92.4%, 24.0%)',
  'hsl(25, 100%, 29.0%)',
  'hsl(24, 100%, 58.5%)',
  'hsl(24, 100%, 62.2%)',
  'hsl(24, 97.0%, 93.2%)',
  'hsl(318, 25.0%, 9.6%)',
  'hsl(319, 32.2%, 11.6%)',
  'hsl(319, 41.0%, 16.0%)',
  'hsl(320, 45.4%, 18.7%)',
  'hsl(320, 49.0%, 21.1%)',
  'hsl(321, 53.6%, 24.4%)',
  'hsl(321, 61.1%, 29.7%)',
  'hsl(322, 74.9%, 37.5%)',
  'hsl(323, 72.8%, 59.2%)',
  'hsl(325, 90.0%, 66.4%)',
  'hsl(322, 90.0%, 95.8%)',
  'hsl(284, 20.0%, 9.6%)',
  'hsl(283, 30.0%, 11.8%)',
  'hsl(281, 37.5%, 16.5%)',
  'hsl(280, 41.2%, 20.0%)',
  'hsl(279, 43.8%, 23.3%)',
  'hsl(277, 46.4%, 27.5%)',
  'hsl(275, 49.3%, 34.6%)',
  'hsl(272, 52.1%, 45.9%)',
  'hsl(273, 57.3%, 59.1%)',
  'hsl(275, 80.0%, 71.0%)',
  'hsl(279, 75.0%, 95.7%)',
  'hsl(353, 23.0%, 9.8%)',
  'hsl(357, 34.4%, 12.0%)',
  'hsl(356, 43.4%, 16.4%)',
  'hsl(356, 47.6%, 19.2%)',
  'hsl(356, 51.1%, 21.9%)',
  'hsl(356, 55.2%, 25.9%)',
  'hsl(357, 60.2%, 31.8%)',
  'hsl(358, 65.0%, 40.4%)',
  'hsl(358, 85.3%, 64.0%)',
  'hsl(358, 100%, 69.5%)',
  'hsl(351, 89.0%, 96.0%)',
  'hsl(45, 100%, 5.5%)',
  'hsl(46, 100%, 6.7%)',
  'hsl(45, 100%, 8.7%)',
  'hsl(45, 100%, 10.4%)',
  'hsl(47, 100%, 12.1%)',
  'hsl(49, 100%, 14.3%)',
  'hsl(49, 90.3%, 18.4%)',
  'hsl(50, 100%, 22.0%)',
  'hsl(54, 100%, 68.0%)',
  'hsl(48, 100%, 47.0%)',
  'hsl(53, 100%, 91.0%)',
  'hsla(191, 100%, 35%, 0.25)',
  'hsla(191, 100%, 35%, 0.5)',
  'hsla(191, 100%, 35%, 0.75)',
  'hsla(191, 100%, 35%, 1)',
  'hsla(191, 100%, 37%, 1)',
  'hsla(191, 100%, 38%, 1)',
  'hsla(191, 100%, 40%, 1)',
  'hsla(191, 100%, 191%, 1)',
  'hsla(191, 100%, 43%, 1)',
  'hsla(191, 100%, 45%, 1)',
  'hsla(191, 100%, 47%, 1)',
  'rgba(0,0,0,0.3)',
  'rgba(0,0,0,0.2)',
  'hsla(24, 70.0%, 99.0%, 0)',
  'hsla(24, 70.0%, 99.0%, 0.25)',
  'hsla(24, 70.0%, 99.0%, 0.5)',
  'hsla(24, 70.0%, 99.0%, 0.75)',
  'hsla(24, 94.0%, 50.0%, 0)',
  'hsla(24, 94.0%, 50.0%, 0.25)',
  'hsla(24, 94.0%, 50.0%, 0.5)',
  'hsla(24, 94.0%, 50.0%, 0.75)',
  'hsla(60, 54.0%, 98.5%, 0)',
  'hsla(60, 54.0%, 98.5%, 0.25)',
  'hsla(60, 54.0%, 98.5%, 0.5)',
  'hsla(60, 54.0%, 98.5%, 0.75)',
  'hsla(53, 92.0%, 50.0%, 0)',
  'hsla(53, 92.0%, 50.0%, 0.25)',
  'hsla(53, 92.0%, 50.0%, 0.5)',
  'hsla(53, 92.0%, 50.0%, 0.75)',
  'hsla(136, 50.0%, 98.9%, 0)',
  'hsla(136, 50.0%, 98.9%, 0.25)',
  'hsla(136, 50.0%, 98.9%, 0.5)',
  'hsla(136, 50.0%, 98.9%, 0.75)',
  'hsla(151, 55.0%, 41.5%, 0)',
  'hsla(151, 55.0%, 41.5%, 0.25)',
  'hsla(151, 55.0%, 41.5%, 0.5)',
  'hsla(151, 55.0%, 41.5%, 0.75)',
  'hsla(206, 100%, 99.2%, 0)',
  'hsla(206, 100%, 99.2%, 0.25)',
  'hsla(206, 100%, 99.2%, 0.5)',
  'hsla(206, 100%, 99.2%, 0.75)',
  'hsla(206, 100%, 50.0%, 0)',
  'hsla(206, 100%, 50.0%, 0.25)',
  'hsla(206, 100%, 50.0%, 0.5)',
  'hsla(206, 100%, 50.0%, 0.75)',
  'hsla(280, 65.0%, 99.4%, 0)',
  'hsla(280, 65.0%, 99.4%, 0.25)',
  'hsla(280, 65.0%, 99.4%, 0.5)',
  'hsla(280, 65.0%, 99.4%, 0.75)',
  'hsla(272, 51.0%, 54.0%, 0)',
  'hsla(272, 51.0%, 54.0%, 0.25)',
  'hsla(272, 51.0%, 54.0%, 0.5)',
  'hsla(272, 51.0%, 54.0%, 0.75)',
  'hsla(322, 100%, 99.4%, 0)',
  'hsla(322, 100%, 99.4%, 0.25)',
  'hsla(322, 100%, 99.4%, 0.5)',
  'hsla(322, 100%, 99.4%, 0.75)',
  'hsla(322, 65.0%, 54.5%, 0)',
  'hsla(322, 65.0%, 54.5%, 0.25)',
  'hsla(322, 65.0%, 54.5%, 0.5)',
  'hsla(322, 65.0%, 54.5%, 0.75)',
  'hsla(359, 100%, 99.4%, 0)',
  'hsla(359, 100%, 99.4%, 0.25)',
  'hsla(359, 100%, 99.4%, 0.5)',
  'hsla(359, 100%, 99.4%, 0.75)',
  'hsla(358, 75.0%, 59.0%, 0)',
  'hsla(358, 75.0%, 59.0%, 0.25)',
  'hsla(358, 75.0%, 59.0%, 0.5)',
  'hsla(358, 75.0%, 59.0%, 0.75)',
  'hsla(0, 0%, 56.1%, 0)',
  'hsla(0, 0%, 56.1%, 0.25)',
  'hsla(0, 0%, 56.1%, 0.5)',
  'hsla(0, 0%, 56.1%, 0.75)',
  'hsla(225, 60.0%, 99.4%, 0)',
  'hsla(225, 60.0%, 99.4%, 0.25)',
  'hsla(225, 60.0%, 99.4%, 0.5)',
  'hsla(225, 60.0%, 99.4%, 0.75)',
  'hsl(225, 60.0%, 99.4%)',
  'hsl(223, 100%, 98.6%)',
  'hsl(223, 98.4%, 97.1%)',
  'hsl(223, 92.9%, 95.0%)',
  'hsl(224, 87.1%, 92.0%)',
  'hsl(224, 81.9%, 87.8%)',
  'hsl(225, 77.4%, 82.1%)',
  'hsl(226, 75.4%, 74.5%)',
  'hsl(226, 70.0%, 55.5%)',
  'hsl(226, 58.6%, 51.3%)',
  'hsl(226, 55.0%, 45.0%)',
  'hsl(226, 62.0%, 17.0%)',
  'hsla(226, 70.0%, 55.5%, 0)',
  'hsla(226, 70.0%, 55.5%, 0.25)',
  'hsla(226, 70.0%, 55.5%, 0.5)',
  'hsla(226, 70.0%, 55.5%, 0.75)',
  'hsla(85, 50.0%, 98.7%, 0)',
  'hsla(85, 50.0%, 98.7%, 0.25)',
  'hsla(85, 50.0%, 98.7%, 0.5)',
  'hsla(85, 50.0%, 98.7%, 0.75)',
  'hsl(85, 50.0%, 98.7%)',
  'hsl(85, 66.7%, 96.5%)',
  'hsl(85, 76.0%, 92.3%)',
  'hsl(84, 75.3%, 87.5%)',
  'hsl(84, 71.5%, 81.9%)',
  'hsl(82, 65.0%, 74.6%)',
  'hsl(79, 53.2%, 61.8%)',
  'hsl(76, 61.7%, 45.1%)',
  'hsl(81, 67.0%, 50.0%)',
  'hsl(80, 68.3%, 46.9%)',
  'hsl(75, 80.0%, 26.0%)',
  'hsl(78, 70.0%, 11.5%)',
  'hsla(81, 67.0%, 50.0%, 0)',
  'hsla(81, 67.0%, 50.0%, 0.25)',
  'hsla(81, 67.0%, 50.0%, 0.5)',
  'hsla(81, 67.0%, 50.0%, 0.75)',
  'hsla(39, 70.0%, 99.0%, 0)',
  'hsla(39, 70.0%, 99.0%, 0.25)',
  'hsla(39, 70.0%, 99.0%, 0.5)',
  'hsla(39, 70.0%, 99.0%, 0.75)',
  'hsl(39, 70.0%, 99.0%)',
  'hsl(40, 100%, 96.5%)',
  'hsl(44, 100%, 91.7%)',
  'hsl(43, 100%, 86.8%)',
  'hsl(42, 100%, 81.8%)',
  'hsl(38, 99.7%, 76.3%)',
  'hsl(36, 86.1%, 67.1%)',
  'hsl(35, 85.2%, 55.1%)',
  'hsl(39, 100%, 57.0%)',
  'hsl(35, 100%, 55.5%)',
  'hsl(30, 100%, 34.0%)',
  'hsl(20, 80.0%, 17.0%)',
  'hsla(39, 100%, 57.0%, 0)',
  'hsla(39, 100%, 57.0%, 0.25)',
  'hsla(39, 100%, 57.0%, 0.5)',
  'hsla(39, 100%, 57.0%, 0.75)',
  'hsla(30, 70.0%, 7.2%, 0)',
  'hsla(30, 70.0%, 7.2%, 0.25)',
  'hsla(30, 70.0%, 7.2%, 0.5)',
  'hsla(30, 70.0%, 7.2%, 0.75)',
  'hsla(45, 100%, 5.5%, 0)',
  'hsla(45, 100%, 5.5%, 0.25)',
  'hsla(45, 100%, 5.5%, 0.5)',
  'hsla(45, 100%, 5.5%, 0.75)',
  'hsla(146, 30.0%, 7.4%, 0)',
  'hsla(146, 30.0%, 7.4%, 0.25)',
  'hsla(146, 30.0%, 7.4%, 0.5)',
  'hsla(146, 30.0%, 7.4%, 0.75)',
  'hsla(212, 35.0%, 9.2%, 0)',
  'hsla(212, 35.0%, 9.2%, 0.25)',
  'hsla(212, 35.0%, 9.2%, 0.5)',
  'hsla(212, 35.0%, 9.2%, 0.75)',
  'hsla(284, 20.0%, 9.6%, 0)',
  'hsla(284, 20.0%, 9.6%, 0.25)',
  'hsla(284, 20.0%, 9.6%, 0.5)',
  'hsla(284, 20.0%, 9.6%, 0.75)',
  'hsla(318, 25.0%, 9.6%, 0)',
  'hsla(318, 25.0%, 9.6%, 0.25)',
  'hsla(318, 25.0%, 9.6%, 0.5)',
  'hsla(318, 25.0%, 9.6%, 0.75)',
  'hsla(353, 23.0%, 9.8%, 0)',
  'hsla(353, 23.0%, 9.8%, 0.25)',
  'hsla(353, 23.0%, 9.8%, 0.5)',
  'hsla(353, 23.0%, 9.8%, 0.75)',
  'hsla(0, 0%, 8.5%, 0)',
  'hsla(0, 0%, 8.5%, 0.25)',
  'hsla(0, 0%, 8.5%, 0.5)',
  'hsla(0, 0%, 8.5%, 0.75)',
  'hsla(0, 0%, 43.9%, 0)',
  'hsla(0, 0%, 43.9%, 0.25)',
  'hsla(0, 0%, 43.9%, 0.5)',
  'hsla(0, 0%, 43.9%, 0.75)',
  'hsla(229, 24.0%, 10.0%, 0)',
  'hsla(229, 24.0%, 10.0%, 0.25)',
  'hsla(229, 24.0%, 10.0%, 0.5)',
  'hsla(229, 24.0%, 10.0%, 0.75)',
  'hsl(229, 24.0%, 10.0%)',
  'hsl(230, 36.4%, 12.9%)',
  'hsl(228, 43.3%, 17.5%)',
  'hsl(227, 47.2%, 21.0%)',
  'hsl(227, 50.0%, 24.1%)',
  'hsl(226, 52.9%, 28.2%)',
  'hsl(226, 56.0%, 34.5%)',
  'hsl(226, 58.2%, 44.1%)',
  'hsl(227, 75.2%, 61.6%)',
  'hsl(228, 100%, 75.9%)',
  'hsl(226, 83.0%, 96.3%)',
  'hsla(75, 55.0%, 6.0%, 0)',
  'hsla(75, 55.0%, 6.0%, 0.25)',
  'hsla(75, 55.0%, 6.0%, 0.5)',
  'hsla(75, 55.0%, 6.0%, 0.75)',
  'hsl(75, 55.0%, 6.0%)',
  'hsl(74, 56.8%, 7.3%)',
  'hsl(78, 50.2%, 9.9%)',
  'hsl(79, 50.3%, 12.1%)',
  'hsl(79, 52.6%, 14.2%)',
  'hsl(78, 55.7%, 16.7%)',
  'hsl(77, 59.7%, 20.1%)',
  'hsl(75, 64.8%, 24.5%)',
  'hsl(75, 85.0%, 60.0%)',
  'hsl(81, 70.0%, 43.8%)',
  'hsl(84, 79.0%, 92.6%)',
  'hsla(36, 100%, 6.1%, 0)',
  'hsla(36, 100%, 6.1%, 0.25)',
  'hsla(36, 100%, 6.1%, 0.5)',
  'hsla(36, 100%, 6.1%, 0.75)',
  'hsl(36, 100%, 6.1%)',
  'hsl(35, 100%, 7.6%)',
  'hsl(32, 100%, 10.2%)',
  'hsl(32, 100%, 12.4%)',
  'hsl(33, 100%, 14.6%)',
  'hsl(35, 100%, 17.1%)',
  'hsl(35, 91.0%, 21.6%)',
  'hsl(36, 100%, 25.5%)',
  'hsl(43, 100%, 64.0%)',
  'hsl(39, 90.0%, 49.8%)',
  'hsl(39, 97.0%, 93.2%)',
  'rgba(0,0,0,0.5)',
  'rgba(0,0,0,0.9)',
]

const ks = [
'background0',
'background025',
'background05',
'background075',
'color1',
'color2',
'color3',
'color4',
'color5',
'color6',
'color7',
'color8',
'color9',
'color10',
'color11',
'color12',
'color0',
'color025',
'color05',
'color075',
'background',
'backgroundHover',
'backgroundPress',
'backgroundFocus',
'borderColor',
'borderColorHover',
'borderColorFocus',
'borderColorPress',
'color',
'colorHover',
'colorPress',
'colorFocus',
'colorTransparent',
'placeholderColor',
'outlineColor',
'blue1',
'blue2',
'blue3',
'blue4',
'blue5',
'blue6',
'blue7',
'blue8',
'blue9',
'blue10',
'blue11',
'blue12',
'gray1',
'gray2',
'gray3',
'gray4',
'gray5',
'gray6',
'gray7',
'gray8',
'gray9',
'gray10',
'gray11',
'gray12',
'green1',
'green2',
'green3',
'green4',
'green5',
'green6',
'green7',
'green8',
'green9',
'green10',
'green11',
'green12',
'orange1',
'orange2',
'orange3',
'orange4',
'orange5',
'orange6',
'orange7',
'orange8',
'orange9',
'orange10',
'orange11',
'orange12',
'pink1',
'pink2',
'pink3',
'pink4',
'pink5',
'pink6',
'pink7',
'pink8',
'pink9',
'pink10',
'pink11',
'pink12',
'purple1',
'purple2',
'purple3',
'purple4',
'purple5',
'purple6',
'purple7',
'purple8',
'purple9',
'purple10',
'purple11',
'purple12',
'red1',
'red2',
'red3',
'red4',
'red5',
'red6',
'red7',
'red8',
'red9',
'red10',
'red11',
'red12',
'yellow1',
'yellow2',
'yellow3',
'yellow4',
'yellow5',
'yellow6',
'yellow7',
'yellow8',
'yellow9',
'yellow10',
'yellow11',
'yellow12',
'accent1',
'accent2',
'accent3',
'accent4',
'accent5',
'accent6',
'accent7',
'accent8',
'accent9',
'accent10',
'accent11',
'accent12',
'shadowColor',
'shadowColorHover',
'shadowColorPress',
'shadowColorFocus']


const n1 = t([[0, 0],[1, 1],[2, 2],[3, 3],[4, 4],[5, 5],[6, 6],[7, 7],[8, 8],[9, 9],[10, 10],[11, 11],[12, 12],[13, 13],[14, 14],[15, 15],[16, 16],[17, 17],[18, 18],[19, 19],[20, 4],[21, 5],[22, 6],[23, 4],[24, 7],[25, 8],[26, 5],[27, 7],[28, 15],[29, 14],[30, 15],[31, 14],[32, 16],[33, 12],[34, 17],[35, 20],[36, 21],[37, 22],[38, 23],[39, 24],[40, 25],[41, 26],[42, 27],[43, 28],[44, 29],[45, 30],[46, 31],[47, 4],[48, 5],[49, 6],[50, 7],[51, 8],[52, 9],[53, 10],[54, 11],[55, 12],[56, 13],[57, 14],[58, 15],[59, 32],[60, 33],[61, 34],[62, 35],[63, 36],[64, 37],[65, 38],[66, 39],[67, 40],[68, 41],[69, 42],[70, 43],[71, 44],[72, 45],[73, 46],[74, 47],[75, 48],[76, 49],[77, 50],[78, 51],[79, 52],[80, 53],[81, 54],[82, 55],[83, 56],[84, 57],[85, 58],[86, 59],[87, 60],[88, 61],[89, 62],[90, 63],[91, 64],[92, 65],[93, 66],[94, 67],[95, 68],[96, 69],[97, 70],[98, 71],[99, 72],[100, 73],[101, 74],[102, 75],[103, 76],[104, 77],[105, 78],[106, 79],[107, 80],[108, 81],[109, 82],[110, 83],[111, 84],[112, 85],[113, 86],[114, 87],[115, 88],[116, 89],[117, 90],[118, 91],[119, 92],[120, 93],[121, 94],[122, 95],[123, 96],[124, 97],[125, 98],[126, 99],[127, 100],[128, 101],[129, 102],[130, 103],[131, 104],[132, 105],[133, 106],[134, 107],[135, 108],[136, 108],[137, 109],[138, 109],[139, 110],[140, 110],[141, 111],[142, 4],[143, 112],[144, 112],[145, 113],[146, 113]])

export const light = n1
const n2 = t([[0, 16],[1, 19],[2, 18],[3, 17],[4, 114],[5, 115],[6, 116],[7, 117],[8, 118],[9, 119],[10, 120],[11, 121],[12, 122],[13, 123],[14, 124],[15, 4],[16, 0],[17, 3],[18, 2],[19, 1],[20, 114],[21, 115],[22, 116],[23, 114],[24, 117],[25, 118],[26, 115],[27, 117],[28, 4],[29, 124],[30, 4],[31, 124],[32, 0],[33, 122],[34, 3],[35, 125],[36, 126],[37, 127],[38, 128],[39, 129],[40, 130],[41, 131],[42, 132],[43, 28],[44, 133],[45, 134],[46, 135],[47, 114],[48, 115],[49, 116],[50, 117],[51, 118],[52, 119],[53, 120],[54, 121],[55, 122],[56, 123],[57, 124],[58, 4],[59, 136],[60, 137],[61, 138],[62, 139],[63, 140],[64, 141],[65, 142],[66, 143],[67, 40],[68, 144],[69, 145],[70, 146],[71, 147],[72, 148],[73, 149],[74, 150],[75, 151],[76, 152],[77, 153],[78, 154],[79, 52],[80, 155],[81, 156],[82, 157],[83, 158],[84, 159],[85, 160],[86, 161],[87, 162],[88, 163],[89, 164],[90, 165],[91, 64],[92, 166],[93, 167],[94, 168],[95, 169],[96, 170],[97, 171],[98, 172],[99, 173],[100, 174],[101, 175],[102, 176],[103, 76],[104, 177],[105, 178],[106, 179],[107, 180],[108, 181],[109, 182],[110, 183],[111, 184],[112, 185],[113, 186],[114, 187],[115, 88],[116, 188],[117, 189],[118, 190],[119, 191],[120, 192],[121, 193],[122, 194],[123, 195],[124, 196],[125, 197],[126, 198],[127, 100],[128, 199],[129, 200],[130, 201],[131, 202],[132, 203],[133, 204],[134, 205],[135, 206],[136, 207],[137, 208],[138, 209],[139, 210],[140, 211],[141, 212],[142, 4],[143, 213],[144, 213],[145, 214],[146, 214]])

export const dark = n2
const n3 = t([[0, 215],[1, 216],[2, 217],[3, 218],[4, 44],[5, 45],[6, 46],[7, 47],[8, 48],[9, 49],[10, 50],[11, 51],[12, 52],[13, 53],[14, 54],[15, 55],[16, 219],[17, 220],[18, 221],[19, 222],[20, 44],[21, 45],[22, 46],[23, 44],[24, 47],[25, 48],[26, 45],[27, 47],[28, 55],[29, 54],[30, 55],[31, 54],[32, 219],[33, 52],[34, 220]])

export const light_orange = n3
const n4 = t([[0, 223],[1, 224],[2, 225],[3, 226],[4, 92],[5, 93],[6, 94],[7, 95],[8, 96],[9, 97],[10, 98],[11, 99],[12, 100],[13, 101],[14, 102],[15, 103],[16, 227],[17, 228],[18, 229],[19, 230],[20, 92],[21, 93],[22, 94],[23, 92],[24, 95],[25, 96],[26, 93],[27, 95],[28, 103],[29, 102],[30, 103],[31, 102],[32, 227],[33, 100],[34, 228]])

export const light_yellow = n4
const n5 = t([[0, 231],[1, 232],[2, 233],[3, 234],[4, 32],[5, 33],[6, 34],[7, 35],[8, 36],[9, 37],[10, 38],[11, 39],[12, 40],[13, 41],[14, 42],[15, 43],[16, 235],[17, 236],[18, 237],[19, 238],[20, 32],[21, 33],[22, 34],[23, 32],[24, 35],[25, 36],[26, 33],[27, 35],[28, 43],[29, 42],[30, 43],[31, 42],[32, 235],[33, 40],[34, 236]])

export const light_green = n5
const n6 = t([[0, 239],[1, 240],[2, 241],[3, 242],[4, 20],[5, 21],[6, 22],[7, 23],[8, 24],[9, 25],[10, 26],[11, 27],[12, 28],[13, 29],[14, 30],[15, 31],[16, 243],[17, 244],[18, 245],[19, 246],[20, 20],[21, 21],[22, 22],[23, 20],[24, 23],[25, 24],[26, 21],[27, 23],[28, 31],[29, 30],[30, 31],[31, 30],[32, 243],[33, 28],[34, 244]])

export const light_blue = n6
const n7 = t([[0, 247],[1, 248],[2, 249],[3, 250],[4, 68],[5, 69],[6, 70],[7, 71],[8, 72],[9, 73],[10, 74],[11, 75],[12, 76],[13, 77],[14, 78],[15, 79],[16, 251],[17, 252],[18, 253],[19, 254],[20, 68],[21, 69],[22, 70],[23, 68],[24, 71],[25, 72],[26, 69],[27, 71],[28, 79],[29, 78],[30, 79],[31, 78],[32, 251],[33, 76],[34, 252]])

export const light_purple = n7
const n8 = t([[0, 255],[1, 256],[2, 257],[3, 258],[4, 56],[5, 57],[6, 58],[7, 59],[8, 60],[9, 61],[10, 62],[11, 63],[12, 64],[13, 65],[14, 66],[15, 67],[16, 259],[17, 260],[18, 261],[19, 262],[20, 56],[21, 57],[22, 58],[23, 56],[24, 59],[25, 60],[26, 57],[27, 59],[28, 67],[29, 66],[30, 67],[31, 66],[32, 259],[33, 64],[34, 260]])

export const light_pink = n8
const n9 = t([[0, 263],[1, 264],[2, 265],[3, 266],[4, 80],[5, 81],[6, 82],[7, 83],[8, 84],[9, 85],[10, 86],[11, 87],[12, 88],[13, 89],[14, 90],[15, 91],[16, 267],[17, 268],[18, 269],[19, 270],[20, 80],[21, 81],[22, 82],[23, 80],[24, 83],[25, 84],[26, 81],[27, 83],[28, 91],[29, 90],[30, 91],[31, 90],[32, 267],[33, 88],[34, 268]])

export const light_red = n9
const n10 = t([[0, 4],[1, 4],[2, 4],[3, 4],[4, 4],[5, 5],[6, 6],[7, 7],[8, 8],[9, 9],[10, 10],[11, 11],[12, 12],[13, 13],[14, 14],[15, 15],[16, 271],[17, 272],[18, 273],[19, 274],[20, 4],[21, 5],[22, 6],[23, 4],[24, 7],[25, 8],[26, 5],[27, 7],[28, 15],[29, 14],[30, 15],[31, 14],[32, 271],[33, 12],[34, 272]])

export const light_gray = n10
const n11 = t([[0, 275],[1, 276],[2, 277],[3, 278],[4, 279],[5, 280],[6, 281],[7, 282],[8, 283],[9, 284],[10, 285],[11, 286],[12, 287],[13, 288],[14, 289],[15, 290],[16, 291],[17, 292],[18, 293],[19, 294],[20, 279],[21, 280],[22, 281],[23, 279],[24, 282],[25, 283],[26, 280],[27, 282],[28, 290],[29, 289],[30, 290],[31, 289],[32, 291],[33, 287],[34, 292]])

export const light_indigo = n11
const n12 = t([[0, 295],[1, 296],[2, 297],[3, 298],[4, 299],[5, 300],[6, 301],[7, 302],[8, 303],[9, 304],[10, 305],[11, 306],[12, 307],[13, 308],[14, 309],[15, 310],[16, 311],[17, 312],[18, 313],[19, 314],[20, 299],[21, 300],[22, 301],[23, 299],[24, 302],[25, 303],[26, 300],[27, 302],[28, 310],[29, 309],[30, 310],[31, 309],[32, 311],[33, 307],[34, 312]])

export const light_lime = n12
const n13 = t([[0, 315],[1, 316],[2, 317],[3, 318],[4, 319],[5, 320],[6, 321],[7, 322],[8, 323],[9, 324],[10, 325],[11, 326],[12, 327],[13, 328],[14, 329],[15, 330],[16, 331],[17, 332],[18, 333],[19, 334],[20, 319],[21, 320],[22, 321],[23, 319],[24, 322],[25, 323],[26, 320],[27, 322],[28, 330],[29, 329],[30, 330],[31, 329],[32, 331],[33, 327],[34, 332]])

export const light_amber = n13
const n14 = t([[0, 104],[1, 104],[2, 104],[3, 104],[4, 104],[5, 105],[6, 106],[7, 107],[8, 108],[9, 108],[10, 109],[11, 109],[12, 110],[13, 110],[14, 111],[15, 4],[16, 110],[17, 110],[18, 110],[19, 110],[20, 104],[21, 105],[22, 106],[23, 104],[24, 107],[25, 108],[26, 105],[27, 107],[28, 4],[29, 111],[30, 4],[31, 111],[32, 110],[33, 110],[34, 110]])

export const light_accent = n14
const n15 = t([[0, 335],[1, 336],[2, 337],[3, 338],[4, 147],[5, 148],[6, 149],[7, 150],[8, 151],[9, 152],[10, 153],[11, 154],[12, 52],[13, 155],[14, 156],[15, 157],[16, 219],[17, 220],[18, 221],[19, 222],[20, 147],[21, 148],[22, 149],[23, 147],[24, 150],[25, 151],[26, 148],[27, 150],[28, 157],[29, 156],[30, 157],[31, 156],[32, 219],[33, 52],[34, 220]])

export const dark_orange = n15
const n16 = t([[0, 339],[1, 340],[2, 341],[3, 342],[4, 191],[5, 192],[6, 193],[7, 194],[8, 195],[9, 196],[10, 197],[11, 198],[12, 100],[13, 199],[14, 200],[15, 201],[16, 227],[17, 228],[18, 229],[19, 230],[20, 191],[21, 192],[22, 193],[23, 191],[24, 194],[25, 195],[26, 192],[27, 194],[28, 201],[29, 200],[30, 201],[31, 200],[32, 227],[33, 100],[34, 228]])

export const dark_yellow = n16
const n17 = t([[0, 343],[1, 344],[2, 345],[3, 346],[4, 136],[5, 137],[6, 138],[7, 139],[8, 140],[9, 141],[10, 142],[11, 143],[12, 40],[13, 144],[14, 145],[15, 146],[16, 235],[17, 236],[18, 237],[19, 238],[20, 136],[21, 137],[22, 138],[23, 136],[24, 139],[25, 140],[26, 137],[27, 139],[28, 146],[29, 145],[30, 146],[31, 145],[32, 235],[33, 40],[34, 236]])

export const dark_green = n17
const n18 = t([[0, 347],[1, 348],[2, 349],[3, 350],[4, 125],[5, 126],[6, 127],[7, 128],[8, 129],[9, 130],[10, 131],[11, 132],[12, 28],[13, 133],[14, 134],[15, 135],[16, 243],[17, 244],[18, 245],[19, 246],[20, 125],[21, 126],[22, 127],[23, 125],[24, 128],[25, 129],[26, 126],[27, 128],[28, 135],[29, 134],[30, 135],[31, 134],[32, 243],[33, 28],[34, 244]])

export const dark_blue = n18
const n19 = t([[0, 351],[1, 352],[2, 353],[3, 354],[4, 169],[5, 170],[6, 171],[7, 172],[8, 173],[9, 174],[10, 175],[11, 176],[12, 76],[13, 177],[14, 178],[15, 179],[16, 251],[17, 252],[18, 253],[19, 254],[20, 169],[21, 170],[22, 171],[23, 169],[24, 172],[25, 173],[26, 170],[27, 172],[28, 179],[29, 178],[30, 179],[31, 178],[32, 251],[33, 76],[34, 252]])

export const dark_purple = n19
const n20 = t([[0, 355],[1, 356],[2, 357],[3, 358],[4, 158],[5, 159],[6, 160],[7, 161],[8, 162],[9, 163],[10, 164],[11, 165],[12, 64],[13, 166],[14, 167],[15, 168],[16, 259],[17, 260],[18, 261],[19, 262],[20, 158],[21, 159],[22, 160],[23, 158],[24, 161],[25, 162],[26, 159],[27, 161],[28, 168],[29, 167],[30, 168],[31, 167],[32, 259],[33, 64],[34, 260]])

export const dark_pink = n20
const n21 = t([[0, 359],[1, 360],[2, 361],[3, 362],[4, 180],[5, 181],[6, 182],[7, 183],[8, 184],[9, 185],[10, 186],[11, 187],[12, 88],[13, 188],[14, 189],[15, 190],[16, 267],[17, 268],[18, 269],[19, 270],[20, 180],[21, 181],[22, 182],[23, 180],[24, 183],[25, 184],[26, 181],[27, 183],[28, 190],[29, 189],[30, 190],[31, 189],[32, 267],[33, 88],[34, 268]])

export const dark_red = n21
const n22 = t([[0, 363],[1, 364],[2, 365],[3, 366],[4, 114],[5, 115],[6, 116],[7, 117],[8, 118],[9, 119],[10, 120],[11, 121],[12, 122],[13, 123],[14, 124],[15, 4],[16, 367],[17, 368],[18, 369],[19, 370],[20, 114],[21, 115],[22, 116],[23, 114],[24, 117],[25, 118],[26, 115],[27, 117],[28, 4],[29, 124],[30, 4],[31, 124],[32, 367],[33, 122],[34, 368]])

export const dark_gray = n22
const n23 = t([[0, 371],[1, 372],[2, 373],[3, 374],[4, 375],[5, 376],[6, 377],[7, 378],[8, 379],[9, 380],[10, 381],[11, 382],[12, 287],[13, 383],[14, 384],[15, 385],[16, 291],[17, 292],[18, 293],[19, 294],[20, 375],[21, 376],[22, 377],[23, 375],[24, 378],[25, 379],[26, 376],[27, 378],[28, 385],[29, 384],[30, 385],[31, 384],[32, 291],[33, 287],[34, 292]])

export const dark_indigo = n23
const n24 = t([[0, 386],[1, 387],[2, 388],[3, 389],[4, 390],[5, 391],[6, 392],[7, 393],[8, 394],[9, 395],[10, 396],[11, 397],[12, 307],[13, 398],[14, 399],[15, 400],[16, 311],[17, 312],[18, 313],[19, 314],[20, 390],[21, 391],[22, 392],[23, 390],[24, 393],[25, 394],[26, 391],[27, 393],[28, 400],[29, 399],[30, 400],[31, 399],[32, 311],[33, 307],[34, 312]])

export const dark_lime = n24
const n25 = t([[0, 401],[1, 402],[2, 403],[3, 404],[4, 405],[5, 406],[6, 407],[7, 408],[8, 409],[9, 410],[10, 411],[11, 412],[12, 327],[13, 413],[14, 414],[15, 415],[16, 331],[17, 332],[18, 333],[19, 334],[20, 405],[21, 406],[22, 407],[23, 405],[24, 408],[25, 409],[26, 406],[27, 408],[28, 415],[29, 414],[30, 415],[31, 414],[32, 331],[33, 327],[34, 332]])

export const dark_amber = n25
const n26 = t([[0, 202],[1, 202],[2, 202],[3, 202],[4, 202],[5, 203],[6, 204],[7, 205],[8, 206],[9, 207],[10, 208],[11, 209],[12, 210],[13, 211],[14, 212],[15, 4],[16, 210],[17, 210],[18, 210],[19, 210],[20, 202],[21, 203],[22, 204],[23, 202],[24, 205],[25, 206],[26, 203],[27, 205],[28, 4],[29, 212],[30, 4],[31, 212],[32, 210],[33, 210],[34, 210]])

export const dark_accent = n26
const n27 = t([[28, 14],[29, 13],[30, 14],[31, 13]])

export const light_alt1 = n27
export const light_gray_alt1 = n27
const n28 = t([[28, 13],[29, 12],[30, 13],[31, 12]])

export const light_alt2 = n28
export const light_gray_alt2 = n28
const n29 = t([[20, 7],[21, 8],[22, 9],[23, 7],[24, 10],[25, 11],[26, 8],[27, 10]])

export const light_active = n29
export const light_gray_active = n29
export const light_Button = n29
export const light_SliderTrackActive = n29
export const light_gray_Button = n29
export const light_gray_SliderTrackActive = n29
export const light_alt1_Button = n29
export const light_alt1_SliderTrackActive = n29
export const light_alt2_Button = n29
export const light_alt2_SliderTrackActive = n29
export const light_active_SliderTrackActive = n29
export const light_gray_alt1_Button = n29
export const light_gray_alt1_SliderTrackActive = n29
export const light_gray_alt2_Button = n29
export const light_gray_alt2_SliderTrackActive = n29
export const light_gray_active_SliderTrackActive = n29
const n30 = t([[28, 124],[29, 123],[30, 124],[31, 123]])

export const dark_alt1 = n30
export const dark_gray_alt1 = n30
const n31 = t([[28, 123],[29, 122],[30, 123],[31, 122]])

export const dark_alt2 = n31
export const dark_gray_alt2 = n31
const n32 = t([[20, 117],[21, 118],[22, 119],[23, 117],[24, 120],[25, 121],[26, 118],[27, 120]])

export const dark_active = n32
export const dark_gray_active = n32
export const dark_Button = n32
export const dark_SliderTrackActive = n32
export const dark_gray_Button = n32
export const dark_gray_SliderTrackActive = n32
export const dark_alt1_Button = n32
export const dark_alt1_SliderTrackActive = n32
export const dark_alt2_Button = n32
export const dark_alt2_SliderTrackActive = n32
export const dark_active_SliderTrackActive = n32
export const dark_gray_alt1_Button = n32
export const dark_gray_alt1_SliderTrackActive = n32
export const dark_gray_alt2_Button = n32
export const dark_gray_alt2_SliderTrackActive = n32
export const dark_gray_active_SliderTrackActive = n32
const n33 = t([[28, 54],[29, 53],[30, 54],[31, 53]])

export const light_orange_alt1 = n33
const n34 = t([[28, 53],[29, 52],[30, 53],[31, 52]])

export const light_orange_alt2 = n34
const n35 = t([[20, 47],[21, 48],[22, 49],[23, 47],[24, 50],[25, 51],[26, 48],[27, 50]])

export const light_orange_active = n35
export const light_orange_Button = n35
export const light_orange_SliderTrackActive = n35
export const light_orange_alt1_Button = n35
export const light_orange_alt1_SliderTrackActive = n35
export const light_orange_alt2_Button = n35
export const light_orange_alt2_SliderTrackActive = n35
export const light_orange_active_SliderTrackActive = n35
const n36 = t([[28, 102],[29, 101],[30, 102],[31, 101]])

export const light_yellow_alt1 = n36
const n37 = t([[28, 101],[29, 100],[30, 101],[31, 100]])

export const light_yellow_alt2 = n37
const n38 = t([[20, 95],[21, 96],[22, 97],[23, 95],[24, 98],[25, 99],[26, 96],[27, 98]])

export const light_yellow_active = n38
export const light_yellow_Button = n38
export const light_yellow_SliderTrackActive = n38
export const light_yellow_alt1_Button = n38
export const light_yellow_alt1_SliderTrackActive = n38
export const light_yellow_alt2_Button = n38
export const light_yellow_alt2_SliderTrackActive = n38
export const light_yellow_active_SliderTrackActive = n38
const n39 = t([[28, 42],[29, 41],[30, 42],[31, 41]])

export const light_green_alt1 = n39
const n40 = t([[28, 41],[29, 40],[30, 41],[31, 40]])

export const light_green_alt2 = n40
const n41 = t([[20, 35],[21, 36],[22, 37],[23, 35],[24, 38],[25, 39],[26, 36],[27, 38]])

export const light_green_active = n41
export const light_green_Button = n41
export const light_green_SliderTrackActive = n41
export const light_green_alt1_Button = n41
export const light_green_alt1_SliderTrackActive = n41
export const light_green_alt2_Button = n41
export const light_green_alt2_SliderTrackActive = n41
export const light_green_active_SliderTrackActive = n41
const n42 = t([[28, 30],[29, 29],[30, 30],[31, 29]])

export const light_blue_alt1 = n42
const n43 = t([[28, 29],[29, 28],[30, 29],[31, 28]])

export const light_blue_alt2 = n43
const n44 = t([[20, 23],[21, 24],[22, 25],[23, 23],[24, 26],[25, 27],[26, 24],[27, 26]])

export const light_blue_active = n44
export const light_blue_Button = n44
export const light_blue_SliderTrackActive = n44
export const light_blue_alt1_Button = n44
export const light_blue_alt1_SliderTrackActive = n44
export const light_blue_alt2_Button = n44
export const light_blue_alt2_SliderTrackActive = n44
export const light_blue_active_SliderTrackActive = n44
const n45 = t([[28, 78],[29, 77],[30, 78],[31, 77]])

export const light_purple_alt1 = n45
const n46 = t([[28, 77],[29, 76],[30, 77],[31, 76]])

export const light_purple_alt2 = n46
const n47 = t([[20, 71],[21, 72],[22, 73],[23, 71],[24, 74],[25, 75],[26, 72],[27, 74]])

export const light_purple_active = n47
export const light_purple_Button = n47
export const light_purple_SliderTrackActive = n47
export const light_purple_alt1_Button = n47
export const light_purple_alt1_SliderTrackActive = n47
export const light_purple_alt2_Button = n47
export const light_purple_alt2_SliderTrackActive = n47
export const light_purple_active_SliderTrackActive = n47
const n48 = t([[28, 66],[29, 65],[30, 66],[31, 65]])

export const light_pink_alt1 = n48
const n49 = t([[28, 65],[29, 64],[30, 65],[31, 64]])

export const light_pink_alt2 = n49
const n50 = t([[20, 59],[21, 60],[22, 61],[23, 59],[24, 62],[25, 63],[26, 60],[27, 62]])

export const light_pink_active = n50
export const light_pink_Button = n50
export const light_pink_SliderTrackActive = n50
export const light_pink_alt1_Button = n50
export const light_pink_alt1_SliderTrackActive = n50
export const light_pink_alt2_Button = n50
export const light_pink_alt2_SliderTrackActive = n50
export const light_pink_active_SliderTrackActive = n50
const n51 = t([[28, 90],[29, 89],[30, 90],[31, 89]])

export const light_red_alt1 = n51
const n52 = t([[28, 89],[29, 88],[30, 89],[31, 88]])

export const light_red_alt2 = n52
const n53 = t([[20, 83],[21, 84],[22, 85],[23, 83],[24, 86],[25, 87],[26, 84],[27, 86]])

export const light_red_active = n53
export const light_red_Button = n53
export const light_red_SliderTrackActive = n53
export const light_red_alt1_Button = n53
export const light_red_alt1_SliderTrackActive = n53
export const light_red_alt2_Button = n53
export const light_red_alt2_SliderTrackActive = n53
export const light_red_active_SliderTrackActive = n53
const n54 = t([[28, 289],[29, 288],[30, 289],[31, 288]])

export const light_indigo_alt1 = n54
const n55 = t([[28, 288],[29, 287],[30, 288],[31, 287]])

export const light_indigo_alt2 = n55
const n56 = t([[20, 282],[21, 283],[22, 284],[23, 282],[24, 285],[25, 286],[26, 283],[27, 285]])

export const light_indigo_active = n56
export const light_indigo_Button = n56
export const light_indigo_SliderTrackActive = n56
export const light_indigo_alt1_Button = n56
export const light_indigo_alt1_SliderTrackActive = n56
export const light_indigo_alt2_Button = n56
export const light_indigo_alt2_SliderTrackActive = n56
export const light_indigo_active_SliderTrackActive = n56
const n57 = t([[28, 309],[29, 308],[30, 309],[31, 308]])

export const light_lime_alt1 = n57
const n58 = t([[28, 308],[29, 307],[30, 308],[31, 307]])

export const light_lime_alt2 = n58
const n59 = t([[20, 302],[21, 303],[22, 304],[23, 302],[24, 305],[25, 306],[26, 303],[27, 305]])

export const light_lime_active = n59
export const light_lime_Button = n59
export const light_lime_SliderTrackActive = n59
export const light_lime_alt1_Button = n59
export const light_lime_alt1_SliderTrackActive = n59
export const light_lime_alt2_Button = n59
export const light_lime_alt2_SliderTrackActive = n59
export const light_lime_active_SliderTrackActive = n59
const n60 = t([[28, 329],[29, 328],[30, 329],[31, 328]])

export const light_amber_alt1 = n60
const n61 = t([[28, 328],[29, 327],[30, 328],[31, 327]])

export const light_amber_alt2 = n61
const n62 = t([[20, 322],[21, 323],[22, 324],[23, 322],[24, 325],[25, 326],[26, 323],[27, 325]])

export const light_amber_active = n62
export const light_amber_Button = n62
export const light_amber_SliderTrackActive = n62
export const light_amber_alt1_Button = n62
export const light_amber_alt1_SliderTrackActive = n62
export const light_amber_alt2_Button = n62
export const light_amber_alt2_SliderTrackActive = n62
export const light_amber_active_SliderTrackActive = n62
const n63 = t([[28, 111],[29, 110],[30, 111],[31, 110]])

export const light_accent_alt1 = n63
const n64 = t([[28, 110],[29, 110],[30, 110],[31, 110]])

export const light_accent_alt2 = n64
const n65 = t([[20, 107],[21, 108],[22, 108],[23, 107],[24, 109],[25, 109],[26, 108],[27, 109]])

export const light_accent_active = n65
export const light_accent_Button = n65
export const light_accent_SliderTrackActive = n65
export const light_accent_alt1_Button = n65
export const light_accent_alt1_SliderTrackActive = n65
export const light_accent_alt2_Button = n65
export const light_accent_alt2_SliderTrackActive = n65
export const light_accent_active_SliderTrackActive = n65
const n66 = t([[28, 156],[29, 155],[30, 156],[31, 155]])

export const dark_orange_alt1 = n66
const n67 = t([[28, 155],[29, 52],[30, 155],[31, 52]])

export const dark_orange_alt2 = n67
const n68 = t([[20, 150],[21, 151],[22, 152],[23, 150],[24, 153],[25, 154],[26, 151],[27, 153]])

export const dark_orange_active = n68
export const dark_orange_Button = n68
export const dark_orange_SliderTrackActive = n68
export const dark_orange_alt1_Button = n68
export const dark_orange_alt1_SliderTrackActive = n68
export const dark_orange_alt2_Button = n68
export const dark_orange_alt2_SliderTrackActive = n68
export const dark_orange_active_SliderTrackActive = n68
const n69 = t([[28, 200],[29, 199],[30, 200],[31, 199]])

export const dark_yellow_alt1 = n69
const n70 = t([[28, 199],[29, 100],[30, 199],[31, 100]])

export const dark_yellow_alt2 = n70
const n71 = t([[20, 194],[21, 195],[22, 196],[23, 194],[24, 197],[25, 198],[26, 195],[27, 197]])

export const dark_yellow_active = n71
export const dark_yellow_Button = n71
export const dark_yellow_SliderTrackActive = n71
export const dark_yellow_alt1_Button = n71
export const dark_yellow_alt1_SliderTrackActive = n71
export const dark_yellow_alt2_Button = n71
export const dark_yellow_alt2_SliderTrackActive = n71
export const dark_yellow_active_SliderTrackActive = n71
const n72 = t([[28, 145],[29, 144],[30, 145],[31, 144]])

export const dark_green_alt1 = n72
const n73 = t([[28, 144],[29, 40],[30, 144],[31, 40]])

export const dark_green_alt2 = n73
const n74 = t([[20, 139],[21, 140],[22, 141],[23, 139],[24, 142],[25, 143],[26, 140],[27, 142]])

export const dark_green_active = n74
export const dark_green_Button = n74
export const dark_green_SliderTrackActive = n74
export const dark_green_alt1_Button = n74
export const dark_green_alt1_SliderTrackActive = n74
export const dark_green_alt2_Button = n74
export const dark_green_alt2_SliderTrackActive = n74
export const dark_green_active_SliderTrackActive = n74
const n75 = t([[28, 134],[29, 133],[30, 134],[31, 133]])

export const dark_blue_alt1 = n75
const n76 = t([[28, 133],[29, 28],[30, 133],[31, 28]])

export const dark_blue_alt2 = n76
const n77 = t([[20, 128],[21, 129],[22, 130],[23, 128],[24, 131],[25, 132],[26, 129],[27, 131]])

export const dark_blue_active = n77
export const dark_blue_Button = n77
export const dark_blue_SliderTrackActive = n77
export const dark_blue_alt1_Button = n77
export const dark_blue_alt1_SliderTrackActive = n77
export const dark_blue_alt2_Button = n77
export const dark_blue_alt2_SliderTrackActive = n77
export const dark_blue_active_SliderTrackActive = n77
const n78 = t([[28, 178],[29, 177],[30, 178],[31, 177]])

export const dark_purple_alt1 = n78
const n79 = t([[28, 177],[29, 76],[30, 177],[31, 76]])

export const dark_purple_alt2 = n79
const n80 = t([[20, 172],[21, 173],[22, 174],[23, 172],[24, 175],[25, 176],[26, 173],[27, 175]])

export const dark_purple_active = n80
export const dark_purple_Button = n80
export const dark_purple_SliderTrackActive = n80
export const dark_purple_alt1_Button = n80
export const dark_purple_alt1_SliderTrackActive = n80
export const dark_purple_alt2_Button = n80
export const dark_purple_alt2_SliderTrackActive = n80
export const dark_purple_active_SliderTrackActive = n80
const n81 = t([[28, 167],[29, 166],[30, 167],[31, 166]])

export const dark_pink_alt1 = n81
const n82 = t([[28, 166],[29, 64],[30, 166],[31, 64]])

export const dark_pink_alt2 = n82
const n83 = t([[20, 161],[21, 162],[22, 163],[23, 161],[24, 164],[25, 165],[26, 162],[27, 164]])

export const dark_pink_active = n83
export const dark_pink_Button = n83
export const dark_pink_SliderTrackActive = n83
export const dark_pink_alt1_Button = n83
export const dark_pink_alt1_SliderTrackActive = n83
export const dark_pink_alt2_Button = n83
export const dark_pink_alt2_SliderTrackActive = n83
export const dark_pink_active_SliderTrackActive = n83
const n84 = t([[28, 189],[29, 188],[30, 189],[31, 188]])

export const dark_red_alt1 = n84
const n85 = t([[28, 188],[29, 88],[30, 188],[31, 88]])

export const dark_red_alt2 = n85
const n86 = t([[20, 183],[21, 184],[22, 185],[23, 183],[24, 186],[25, 187],[26, 184],[27, 186]])

export const dark_red_active = n86
export const dark_red_Button = n86
export const dark_red_SliderTrackActive = n86
export const dark_red_alt1_Button = n86
export const dark_red_alt1_SliderTrackActive = n86
export const dark_red_alt2_Button = n86
export const dark_red_alt2_SliderTrackActive = n86
export const dark_red_active_SliderTrackActive = n86
const n87 = t([[28, 384],[29, 383],[30, 384],[31, 383]])

export const dark_indigo_alt1 = n87
const n88 = t([[28, 383],[29, 287],[30, 383],[31, 287]])

export const dark_indigo_alt2 = n88
const n89 = t([[20, 378],[21, 379],[22, 380],[23, 378],[24, 381],[25, 382],[26, 379],[27, 381]])

export const dark_indigo_active = n89
export const dark_indigo_Button = n89
export const dark_indigo_SliderTrackActive = n89
export const dark_indigo_alt1_Button = n89
export const dark_indigo_alt1_SliderTrackActive = n89
export const dark_indigo_alt2_Button = n89
export const dark_indigo_alt2_SliderTrackActive = n89
export const dark_indigo_active_SliderTrackActive = n89
const n90 = t([[28, 399],[29, 398],[30, 399],[31, 398]])

export const dark_lime_alt1 = n90
const n91 = t([[28, 398],[29, 307],[30, 398],[31, 307]])

export const dark_lime_alt2 = n91
const n92 = t([[20, 393],[21, 394],[22, 395],[23, 393],[24, 396],[25, 397],[26, 394],[27, 396]])

export const dark_lime_active = n92
export const dark_lime_Button = n92
export const dark_lime_SliderTrackActive = n92
export const dark_lime_alt1_Button = n92
export const dark_lime_alt1_SliderTrackActive = n92
export const dark_lime_alt2_Button = n92
export const dark_lime_alt2_SliderTrackActive = n92
export const dark_lime_active_SliderTrackActive = n92
const n93 = t([[28, 414],[29, 413],[30, 414],[31, 413]])

export const dark_amber_alt1 = n93
const n94 = t([[28, 413],[29, 327],[30, 413],[31, 327]])

export const dark_amber_alt2 = n94
const n95 = t([[20, 408],[21, 409],[22, 410],[23, 408],[24, 411],[25, 412],[26, 409],[27, 411]])

export const dark_amber_active = n95
export const dark_amber_Button = n95
export const dark_amber_SliderTrackActive = n95
export const dark_amber_alt1_Button = n95
export const dark_amber_alt1_SliderTrackActive = n95
export const dark_amber_alt2_Button = n95
export const dark_amber_alt2_SliderTrackActive = n95
export const dark_amber_active_SliderTrackActive = n95
const n96 = t([[28, 212],[29, 211],[30, 212],[31, 211]])

export const dark_accent_alt1 = n96
const n97 = t([[28, 211],[29, 210],[30, 211],[31, 210]])

export const dark_accent_alt2 = n97
const n98 = t([[20, 205],[21, 206],[22, 207],[23, 205],[24, 208],[25, 209],[26, 206],[27, 208]])

export const dark_accent_active = n98
export const dark_accent_Button = n98
export const dark_accent_SliderTrackActive = n98
export const dark_accent_alt1_Button = n98
export const dark_accent_alt1_SliderTrackActive = n98
export const dark_accent_alt2_Button = n98
export const dark_accent_alt2_SliderTrackActive = n98
export const dark_accent_active_SliderTrackActive = n98
const n99 = t([[20, 5],[21, 6],[22, 7],[23, 5],[24, 8],[25, 9],[26, 6],[27, 8]])

export const light_ListItem = n99
export const light_SelectTrigger = n99
export const light_Card = n99
export const light_DrawerFrame = n99
export const light_Progress = n99
export const light_TooltipArrow = n99
export const light_SliderTrack = n99
export const light_gray_ListItem = n99
export const light_gray_SelectTrigger = n99
export const light_gray_Card = n99
export const light_gray_DrawerFrame = n99
export const light_gray_Progress = n99
export const light_gray_TooltipArrow = n99
export const light_gray_SliderTrack = n99
export const light_alt1_ListItem = n99
export const light_alt1_SelectTrigger = n99
export const light_alt1_Card = n99
export const light_alt1_DrawerFrame = n99
export const light_alt1_Progress = n99
export const light_alt1_TooltipArrow = n99
export const light_alt1_SliderTrack = n99
export const light_alt2_ListItem = n99
export const light_alt2_SelectTrigger = n99
export const light_alt2_Card = n99
export const light_alt2_DrawerFrame = n99
export const light_alt2_Progress = n99
export const light_alt2_TooltipArrow = n99
export const light_alt2_SliderTrack = n99
export const light_active_ListItem = n99
export const light_active_DrawerFrame = n99
export const light_active_Progress = n99
export const light_active_TooltipArrow = n99
export const light_active_SliderTrack = n99
export const light_gray_alt1_ListItem = n99
export const light_gray_alt1_SelectTrigger = n99
export const light_gray_alt1_Card = n99
export const light_gray_alt1_DrawerFrame = n99
export const light_gray_alt1_Progress = n99
export const light_gray_alt1_TooltipArrow = n99
export const light_gray_alt1_SliderTrack = n99
export const light_gray_alt2_ListItem = n99
export const light_gray_alt2_SelectTrigger = n99
export const light_gray_alt2_Card = n99
export const light_gray_alt2_DrawerFrame = n99
export const light_gray_alt2_Progress = n99
export const light_gray_alt2_TooltipArrow = n99
export const light_gray_alt2_SliderTrack = n99
export const light_gray_active_ListItem = n99
export const light_gray_active_DrawerFrame = n99
export const light_gray_active_Progress = n99
export const light_gray_active_TooltipArrow = n99
export const light_gray_active_SliderTrack = n99
const n100 = t([[20, 6],[21, 7],[22, 8],[23, 6],[24, 9],[25, 10],[26, 7],[27, 9]])

export const light_Checkbox = n100
export const light_Switch = n100
export const light_TooltipContent = n100
export const light_RadioGroupItem = n100
export const light_Input = n100
export const light_TextArea = n100
export const light_gray_Checkbox = n100
export const light_gray_Switch = n100
export const light_gray_TooltipContent = n100
export const light_gray_RadioGroupItem = n100
export const light_gray_Input = n100
export const light_gray_TextArea = n100
export const light_alt1_Checkbox = n100
export const light_alt1_Switch = n100
export const light_alt1_TooltipContent = n100
export const light_alt1_RadioGroupItem = n100
export const light_alt1_Input = n100
export const light_alt1_TextArea = n100
export const light_alt2_Checkbox = n100
export const light_alt2_Switch = n100
export const light_alt2_TooltipContent = n100
export const light_alt2_RadioGroupItem = n100
export const light_alt2_Input = n100
export const light_alt2_TextArea = n100
export const light_gray_alt1_Checkbox = n100
export const light_gray_alt1_Switch = n100
export const light_gray_alt1_TooltipContent = n100
export const light_gray_alt1_RadioGroupItem = n100
export const light_gray_alt1_Input = n100
export const light_gray_alt1_TextArea = n100
export const light_gray_alt2_Checkbox = n100
export const light_gray_alt2_Switch = n100
export const light_gray_alt2_TooltipContent = n100
export const light_gray_alt2_RadioGroupItem = n100
export const light_gray_alt2_Input = n100
export const light_gray_alt2_TextArea = n100
const n101 = t([[28, 5],[29, 6],[30, 7],[31, 5],[20, 15],[21, 14],[22, 15],[23, 14],[24, 13],[25, 12],[26, 11],[27, 10]])

export const light_SwitchThumb = n101
export const light_SliderThumb = n101
export const light_Tooltip = n101
export const light_ProgressIndicator = n101
export const light_gray_SwitchThumb = n101
export const light_gray_SliderThumb = n101
export const light_gray_Tooltip = n101
export const light_gray_ProgressIndicator = n101
export const light_alt1_SwitchThumb = n101
export const light_alt1_SliderThumb = n101
export const light_alt1_Tooltip = n101
export const light_alt1_ProgressIndicator = n101
export const light_alt2_SwitchThumb = n101
export const light_alt2_SliderThumb = n101
export const light_alt2_Tooltip = n101
export const light_alt2_ProgressIndicator = n101
export const light_gray_alt1_SwitchThumb = n101
export const light_gray_alt1_SliderThumb = n101
export const light_gray_alt1_Tooltip = n101
export const light_gray_alt1_ProgressIndicator = n101
export const light_gray_alt2_SwitchThumb = n101
export const light_gray_alt2_SliderThumb = n101
export const light_gray_alt2_Tooltip = n101
export const light_gray_alt2_ProgressIndicator = n101
const n102 = t([[20, 416]])

export const light_SheetOverlay = n102
export const light_DialogOverlay = n102
export const light_ModalOverlay = n102
export const light_orange_SheetOverlay = n102
export const light_orange_DialogOverlay = n102
export const light_orange_ModalOverlay = n102
export const light_yellow_SheetOverlay = n102
export const light_yellow_DialogOverlay = n102
export const light_yellow_ModalOverlay = n102
export const light_green_SheetOverlay = n102
export const light_green_DialogOverlay = n102
export const light_green_ModalOverlay = n102
export const light_blue_SheetOverlay = n102
export const light_blue_DialogOverlay = n102
export const light_blue_ModalOverlay = n102
export const light_purple_SheetOverlay = n102
export const light_purple_DialogOverlay = n102
export const light_purple_ModalOverlay = n102
export const light_pink_SheetOverlay = n102
export const light_pink_DialogOverlay = n102
export const light_pink_ModalOverlay = n102
export const light_red_SheetOverlay = n102
export const light_red_DialogOverlay = n102
export const light_red_ModalOverlay = n102
export const light_gray_SheetOverlay = n102
export const light_gray_DialogOverlay = n102
export const light_gray_ModalOverlay = n102
export const light_indigo_SheetOverlay = n102
export const light_indigo_DialogOverlay = n102
export const light_indigo_ModalOverlay = n102
export const light_lime_SheetOverlay = n102
export const light_lime_DialogOverlay = n102
export const light_lime_ModalOverlay = n102
export const light_amber_SheetOverlay = n102
export const light_amber_DialogOverlay = n102
export const light_amber_ModalOverlay = n102
export const light_accent_SheetOverlay = n102
export const light_accent_DialogOverlay = n102
export const light_accent_ModalOverlay = n102
export const light_alt1_SheetOverlay = n102
export const light_alt1_DialogOverlay = n102
export const light_alt1_ModalOverlay = n102
export const light_alt2_SheetOverlay = n102
export const light_alt2_DialogOverlay = n102
export const light_alt2_ModalOverlay = n102
export const light_active_SheetOverlay = n102
export const light_active_DialogOverlay = n102
export const light_active_ModalOverlay = n102
export const light_orange_alt1_SheetOverlay = n102
export const light_orange_alt1_DialogOverlay = n102
export const light_orange_alt1_ModalOverlay = n102
export const light_orange_alt2_SheetOverlay = n102
export const light_orange_alt2_DialogOverlay = n102
export const light_orange_alt2_ModalOverlay = n102
export const light_orange_active_SheetOverlay = n102
export const light_orange_active_DialogOverlay = n102
export const light_orange_active_ModalOverlay = n102
export const light_yellow_alt1_SheetOverlay = n102
export const light_yellow_alt1_DialogOverlay = n102
export const light_yellow_alt1_ModalOverlay = n102
export const light_yellow_alt2_SheetOverlay = n102
export const light_yellow_alt2_DialogOverlay = n102
export const light_yellow_alt2_ModalOverlay = n102
export const light_yellow_active_SheetOverlay = n102
export const light_yellow_active_DialogOverlay = n102
export const light_yellow_active_ModalOverlay = n102
export const light_green_alt1_SheetOverlay = n102
export const light_green_alt1_DialogOverlay = n102
export const light_green_alt1_ModalOverlay = n102
export const light_green_alt2_SheetOverlay = n102
export const light_green_alt2_DialogOverlay = n102
export const light_green_alt2_ModalOverlay = n102
export const light_green_active_SheetOverlay = n102
export const light_green_active_DialogOverlay = n102
export const light_green_active_ModalOverlay = n102
export const light_blue_alt1_SheetOverlay = n102
export const light_blue_alt1_DialogOverlay = n102
export const light_blue_alt1_ModalOverlay = n102
export const light_blue_alt2_SheetOverlay = n102
export const light_blue_alt2_DialogOverlay = n102
export const light_blue_alt2_ModalOverlay = n102
export const light_blue_active_SheetOverlay = n102
export const light_blue_active_DialogOverlay = n102
export const light_blue_active_ModalOverlay = n102
export const light_purple_alt1_SheetOverlay = n102
export const light_purple_alt1_DialogOverlay = n102
export const light_purple_alt1_ModalOverlay = n102
export const light_purple_alt2_SheetOverlay = n102
export const light_purple_alt2_DialogOverlay = n102
export const light_purple_alt2_ModalOverlay = n102
export const light_purple_active_SheetOverlay = n102
export const light_purple_active_DialogOverlay = n102
export const light_purple_active_ModalOverlay = n102
export const light_pink_alt1_SheetOverlay = n102
export const light_pink_alt1_DialogOverlay = n102
export const light_pink_alt1_ModalOverlay = n102
export const light_pink_alt2_SheetOverlay = n102
export const light_pink_alt2_DialogOverlay = n102
export const light_pink_alt2_ModalOverlay = n102
export const light_pink_active_SheetOverlay = n102
export const light_pink_active_DialogOverlay = n102
export const light_pink_active_ModalOverlay = n102
export const light_red_alt1_SheetOverlay = n102
export const light_red_alt1_DialogOverlay = n102
export const light_red_alt1_ModalOverlay = n102
export const light_red_alt2_SheetOverlay = n102
export const light_red_alt2_DialogOverlay = n102
export const light_red_alt2_ModalOverlay = n102
export const light_red_active_SheetOverlay = n102
export const light_red_active_DialogOverlay = n102
export const light_red_active_ModalOverlay = n102
export const light_gray_alt1_SheetOverlay = n102
export const light_gray_alt1_DialogOverlay = n102
export const light_gray_alt1_ModalOverlay = n102
export const light_gray_alt2_SheetOverlay = n102
export const light_gray_alt2_DialogOverlay = n102
export const light_gray_alt2_ModalOverlay = n102
export const light_gray_active_SheetOverlay = n102
export const light_gray_active_DialogOverlay = n102
export const light_gray_active_ModalOverlay = n102
export const light_indigo_alt1_SheetOverlay = n102
export const light_indigo_alt1_DialogOverlay = n102
export const light_indigo_alt1_ModalOverlay = n102
export const light_indigo_alt2_SheetOverlay = n102
export const light_indigo_alt2_DialogOverlay = n102
export const light_indigo_alt2_ModalOverlay = n102
export const light_indigo_active_SheetOverlay = n102
export const light_indigo_active_DialogOverlay = n102
export const light_indigo_active_ModalOverlay = n102
export const light_lime_alt1_SheetOverlay = n102
export const light_lime_alt1_DialogOverlay = n102
export const light_lime_alt1_ModalOverlay = n102
export const light_lime_alt2_SheetOverlay = n102
export const light_lime_alt2_DialogOverlay = n102
export const light_lime_alt2_ModalOverlay = n102
export const light_lime_active_SheetOverlay = n102
export const light_lime_active_DialogOverlay = n102
export const light_lime_active_ModalOverlay = n102
export const light_amber_alt1_SheetOverlay = n102
export const light_amber_alt1_DialogOverlay = n102
export const light_amber_alt1_ModalOverlay = n102
export const light_amber_alt2_SheetOverlay = n102
export const light_amber_alt2_DialogOverlay = n102
export const light_amber_alt2_ModalOverlay = n102
export const light_amber_active_SheetOverlay = n102
export const light_amber_active_DialogOverlay = n102
export const light_amber_active_ModalOverlay = n102
export const light_accent_alt1_SheetOverlay = n102
export const light_accent_alt1_DialogOverlay = n102
export const light_accent_alt1_ModalOverlay = n102
export const light_accent_alt2_SheetOverlay = n102
export const light_accent_alt2_DialogOverlay = n102
export const light_accent_alt2_ModalOverlay = n102
export const light_accent_active_SheetOverlay = n102
export const light_accent_active_DialogOverlay = n102
export const light_accent_active_ModalOverlay = n102
const n103 = t([[20, 115],[21, 116],[22, 117],[23, 115],[24, 118],[25, 119],[26, 116],[27, 118]])

export const dark_ListItem = n103
export const dark_SelectTrigger = n103
export const dark_Card = n103
export const dark_DrawerFrame = n103
export const dark_Progress = n103
export const dark_TooltipArrow = n103
export const dark_SliderTrack = n103
export const dark_gray_ListItem = n103
export const dark_gray_SelectTrigger = n103
export const dark_gray_Card = n103
export const dark_gray_DrawerFrame = n103
export const dark_gray_Progress = n103
export const dark_gray_TooltipArrow = n103
export const dark_gray_SliderTrack = n103
export const dark_alt1_ListItem = n103
export const dark_alt1_SelectTrigger = n103
export const dark_alt1_Card = n103
export const dark_alt1_DrawerFrame = n103
export const dark_alt1_Progress = n103
export const dark_alt1_TooltipArrow = n103
export const dark_alt1_SliderTrack = n103
export const dark_alt2_ListItem = n103
export const dark_alt2_SelectTrigger = n103
export const dark_alt2_Card = n103
export const dark_alt2_DrawerFrame = n103
export const dark_alt2_Progress = n103
export const dark_alt2_TooltipArrow = n103
export const dark_alt2_SliderTrack = n103
export const dark_active_ListItem = n103
export const dark_active_DrawerFrame = n103
export const dark_active_Progress = n103
export const dark_active_TooltipArrow = n103
export const dark_active_SliderTrack = n103
export const dark_gray_alt1_ListItem = n103
export const dark_gray_alt1_SelectTrigger = n103
export const dark_gray_alt1_Card = n103
export const dark_gray_alt1_DrawerFrame = n103
export const dark_gray_alt1_Progress = n103
export const dark_gray_alt1_TooltipArrow = n103
export const dark_gray_alt1_SliderTrack = n103
export const dark_gray_alt2_ListItem = n103
export const dark_gray_alt2_SelectTrigger = n103
export const dark_gray_alt2_Card = n103
export const dark_gray_alt2_DrawerFrame = n103
export const dark_gray_alt2_Progress = n103
export const dark_gray_alt2_TooltipArrow = n103
export const dark_gray_alt2_SliderTrack = n103
export const dark_gray_active_ListItem = n103
export const dark_gray_active_DrawerFrame = n103
export const dark_gray_active_Progress = n103
export const dark_gray_active_TooltipArrow = n103
export const dark_gray_active_SliderTrack = n103
const n104 = t([[20, 116],[21, 117],[22, 118],[23, 116],[24, 119],[25, 120],[26, 117],[27, 119]])

export const dark_Checkbox = n104
export const dark_Switch = n104
export const dark_TooltipContent = n104
export const dark_RadioGroupItem = n104
export const dark_Input = n104
export const dark_TextArea = n104
export const dark_gray_Checkbox = n104
export const dark_gray_Switch = n104
export const dark_gray_TooltipContent = n104
export const dark_gray_RadioGroupItem = n104
export const dark_gray_Input = n104
export const dark_gray_TextArea = n104
export const dark_alt1_Checkbox = n104
export const dark_alt1_Switch = n104
export const dark_alt1_TooltipContent = n104
export const dark_alt1_RadioGroupItem = n104
export const dark_alt1_Input = n104
export const dark_alt1_TextArea = n104
export const dark_alt2_Checkbox = n104
export const dark_alt2_Switch = n104
export const dark_alt2_TooltipContent = n104
export const dark_alt2_RadioGroupItem = n104
export const dark_alt2_Input = n104
export const dark_alt2_TextArea = n104
export const dark_gray_alt1_Checkbox = n104
export const dark_gray_alt1_Switch = n104
export const dark_gray_alt1_TooltipContent = n104
export const dark_gray_alt1_RadioGroupItem = n104
export const dark_gray_alt1_Input = n104
export const dark_gray_alt1_TextArea = n104
export const dark_gray_alt2_Checkbox = n104
export const dark_gray_alt2_Switch = n104
export const dark_gray_alt2_TooltipContent = n104
export const dark_gray_alt2_RadioGroupItem = n104
export const dark_gray_alt2_Input = n104
export const dark_gray_alt2_TextArea = n104
const n105 = t([[28, 115],[29, 116],[30, 117],[31, 115],[20, 4],[21, 124],[22, 4],[23, 124],[24, 123],[25, 122],[26, 121],[27, 120]])

export const dark_SwitchThumb = n105
export const dark_SliderThumb = n105
export const dark_Tooltip = n105
export const dark_ProgressIndicator = n105
export const dark_gray_SwitchThumb = n105
export const dark_gray_SliderThumb = n105
export const dark_gray_Tooltip = n105
export const dark_gray_ProgressIndicator = n105
export const dark_alt1_SwitchThumb = n105
export const dark_alt1_SliderThumb = n105
export const dark_alt1_Tooltip = n105
export const dark_alt1_ProgressIndicator = n105
export const dark_alt2_SwitchThumb = n105
export const dark_alt2_SliderThumb = n105
export const dark_alt2_Tooltip = n105
export const dark_alt2_ProgressIndicator = n105
export const dark_gray_alt1_SwitchThumb = n105
export const dark_gray_alt1_SliderThumb = n105
export const dark_gray_alt1_Tooltip = n105
export const dark_gray_alt1_ProgressIndicator = n105
export const dark_gray_alt2_SwitchThumb = n105
export const dark_gray_alt2_SliderThumb = n105
export const dark_gray_alt2_Tooltip = n105
export const dark_gray_alt2_ProgressIndicator = n105
const n106 = t([[20, 417]])

export const dark_SheetOverlay = n106
export const dark_DialogOverlay = n106
export const dark_ModalOverlay = n106
export const dark_orange_SheetOverlay = n106
export const dark_orange_DialogOverlay = n106
export const dark_orange_ModalOverlay = n106
export const dark_yellow_SheetOverlay = n106
export const dark_yellow_DialogOverlay = n106
export const dark_yellow_ModalOverlay = n106
export const dark_green_SheetOverlay = n106
export const dark_green_DialogOverlay = n106
export const dark_green_ModalOverlay = n106
export const dark_blue_SheetOverlay = n106
export const dark_blue_DialogOverlay = n106
export const dark_blue_ModalOverlay = n106
export const dark_purple_SheetOverlay = n106
export const dark_purple_DialogOverlay = n106
export const dark_purple_ModalOverlay = n106
export const dark_pink_SheetOverlay = n106
export const dark_pink_DialogOverlay = n106
export const dark_pink_ModalOverlay = n106
export const dark_red_SheetOverlay = n106
export const dark_red_DialogOverlay = n106
export const dark_red_ModalOverlay = n106
export const dark_gray_SheetOverlay = n106
export const dark_gray_DialogOverlay = n106
export const dark_gray_ModalOverlay = n106
export const dark_indigo_SheetOverlay = n106
export const dark_indigo_DialogOverlay = n106
export const dark_indigo_ModalOverlay = n106
export const dark_lime_SheetOverlay = n106
export const dark_lime_DialogOverlay = n106
export const dark_lime_ModalOverlay = n106
export const dark_amber_SheetOverlay = n106
export const dark_amber_DialogOverlay = n106
export const dark_amber_ModalOverlay = n106
export const dark_accent_SheetOverlay = n106
export const dark_accent_DialogOverlay = n106
export const dark_accent_ModalOverlay = n106
export const dark_alt1_SheetOverlay = n106
export const dark_alt1_DialogOverlay = n106
export const dark_alt1_ModalOverlay = n106
export const dark_alt2_SheetOverlay = n106
export const dark_alt2_DialogOverlay = n106
export const dark_alt2_ModalOverlay = n106
export const dark_active_SheetOverlay = n106
export const dark_active_DialogOverlay = n106
export const dark_active_ModalOverlay = n106
export const dark_orange_alt1_SheetOverlay = n106
export const dark_orange_alt1_DialogOverlay = n106
export const dark_orange_alt1_ModalOverlay = n106
export const dark_orange_alt2_SheetOverlay = n106
export const dark_orange_alt2_DialogOverlay = n106
export const dark_orange_alt2_ModalOverlay = n106
export const dark_orange_active_SheetOverlay = n106
export const dark_orange_active_DialogOverlay = n106
export const dark_orange_active_ModalOverlay = n106
export const dark_yellow_alt1_SheetOverlay = n106
export const dark_yellow_alt1_DialogOverlay = n106
export const dark_yellow_alt1_ModalOverlay = n106
export const dark_yellow_alt2_SheetOverlay = n106
export const dark_yellow_alt2_DialogOverlay = n106
export const dark_yellow_alt2_ModalOverlay = n106
export const dark_yellow_active_SheetOverlay = n106
export const dark_yellow_active_DialogOverlay = n106
export const dark_yellow_active_ModalOverlay = n106
export const dark_green_alt1_SheetOverlay = n106
export const dark_green_alt1_DialogOverlay = n106
export const dark_green_alt1_ModalOverlay = n106
export const dark_green_alt2_SheetOverlay = n106
export const dark_green_alt2_DialogOverlay = n106
export const dark_green_alt2_ModalOverlay = n106
export const dark_green_active_SheetOverlay = n106
export const dark_green_active_DialogOverlay = n106
export const dark_green_active_ModalOverlay = n106
export const dark_blue_alt1_SheetOverlay = n106
export const dark_blue_alt1_DialogOverlay = n106
export const dark_blue_alt1_ModalOverlay = n106
export const dark_blue_alt2_SheetOverlay = n106
export const dark_blue_alt2_DialogOverlay = n106
export const dark_blue_alt2_ModalOverlay = n106
export const dark_blue_active_SheetOverlay = n106
export const dark_blue_active_DialogOverlay = n106
export const dark_blue_active_ModalOverlay = n106
export const dark_purple_alt1_SheetOverlay = n106
export const dark_purple_alt1_DialogOverlay = n106
export const dark_purple_alt1_ModalOverlay = n106
export const dark_purple_alt2_SheetOverlay = n106
export const dark_purple_alt2_DialogOverlay = n106
export const dark_purple_alt2_ModalOverlay = n106
export const dark_purple_active_SheetOverlay = n106
export const dark_purple_active_DialogOverlay = n106
export const dark_purple_active_ModalOverlay = n106
export const dark_pink_alt1_SheetOverlay = n106
export const dark_pink_alt1_DialogOverlay = n106
export const dark_pink_alt1_ModalOverlay = n106
export const dark_pink_alt2_SheetOverlay = n106
export const dark_pink_alt2_DialogOverlay = n106
export const dark_pink_alt2_ModalOverlay = n106
export const dark_pink_active_SheetOverlay = n106
export const dark_pink_active_DialogOverlay = n106
export const dark_pink_active_ModalOverlay = n106
export const dark_red_alt1_SheetOverlay = n106
export const dark_red_alt1_DialogOverlay = n106
export const dark_red_alt1_ModalOverlay = n106
export const dark_red_alt2_SheetOverlay = n106
export const dark_red_alt2_DialogOverlay = n106
export const dark_red_alt2_ModalOverlay = n106
export const dark_red_active_SheetOverlay = n106
export const dark_red_active_DialogOverlay = n106
export const dark_red_active_ModalOverlay = n106
export const dark_gray_alt1_SheetOverlay = n106
export const dark_gray_alt1_DialogOverlay = n106
export const dark_gray_alt1_ModalOverlay = n106
export const dark_gray_alt2_SheetOverlay = n106
export const dark_gray_alt2_DialogOverlay = n106
export const dark_gray_alt2_ModalOverlay = n106
export const dark_gray_active_SheetOverlay = n106
export const dark_gray_active_DialogOverlay = n106
export const dark_gray_active_ModalOverlay = n106
export const dark_indigo_alt1_SheetOverlay = n106
export const dark_indigo_alt1_DialogOverlay = n106
export const dark_indigo_alt1_ModalOverlay = n106
export const dark_indigo_alt2_SheetOverlay = n106
export const dark_indigo_alt2_DialogOverlay = n106
export const dark_indigo_alt2_ModalOverlay = n106
export const dark_indigo_active_SheetOverlay = n106
export const dark_indigo_active_DialogOverlay = n106
export const dark_indigo_active_ModalOverlay = n106
export const dark_lime_alt1_SheetOverlay = n106
export const dark_lime_alt1_DialogOverlay = n106
export const dark_lime_alt1_ModalOverlay = n106
export const dark_lime_alt2_SheetOverlay = n106
export const dark_lime_alt2_DialogOverlay = n106
export const dark_lime_alt2_ModalOverlay = n106
export const dark_lime_active_SheetOverlay = n106
export const dark_lime_active_DialogOverlay = n106
export const dark_lime_active_ModalOverlay = n106
export const dark_amber_alt1_SheetOverlay = n106
export const dark_amber_alt1_DialogOverlay = n106
export const dark_amber_alt1_ModalOverlay = n106
export const dark_amber_alt2_SheetOverlay = n106
export const dark_amber_alt2_DialogOverlay = n106
export const dark_amber_alt2_ModalOverlay = n106
export const dark_amber_active_SheetOverlay = n106
export const dark_amber_active_DialogOverlay = n106
export const dark_amber_active_ModalOverlay = n106
export const dark_accent_alt1_SheetOverlay = n106
export const dark_accent_alt1_DialogOverlay = n106
export const dark_accent_alt1_ModalOverlay = n106
export const dark_accent_alt2_SheetOverlay = n106
export const dark_accent_alt2_DialogOverlay = n106
export const dark_accent_alt2_ModalOverlay = n106
export const dark_accent_active_SheetOverlay = n106
export const dark_accent_active_DialogOverlay = n106
export const dark_accent_active_ModalOverlay = n106
const n107 = t([[20, 45],[21, 46],[22, 47],[23, 45],[24, 48],[25, 49],[26, 46],[27, 48]])

export const light_orange_ListItem = n107
export const light_orange_SelectTrigger = n107
export const light_orange_Card = n107
export const light_orange_DrawerFrame = n107
export const light_orange_Progress = n107
export const light_orange_TooltipArrow = n107
export const light_orange_SliderTrack = n107
export const light_orange_alt1_ListItem = n107
export const light_orange_alt1_SelectTrigger = n107
export const light_orange_alt1_Card = n107
export const light_orange_alt1_DrawerFrame = n107
export const light_orange_alt1_Progress = n107
export const light_orange_alt1_TooltipArrow = n107
export const light_orange_alt1_SliderTrack = n107
export const light_orange_alt2_ListItem = n107
export const light_orange_alt2_SelectTrigger = n107
export const light_orange_alt2_Card = n107
export const light_orange_alt2_DrawerFrame = n107
export const light_orange_alt2_Progress = n107
export const light_orange_alt2_TooltipArrow = n107
export const light_orange_alt2_SliderTrack = n107
export const light_orange_active_ListItem = n107
export const light_orange_active_DrawerFrame = n107
export const light_orange_active_Progress = n107
export const light_orange_active_TooltipArrow = n107
export const light_orange_active_SliderTrack = n107
const n108 = t([[20, 46],[21, 47],[22, 48],[23, 46],[24, 49],[25, 50],[26, 47],[27, 49]])

export const light_orange_Checkbox = n108
export const light_orange_Switch = n108
export const light_orange_TooltipContent = n108
export const light_orange_RadioGroupItem = n108
export const light_orange_Input = n108
export const light_orange_TextArea = n108
export const light_orange_alt1_Checkbox = n108
export const light_orange_alt1_Switch = n108
export const light_orange_alt1_TooltipContent = n108
export const light_orange_alt1_RadioGroupItem = n108
export const light_orange_alt1_Input = n108
export const light_orange_alt1_TextArea = n108
export const light_orange_alt2_Checkbox = n108
export const light_orange_alt2_Switch = n108
export const light_orange_alt2_TooltipContent = n108
export const light_orange_alt2_RadioGroupItem = n108
export const light_orange_alt2_Input = n108
export const light_orange_alt2_TextArea = n108
const n109 = t([[28, 45],[29, 46],[30, 47],[31, 45],[20, 55],[21, 54],[22, 55],[23, 54],[24, 53],[25, 52],[26, 51],[27, 50]])

export const light_orange_SwitchThumb = n109
export const light_orange_SliderThumb = n109
export const light_orange_Tooltip = n109
export const light_orange_ProgressIndicator = n109
export const light_orange_alt1_SwitchThumb = n109
export const light_orange_alt1_SliderThumb = n109
export const light_orange_alt1_Tooltip = n109
export const light_orange_alt1_ProgressIndicator = n109
export const light_orange_alt2_SwitchThumb = n109
export const light_orange_alt2_SliderThumb = n109
export const light_orange_alt2_Tooltip = n109
export const light_orange_alt2_ProgressIndicator = n109
const n110 = t([[20, 93],[21, 94],[22, 95],[23, 93],[24, 96],[25, 97],[26, 94],[27, 96]])

export const light_yellow_ListItem = n110
export const light_yellow_SelectTrigger = n110
export const light_yellow_Card = n110
export const light_yellow_DrawerFrame = n110
export const light_yellow_Progress = n110
export const light_yellow_TooltipArrow = n110
export const light_yellow_SliderTrack = n110
export const light_yellow_alt1_ListItem = n110
export const light_yellow_alt1_SelectTrigger = n110
export const light_yellow_alt1_Card = n110
export const light_yellow_alt1_DrawerFrame = n110
export const light_yellow_alt1_Progress = n110
export const light_yellow_alt1_TooltipArrow = n110
export const light_yellow_alt1_SliderTrack = n110
export const light_yellow_alt2_ListItem = n110
export const light_yellow_alt2_SelectTrigger = n110
export const light_yellow_alt2_Card = n110
export const light_yellow_alt2_DrawerFrame = n110
export const light_yellow_alt2_Progress = n110
export const light_yellow_alt2_TooltipArrow = n110
export const light_yellow_alt2_SliderTrack = n110
export const light_yellow_active_ListItem = n110
export const light_yellow_active_DrawerFrame = n110
export const light_yellow_active_Progress = n110
export const light_yellow_active_TooltipArrow = n110
export const light_yellow_active_SliderTrack = n110
const n111 = t([[20, 94],[21, 95],[22, 96],[23, 94],[24, 97],[25, 98],[26, 95],[27, 97]])

export const light_yellow_Checkbox = n111
export const light_yellow_Switch = n111
export const light_yellow_TooltipContent = n111
export const light_yellow_RadioGroupItem = n111
export const light_yellow_Input = n111
export const light_yellow_TextArea = n111
export const light_yellow_alt1_Checkbox = n111
export const light_yellow_alt1_Switch = n111
export const light_yellow_alt1_TooltipContent = n111
export const light_yellow_alt1_RadioGroupItem = n111
export const light_yellow_alt1_Input = n111
export const light_yellow_alt1_TextArea = n111
export const light_yellow_alt2_Checkbox = n111
export const light_yellow_alt2_Switch = n111
export const light_yellow_alt2_TooltipContent = n111
export const light_yellow_alt2_RadioGroupItem = n111
export const light_yellow_alt2_Input = n111
export const light_yellow_alt2_TextArea = n111
const n112 = t([[28, 93],[29, 94],[30, 95],[31, 93],[20, 103],[21, 102],[22, 103],[23, 102],[24, 101],[25, 100],[26, 99],[27, 98]])

export const light_yellow_SwitchThumb = n112
export const light_yellow_SliderThumb = n112
export const light_yellow_Tooltip = n112
export const light_yellow_ProgressIndicator = n112
export const light_yellow_alt1_SwitchThumb = n112
export const light_yellow_alt1_SliderThumb = n112
export const light_yellow_alt1_Tooltip = n112
export const light_yellow_alt1_ProgressIndicator = n112
export const light_yellow_alt2_SwitchThumb = n112
export const light_yellow_alt2_SliderThumb = n112
export const light_yellow_alt2_Tooltip = n112
export const light_yellow_alt2_ProgressIndicator = n112
const n113 = t([[20, 33],[21, 34],[22, 35],[23, 33],[24, 36],[25, 37],[26, 34],[27, 36]])

export const light_green_ListItem = n113
export const light_green_SelectTrigger = n113
export const light_green_Card = n113
export const light_green_DrawerFrame = n113
export const light_green_Progress = n113
export const light_green_TooltipArrow = n113
export const light_green_SliderTrack = n113
export const light_green_alt1_ListItem = n113
export const light_green_alt1_SelectTrigger = n113
export const light_green_alt1_Card = n113
export const light_green_alt1_DrawerFrame = n113
export const light_green_alt1_Progress = n113
export const light_green_alt1_TooltipArrow = n113
export const light_green_alt1_SliderTrack = n113
export const light_green_alt2_ListItem = n113
export const light_green_alt2_SelectTrigger = n113
export const light_green_alt2_Card = n113
export const light_green_alt2_DrawerFrame = n113
export const light_green_alt2_Progress = n113
export const light_green_alt2_TooltipArrow = n113
export const light_green_alt2_SliderTrack = n113
export const light_green_active_ListItem = n113
export const light_green_active_DrawerFrame = n113
export const light_green_active_Progress = n113
export const light_green_active_TooltipArrow = n113
export const light_green_active_SliderTrack = n113
const n114 = t([[20, 34],[21, 35],[22, 36],[23, 34],[24, 37],[25, 38],[26, 35],[27, 37]])

export const light_green_Checkbox = n114
export const light_green_Switch = n114
export const light_green_TooltipContent = n114
export const light_green_RadioGroupItem = n114
export const light_green_Input = n114
export const light_green_TextArea = n114
export const light_green_alt1_Checkbox = n114
export const light_green_alt1_Switch = n114
export const light_green_alt1_TooltipContent = n114
export const light_green_alt1_RadioGroupItem = n114
export const light_green_alt1_Input = n114
export const light_green_alt1_TextArea = n114
export const light_green_alt2_Checkbox = n114
export const light_green_alt2_Switch = n114
export const light_green_alt2_TooltipContent = n114
export const light_green_alt2_RadioGroupItem = n114
export const light_green_alt2_Input = n114
export const light_green_alt2_TextArea = n114
const n115 = t([[28, 33],[29, 34],[30, 35],[31, 33],[20, 43],[21, 42],[22, 43],[23, 42],[24, 41],[25, 40],[26, 39],[27, 38]])

export const light_green_SwitchThumb = n115
export const light_green_SliderThumb = n115
export const light_green_Tooltip = n115
export const light_green_ProgressIndicator = n115
export const light_green_alt1_SwitchThumb = n115
export const light_green_alt1_SliderThumb = n115
export const light_green_alt1_Tooltip = n115
export const light_green_alt1_ProgressIndicator = n115
export const light_green_alt2_SwitchThumb = n115
export const light_green_alt2_SliderThumb = n115
export const light_green_alt2_Tooltip = n115
export const light_green_alt2_ProgressIndicator = n115
const n116 = t([[20, 21],[21, 22],[22, 23],[23, 21],[24, 24],[25, 25],[26, 22],[27, 24]])

export const light_blue_ListItem = n116
export const light_blue_SelectTrigger = n116
export const light_blue_Card = n116
export const light_blue_DrawerFrame = n116
export const light_blue_Progress = n116
export const light_blue_TooltipArrow = n116
export const light_blue_SliderTrack = n116
export const light_blue_alt1_ListItem = n116
export const light_blue_alt1_SelectTrigger = n116
export const light_blue_alt1_Card = n116
export const light_blue_alt1_DrawerFrame = n116
export const light_blue_alt1_Progress = n116
export const light_blue_alt1_TooltipArrow = n116
export const light_blue_alt1_SliderTrack = n116
export const light_blue_alt2_ListItem = n116
export const light_blue_alt2_SelectTrigger = n116
export const light_blue_alt2_Card = n116
export const light_blue_alt2_DrawerFrame = n116
export const light_blue_alt2_Progress = n116
export const light_blue_alt2_TooltipArrow = n116
export const light_blue_alt2_SliderTrack = n116
export const light_blue_active_ListItem = n116
export const light_blue_active_DrawerFrame = n116
export const light_blue_active_Progress = n116
export const light_blue_active_TooltipArrow = n116
export const light_blue_active_SliderTrack = n116
const n117 = t([[20, 22],[21, 23],[22, 24],[23, 22],[24, 25],[25, 26],[26, 23],[27, 25]])

export const light_blue_Checkbox = n117
export const light_blue_Switch = n117
export const light_blue_TooltipContent = n117
export const light_blue_RadioGroupItem = n117
export const light_blue_Input = n117
export const light_blue_TextArea = n117
export const light_blue_alt1_Checkbox = n117
export const light_blue_alt1_Switch = n117
export const light_blue_alt1_TooltipContent = n117
export const light_blue_alt1_RadioGroupItem = n117
export const light_blue_alt1_Input = n117
export const light_blue_alt1_TextArea = n117
export const light_blue_alt2_Checkbox = n117
export const light_blue_alt2_Switch = n117
export const light_blue_alt2_TooltipContent = n117
export const light_blue_alt2_RadioGroupItem = n117
export const light_blue_alt2_Input = n117
export const light_blue_alt2_TextArea = n117
const n118 = t([[28, 21],[29, 22],[30, 23],[31, 21],[20, 31],[21, 30],[22, 31],[23, 30],[24, 29],[25, 28],[26, 27],[27, 26]])

export const light_blue_SwitchThumb = n118
export const light_blue_SliderThumb = n118
export const light_blue_Tooltip = n118
export const light_blue_ProgressIndicator = n118
export const light_blue_alt1_SwitchThumb = n118
export const light_blue_alt1_SliderThumb = n118
export const light_blue_alt1_Tooltip = n118
export const light_blue_alt1_ProgressIndicator = n118
export const light_blue_alt2_SwitchThumb = n118
export const light_blue_alt2_SliderThumb = n118
export const light_blue_alt2_Tooltip = n118
export const light_blue_alt2_ProgressIndicator = n118
const n119 = t([[20, 69],[21, 70],[22, 71],[23, 69],[24, 72],[25, 73],[26, 70],[27, 72]])

export const light_purple_ListItem = n119
export const light_purple_SelectTrigger = n119
export const light_purple_Card = n119
export const light_purple_DrawerFrame = n119
export const light_purple_Progress = n119
export const light_purple_TooltipArrow = n119
export const light_purple_SliderTrack = n119
export const light_purple_alt1_ListItem = n119
export const light_purple_alt1_SelectTrigger = n119
export const light_purple_alt1_Card = n119
export const light_purple_alt1_DrawerFrame = n119
export const light_purple_alt1_Progress = n119
export const light_purple_alt1_TooltipArrow = n119
export const light_purple_alt1_SliderTrack = n119
export const light_purple_alt2_ListItem = n119
export const light_purple_alt2_SelectTrigger = n119
export const light_purple_alt2_Card = n119
export const light_purple_alt2_DrawerFrame = n119
export const light_purple_alt2_Progress = n119
export const light_purple_alt2_TooltipArrow = n119
export const light_purple_alt2_SliderTrack = n119
export const light_purple_active_ListItem = n119
export const light_purple_active_DrawerFrame = n119
export const light_purple_active_Progress = n119
export const light_purple_active_TooltipArrow = n119
export const light_purple_active_SliderTrack = n119
const n120 = t([[20, 70],[21, 71],[22, 72],[23, 70],[24, 73],[25, 74],[26, 71],[27, 73]])

export const light_purple_Checkbox = n120
export const light_purple_Switch = n120
export const light_purple_TooltipContent = n120
export const light_purple_RadioGroupItem = n120
export const light_purple_Input = n120
export const light_purple_TextArea = n120
export const light_purple_alt1_Checkbox = n120
export const light_purple_alt1_Switch = n120
export const light_purple_alt1_TooltipContent = n120
export const light_purple_alt1_RadioGroupItem = n120
export const light_purple_alt1_Input = n120
export const light_purple_alt1_TextArea = n120
export const light_purple_alt2_Checkbox = n120
export const light_purple_alt2_Switch = n120
export const light_purple_alt2_TooltipContent = n120
export const light_purple_alt2_RadioGroupItem = n120
export const light_purple_alt2_Input = n120
export const light_purple_alt2_TextArea = n120
const n121 = t([[28, 69],[29, 70],[30, 71],[31, 69],[20, 79],[21, 78],[22, 79],[23, 78],[24, 77],[25, 76],[26, 75],[27, 74]])

export const light_purple_SwitchThumb = n121
export const light_purple_SliderThumb = n121
export const light_purple_Tooltip = n121
export const light_purple_ProgressIndicator = n121
export const light_purple_alt1_SwitchThumb = n121
export const light_purple_alt1_SliderThumb = n121
export const light_purple_alt1_Tooltip = n121
export const light_purple_alt1_ProgressIndicator = n121
export const light_purple_alt2_SwitchThumb = n121
export const light_purple_alt2_SliderThumb = n121
export const light_purple_alt2_Tooltip = n121
export const light_purple_alt2_ProgressIndicator = n121
const n122 = t([[20, 57],[21, 58],[22, 59],[23, 57],[24, 60],[25, 61],[26, 58],[27, 60]])

export const light_pink_ListItem = n122
export const light_pink_SelectTrigger = n122
export const light_pink_Card = n122
export const light_pink_DrawerFrame = n122
export const light_pink_Progress = n122
export const light_pink_TooltipArrow = n122
export const light_pink_SliderTrack = n122
export const light_pink_alt1_ListItem = n122
export const light_pink_alt1_SelectTrigger = n122
export const light_pink_alt1_Card = n122
export const light_pink_alt1_DrawerFrame = n122
export const light_pink_alt1_Progress = n122
export const light_pink_alt1_TooltipArrow = n122
export const light_pink_alt1_SliderTrack = n122
export const light_pink_alt2_ListItem = n122
export const light_pink_alt2_SelectTrigger = n122
export const light_pink_alt2_Card = n122
export const light_pink_alt2_DrawerFrame = n122
export const light_pink_alt2_Progress = n122
export const light_pink_alt2_TooltipArrow = n122
export const light_pink_alt2_SliderTrack = n122
export const light_pink_active_ListItem = n122
export const light_pink_active_DrawerFrame = n122
export const light_pink_active_Progress = n122
export const light_pink_active_TooltipArrow = n122
export const light_pink_active_SliderTrack = n122
const n123 = t([[20, 58],[21, 59],[22, 60],[23, 58],[24, 61],[25, 62],[26, 59],[27, 61]])

export const light_pink_Checkbox = n123
export const light_pink_Switch = n123
export const light_pink_TooltipContent = n123
export const light_pink_RadioGroupItem = n123
export const light_pink_Input = n123
export const light_pink_TextArea = n123
export const light_pink_alt1_Checkbox = n123
export const light_pink_alt1_Switch = n123
export const light_pink_alt1_TooltipContent = n123
export const light_pink_alt1_RadioGroupItem = n123
export const light_pink_alt1_Input = n123
export const light_pink_alt1_TextArea = n123
export const light_pink_alt2_Checkbox = n123
export const light_pink_alt2_Switch = n123
export const light_pink_alt2_TooltipContent = n123
export const light_pink_alt2_RadioGroupItem = n123
export const light_pink_alt2_Input = n123
export const light_pink_alt2_TextArea = n123
const n124 = t([[28, 57],[29, 58],[30, 59],[31, 57],[20, 67],[21, 66],[22, 67],[23, 66],[24, 65],[25, 64],[26, 63],[27, 62]])

export const light_pink_SwitchThumb = n124
export const light_pink_SliderThumb = n124
export const light_pink_Tooltip = n124
export const light_pink_ProgressIndicator = n124
export const light_pink_alt1_SwitchThumb = n124
export const light_pink_alt1_SliderThumb = n124
export const light_pink_alt1_Tooltip = n124
export const light_pink_alt1_ProgressIndicator = n124
export const light_pink_alt2_SwitchThumb = n124
export const light_pink_alt2_SliderThumb = n124
export const light_pink_alt2_Tooltip = n124
export const light_pink_alt2_ProgressIndicator = n124
const n125 = t([[20, 81],[21, 82],[22, 83],[23, 81],[24, 84],[25, 85],[26, 82],[27, 84]])

export const light_red_ListItem = n125
export const light_red_SelectTrigger = n125
export const light_red_Card = n125
export const light_red_DrawerFrame = n125
export const light_red_Progress = n125
export const light_red_TooltipArrow = n125
export const light_red_SliderTrack = n125
export const light_red_alt1_ListItem = n125
export const light_red_alt1_SelectTrigger = n125
export const light_red_alt1_Card = n125
export const light_red_alt1_DrawerFrame = n125
export const light_red_alt1_Progress = n125
export const light_red_alt1_TooltipArrow = n125
export const light_red_alt1_SliderTrack = n125
export const light_red_alt2_ListItem = n125
export const light_red_alt2_SelectTrigger = n125
export const light_red_alt2_Card = n125
export const light_red_alt2_DrawerFrame = n125
export const light_red_alt2_Progress = n125
export const light_red_alt2_TooltipArrow = n125
export const light_red_alt2_SliderTrack = n125
export const light_red_active_ListItem = n125
export const light_red_active_DrawerFrame = n125
export const light_red_active_Progress = n125
export const light_red_active_TooltipArrow = n125
export const light_red_active_SliderTrack = n125
const n126 = t([[20, 82],[21, 83],[22, 84],[23, 82],[24, 85],[25, 86],[26, 83],[27, 85]])

export const light_red_Checkbox = n126
export const light_red_Switch = n126
export const light_red_TooltipContent = n126
export const light_red_RadioGroupItem = n126
export const light_red_Input = n126
export const light_red_TextArea = n126
export const light_red_alt1_Checkbox = n126
export const light_red_alt1_Switch = n126
export const light_red_alt1_TooltipContent = n126
export const light_red_alt1_RadioGroupItem = n126
export const light_red_alt1_Input = n126
export const light_red_alt1_TextArea = n126
export const light_red_alt2_Checkbox = n126
export const light_red_alt2_Switch = n126
export const light_red_alt2_TooltipContent = n126
export const light_red_alt2_RadioGroupItem = n126
export const light_red_alt2_Input = n126
export const light_red_alt2_TextArea = n126
const n127 = t([[28, 81],[29, 82],[30, 83],[31, 81],[20, 91],[21, 90],[22, 91],[23, 90],[24, 89],[25, 88],[26, 87],[27, 86]])

export const light_red_SwitchThumb = n127
export const light_red_SliderThumb = n127
export const light_red_Tooltip = n127
export const light_red_ProgressIndicator = n127
export const light_red_alt1_SwitchThumb = n127
export const light_red_alt1_SliderThumb = n127
export const light_red_alt1_Tooltip = n127
export const light_red_alt1_ProgressIndicator = n127
export const light_red_alt2_SwitchThumb = n127
export const light_red_alt2_SliderThumb = n127
export const light_red_alt2_Tooltip = n127
export const light_red_alt2_ProgressIndicator = n127
const n128 = t([[20, 280],[21, 281],[22, 282],[23, 280],[24, 283],[25, 284],[26, 281],[27, 283]])

export const light_indigo_ListItem = n128
export const light_indigo_SelectTrigger = n128
export const light_indigo_Card = n128
export const light_indigo_DrawerFrame = n128
export const light_indigo_Progress = n128
export const light_indigo_TooltipArrow = n128
export const light_indigo_SliderTrack = n128
export const light_indigo_alt1_ListItem = n128
export const light_indigo_alt1_SelectTrigger = n128
export const light_indigo_alt1_Card = n128
export const light_indigo_alt1_DrawerFrame = n128
export const light_indigo_alt1_Progress = n128
export const light_indigo_alt1_TooltipArrow = n128
export const light_indigo_alt1_SliderTrack = n128
export const light_indigo_alt2_ListItem = n128
export const light_indigo_alt2_SelectTrigger = n128
export const light_indigo_alt2_Card = n128
export const light_indigo_alt2_DrawerFrame = n128
export const light_indigo_alt2_Progress = n128
export const light_indigo_alt2_TooltipArrow = n128
export const light_indigo_alt2_SliderTrack = n128
export const light_indigo_active_ListItem = n128
export const light_indigo_active_DrawerFrame = n128
export const light_indigo_active_Progress = n128
export const light_indigo_active_TooltipArrow = n128
export const light_indigo_active_SliderTrack = n128
const n129 = t([[20, 281],[21, 282],[22, 283],[23, 281],[24, 284],[25, 285],[26, 282],[27, 284]])

export const light_indigo_Checkbox = n129
export const light_indigo_Switch = n129
export const light_indigo_TooltipContent = n129
export const light_indigo_RadioGroupItem = n129
export const light_indigo_Input = n129
export const light_indigo_TextArea = n129
export const light_indigo_alt1_Checkbox = n129
export const light_indigo_alt1_Switch = n129
export const light_indigo_alt1_TooltipContent = n129
export const light_indigo_alt1_RadioGroupItem = n129
export const light_indigo_alt1_Input = n129
export const light_indigo_alt1_TextArea = n129
export const light_indigo_alt2_Checkbox = n129
export const light_indigo_alt2_Switch = n129
export const light_indigo_alt2_TooltipContent = n129
export const light_indigo_alt2_RadioGroupItem = n129
export const light_indigo_alt2_Input = n129
export const light_indigo_alt2_TextArea = n129
const n130 = t([[28, 280],[29, 281],[30, 282],[31, 280],[20, 290],[21, 289],[22, 290],[23, 289],[24, 288],[25, 287],[26, 286],[27, 285]])

export const light_indigo_SwitchThumb = n130
export const light_indigo_SliderThumb = n130
export const light_indigo_Tooltip = n130
export const light_indigo_ProgressIndicator = n130
export const light_indigo_alt1_SwitchThumb = n130
export const light_indigo_alt1_SliderThumb = n130
export const light_indigo_alt1_Tooltip = n130
export const light_indigo_alt1_ProgressIndicator = n130
export const light_indigo_alt2_SwitchThumb = n130
export const light_indigo_alt2_SliderThumb = n130
export const light_indigo_alt2_Tooltip = n130
export const light_indigo_alt2_ProgressIndicator = n130
const n131 = t([[20, 300],[21, 301],[22, 302],[23, 300],[24, 303],[25, 304],[26, 301],[27, 303]])

export const light_lime_ListItem = n131
export const light_lime_SelectTrigger = n131
export const light_lime_Card = n131
export const light_lime_DrawerFrame = n131
export const light_lime_Progress = n131
export const light_lime_TooltipArrow = n131
export const light_lime_SliderTrack = n131
export const light_lime_alt1_ListItem = n131
export const light_lime_alt1_SelectTrigger = n131
export const light_lime_alt1_Card = n131
export const light_lime_alt1_DrawerFrame = n131
export const light_lime_alt1_Progress = n131
export const light_lime_alt1_TooltipArrow = n131
export const light_lime_alt1_SliderTrack = n131
export const light_lime_alt2_ListItem = n131
export const light_lime_alt2_SelectTrigger = n131
export const light_lime_alt2_Card = n131
export const light_lime_alt2_DrawerFrame = n131
export const light_lime_alt2_Progress = n131
export const light_lime_alt2_TooltipArrow = n131
export const light_lime_alt2_SliderTrack = n131
export const light_lime_active_ListItem = n131
export const light_lime_active_DrawerFrame = n131
export const light_lime_active_Progress = n131
export const light_lime_active_TooltipArrow = n131
export const light_lime_active_SliderTrack = n131
const n132 = t([[20, 301],[21, 302],[22, 303],[23, 301],[24, 304],[25, 305],[26, 302],[27, 304]])

export const light_lime_Checkbox = n132
export const light_lime_Switch = n132
export const light_lime_TooltipContent = n132
export const light_lime_RadioGroupItem = n132
export const light_lime_Input = n132
export const light_lime_TextArea = n132
export const light_lime_alt1_Checkbox = n132
export const light_lime_alt1_Switch = n132
export const light_lime_alt1_TooltipContent = n132
export const light_lime_alt1_RadioGroupItem = n132
export const light_lime_alt1_Input = n132
export const light_lime_alt1_TextArea = n132
export const light_lime_alt2_Checkbox = n132
export const light_lime_alt2_Switch = n132
export const light_lime_alt2_TooltipContent = n132
export const light_lime_alt2_RadioGroupItem = n132
export const light_lime_alt2_Input = n132
export const light_lime_alt2_TextArea = n132
const n133 = t([[28, 300],[29, 301],[30, 302],[31, 300],[20, 310],[21, 309],[22, 310],[23, 309],[24, 308],[25, 307],[26, 306],[27, 305]])

export const light_lime_SwitchThumb = n133
export const light_lime_SliderThumb = n133
export const light_lime_Tooltip = n133
export const light_lime_ProgressIndicator = n133
export const light_lime_alt1_SwitchThumb = n133
export const light_lime_alt1_SliderThumb = n133
export const light_lime_alt1_Tooltip = n133
export const light_lime_alt1_ProgressIndicator = n133
export const light_lime_alt2_SwitchThumb = n133
export const light_lime_alt2_SliderThumb = n133
export const light_lime_alt2_Tooltip = n133
export const light_lime_alt2_ProgressIndicator = n133
const n134 = t([[20, 320],[21, 321],[22, 322],[23, 320],[24, 323],[25, 324],[26, 321],[27, 323]])

export const light_amber_ListItem = n134
export const light_amber_SelectTrigger = n134
export const light_amber_Card = n134
export const light_amber_DrawerFrame = n134
export const light_amber_Progress = n134
export const light_amber_TooltipArrow = n134
export const light_amber_SliderTrack = n134
export const light_amber_alt1_ListItem = n134
export const light_amber_alt1_SelectTrigger = n134
export const light_amber_alt1_Card = n134
export const light_amber_alt1_DrawerFrame = n134
export const light_amber_alt1_Progress = n134
export const light_amber_alt1_TooltipArrow = n134
export const light_amber_alt1_SliderTrack = n134
export const light_amber_alt2_ListItem = n134
export const light_amber_alt2_SelectTrigger = n134
export const light_amber_alt2_Card = n134
export const light_amber_alt2_DrawerFrame = n134
export const light_amber_alt2_Progress = n134
export const light_amber_alt2_TooltipArrow = n134
export const light_amber_alt2_SliderTrack = n134
export const light_amber_active_ListItem = n134
export const light_amber_active_DrawerFrame = n134
export const light_amber_active_Progress = n134
export const light_amber_active_TooltipArrow = n134
export const light_amber_active_SliderTrack = n134
const n135 = t([[20, 321],[21, 322],[22, 323],[23, 321],[24, 324],[25, 325],[26, 322],[27, 324]])

export const light_amber_Checkbox = n135
export const light_amber_Switch = n135
export const light_amber_TooltipContent = n135
export const light_amber_RadioGroupItem = n135
export const light_amber_Input = n135
export const light_amber_TextArea = n135
export const light_amber_alt1_Checkbox = n135
export const light_amber_alt1_Switch = n135
export const light_amber_alt1_TooltipContent = n135
export const light_amber_alt1_RadioGroupItem = n135
export const light_amber_alt1_Input = n135
export const light_amber_alt1_TextArea = n135
export const light_amber_alt2_Checkbox = n135
export const light_amber_alt2_Switch = n135
export const light_amber_alt2_TooltipContent = n135
export const light_amber_alt2_RadioGroupItem = n135
export const light_amber_alt2_Input = n135
export const light_amber_alt2_TextArea = n135
const n136 = t([[28, 320],[29, 321],[30, 322],[31, 320],[20, 330],[21, 329],[22, 330],[23, 329],[24, 328],[25, 327],[26, 326],[27, 325]])

export const light_amber_SwitchThumb = n136
export const light_amber_SliderThumb = n136
export const light_amber_Tooltip = n136
export const light_amber_ProgressIndicator = n136
export const light_amber_alt1_SwitchThumb = n136
export const light_amber_alt1_SliderThumb = n136
export const light_amber_alt1_Tooltip = n136
export const light_amber_alt1_ProgressIndicator = n136
export const light_amber_alt2_SwitchThumb = n136
export const light_amber_alt2_SliderThumb = n136
export const light_amber_alt2_Tooltip = n136
export const light_amber_alt2_ProgressIndicator = n136
const n137 = t([[20, 105],[21, 106],[22, 107],[23, 105],[24, 108],[25, 108],[26, 106],[27, 108]])

export const light_accent_ListItem = n137
export const light_accent_SelectTrigger = n137
export const light_accent_Card = n137
export const light_accent_DrawerFrame = n137
export const light_accent_Progress = n137
export const light_accent_TooltipArrow = n137
export const light_accent_SliderTrack = n137
export const light_accent_alt1_ListItem = n137
export const light_accent_alt1_SelectTrigger = n137
export const light_accent_alt1_Card = n137
export const light_accent_alt1_DrawerFrame = n137
export const light_accent_alt1_Progress = n137
export const light_accent_alt1_TooltipArrow = n137
export const light_accent_alt1_SliderTrack = n137
export const light_accent_alt2_ListItem = n137
export const light_accent_alt2_SelectTrigger = n137
export const light_accent_alt2_Card = n137
export const light_accent_alt2_DrawerFrame = n137
export const light_accent_alt2_Progress = n137
export const light_accent_alt2_TooltipArrow = n137
export const light_accent_alt2_SliderTrack = n137
export const light_accent_active_ListItem = n137
export const light_accent_active_DrawerFrame = n137
export const light_accent_active_Progress = n137
export const light_accent_active_TooltipArrow = n137
export const light_accent_active_SliderTrack = n137
const n138 = t([[20, 106],[21, 107],[22, 108],[23, 106],[24, 108],[25, 109],[26, 107],[27, 108]])

export const light_accent_Checkbox = n138
export const light_accent_Switch = n138
export const light_accent_TooltipContent = n138
export const light_accent_RadioGroupItem = n138
export const light_accent_Input = n138
export const light_accent_TextArea = n138
export const light_accent_alt1_Checkbox = n138
export const light_accent_alt1_Switch = n138
export const light_accent_alt1_TooltipContent = n138
export const light_accent_alt1_RadioGroupItem = n138
export const light_accent_alt1_Input = n138
export const light_accent_alt1_TextArea = n138
export const light_accent_alt2_Checkbox = n138
export const light_accent_alt2_Switch = n138
export const light_accent_alt2_TooltipContent = n138
export const light_accent_alt2_RadioGroupItem = n138
export const light_accent_alt2_Input = n138
export const light_accent_alt2_TextArea = n138
const n139 = t([[28, 105],[29, 106],[30, 107],[31, 105],[20, 4],[21, 111],[22, 4],[23, 111],[24, 110],[25, 110],[26, 109],[27, 109]])

export const light_accent_SwitchThumb = n139
export const light_accent_SliderThumb = n139
export const light_accent_Tooltip = n139
export const light_accent_ProgressIndicator = n139
export const light_accent_alt1_SwitchThumb = n139
export const light_accent_alt1_SliderThumb = n139
export const light_accent_alt1_Tooltip = n139
export const light_accent_alt1_ProgressIndicator = n139
export const light_accent_alt2_SwitchThumb = n139
export const light_accent_alt2_SliderThumb = n139
export const light_accent_alt2_Tooltip = n139
export const light_accent_alt2_ProgressIndicator = n139
const n140 = t([[20, 148],[21, 149],[22, 150],[23, 148],[24, 151],[25, 152],[26, 149],[27, 151]])

export const dark_orange_ListItem = n140
export const dark_orange_SelectTrigger = n140
export const dark_orange_Card = n140
export const dark_orange_DrawerFrame = n140
export const dark_orange_Progress = n140
export const dark_orange_TooltipArrow = n140
export const dark_orange_SliderTrack = n140
export const dark_orange_alt1_ListItem = n140
export const dark_orange_alt1_SelectTrigger = n140
export const dark_orange_alt1_Card = n140
export const dark_orange_alt1_DrawerFrame = n140
export const dark_orange_alt1_Progress = n140
export const dark_orange_alt1_TooltipArrow = n140
export const dark_orange_alt1_SliderTrack = n140
export const dark_orange_alt2_ListItem = n140
export const dark_orange_alt2_SelectTrigger = n140
export const dark_orange_alt2_Card = n140
export const dark_orange_alt2_DrawerFrame = n140
export const dark_orange_alt2_Progress = n140
export const dark_orange_alt2_TooltipArrow = n140
export const dark_orange_alt2_SliderTrack = n140
export const dark_orange_active_ListItem = n140
export const dark_orange_active_DrawerFrame = n140
export const dark_orange_active_Progress = n140
export const dark_orange_active_TooltipArrow = n140
export const dark_orange_active_SliderTrack = n140
const n141 = t([[20, 149],[21, 150],[22, 151],[23, 149],[24, 152],[25, 153],[26, 150],[27, 152]])

export const dark_orange_Checkbox = n141
export const dark_orange_Switch = n141
export const dark_orange_TooltipContent = n141
export const dark_orange_RadioGroupItem = n141
export const dark_orange_Input = n141
export const dark_orange_TextArea = n141
export const dark_orange_alt1_Checkbox = n141
export const dark_orange_alt1_Switch = n141
export const dark_orange_alt1_TooltipContent = n141
export const dark_orange_alt1_RadioGroupItem = n141
export const dark_orange_alt1_Input = n141
export const dark_orange_alt1_TextArea = n141
export const dark_orange_alt2_Checkbox = n141
export const dark_orange_alt2_Switch = n141
export const dark_orange_alt2_TooltipContent = n141
export const dark_orange_alt2_RadioGroupItem = n141
export const dark_orange_alt2_Input = n141
export const dark_orange_alt2_TextArea = n141
const n142 = t([[28, 148],[29, 149],[30, 150],[31, 148],[20, 157],[21, 156],[22, 157],[23, 156],[24, 155],[25, 52],[26, 154],[27, 153]])

export const dark_orange_SwitchThumb = n142
export const dark_orange_SliderThumb = n142
export const dark_orange_Tooltip = n142
export const dark_orange_ProgressIndicator = n142
export const dark_orange_alt1_SwitchThumb = n142
export const dark_orange_alt1_SliderThumb = n142
export const dark_orange_alt1_Tooltip = n142
export const dark_orange_alt1_ProgressIndicator = n142
export const dark_orange_alt2_SwitchThumb = n142
export const dark_orange_alt2_SliderThumb = n142
export const dark_orange_alt2_Tooltip = n142
export const dark_orange_alt2_ProgressIndicator = n142
const n143 = t([[20, 192],[21, 193],[22, 194],[23, 192],[24, 195],[25, 196],[26, 193],[27, 195]])

export const dark_yellow_ListItem = n143
export const dark_yellow_SelectTrigger = n143
export const dark_yellow_Card = n143
export const dark_yellow_DrawerFrame = n143
export const dark_yellow_Progress = n143
export const dark_yellow_TooltipArrow = n143
export const dark_yellow_SliderTrack = n143
export const dark_yellow_alt1_ListItem = n143
export const dark_yellow_alt1_SelectTrigger = n143
export const dark_yellow_alt1_Card = n143
export const dark_yellow_alt1_DrawerFrame = n143
export const dark_yellow_alt1_Progress = n143
export const dark_yellow_alt1_TooltipArrow = n143
export const dark_yellow_alt1_SliderTrack = n143
export const dark_yellow_alt2_ListItem = n143
export const dark_yellow_alt2_SelectTrigger = n143
export const dark_yellow_alt2_Card = n143
export const dark_yellow_alt2_DrawerFrame = n143
export const dark_yellow_alt2_Progress = n143
export const dark_yellow_alt2_TooltipArrow = n143
export const dark_yellow_alt2_SliderTrack = n143
export const dark_yellow_active_ListItem = n143
export const dark_yellow_active_DrawerFrame = n143
export const dark_yellow_active_Progress = n143
export const dark_yellow_active_TooltipArrow = n143
export const dark_yellow_active_SliderTrack = n143
const n144 = t([[20, 193],[21, 194],[22, 195],[23, 193],[24, 196],[25, 197],[26, 194],[27, 196]])

export const dark_yellow_Checkbox = n144
export const dark_yellow_Switch = n144
export const dark_yellow_TooltipContent = n144
export const dark_yellow_RadioGroupItem = n144
export const dark_yellow_Input = n144
export const dark_yellow_TextArea = n144
export const dark_yellow_alt1_Checkbox = n144
export const dark_yellow_alt1_Switch = n144
export const dark_yellow_alt1_TooltipContent = n144
export const dark_yellow_alt1_RadioGroupItem = n144
export const dark_yellow_alt1_Input = n144
export const dark_yellow_alt1_TextArea = n144
export const dark_yellow_alt2_Checkbox = n144
export const dark_yellow_alt2_Switch = n144
export const dark_yellow_alt2_TooltipContent = n144
export const dark_yellow_alt2_RadioGroupItem = n144
export const dark_yellow_alt2_Input = n144
export const dark_yellow_alt2_TextArea = n144
const n145 = t([[28, 192],[29, 193],[30, 194],[31, 192],[20, 201],[21, 200],[22, 201],[23, 200],[24, 199],[25, 100],[26, 198],[27, 197]])

export const dark_yellow_SwitchThumb = n145
export const dark_yellow_SliderThumb = n145
export const dark_yellow_Tooltip = n145
export const dark_yellow_ProgressIndicator = n145
export const dark_yellow_alt1_SwitchThumb = n145
export const dark_yellow_alt1_SliderThumb = n145
export const dark_yellow_alt1_Tooltip = n145
export const dark_yellow_alt1_ProgressIndicator = n145
export const dark_yellow_alt2_SwitchThumb = n145
export const dark_yellow_alt2_SliderThumb = n145
export const dark_yellow_alt2_Tooltip = n145
export const dark_yellow_alt2_ProgressIndicator = n145
const n146 = t([[20, 137],[21, 138],[22, 139],[23, 137],[24, 140],[25, 141],[26, 138],[27, 140]])

export const dark_green_ListItem = n146
export const dark_green_SelectTrigger = n146
export const dark_green_Card = n146
export const dark_green_DrawerFrame = n146
export const dark_green_Progress = n146
export const dark_green_TooltipArrow = n146
export const dark_green_SliderTrack = n146
export const dark_green_alt1_ListItem = n146
export const dark_green_alt1_SelectTrigger = n146
export const dark_green_alt1_Card = n146
export const dark_green_alt1_DrawerFrame = n146
export const dark_green_alt1_Progress = n146
export const dark_green_alt1_TooltipArrow = n146
export const dark_green_alt1_SliderTrack = n146
export const dark_green_alt2_ListItem = n146
export const dark_green_alt2_SelectTrigger = n146
export const dark_green_alt2_Card = n146
export const dark_green_alt2_DrawerFrame = n146
export const dark_green_alt2_Progress = n146
export const dark_green_alt2_TooltipArrow = n146
export const dark_green_alt2_SliderTrack = n146
export const dark_green_active_ListItem = n146
export const dark_green_active_DrawerFrame = n146
export const dark_green_active_Progress = n146
export const dark_green_active_TooltipArrow = n146
export const dark_green_active_SliderTrack = n146
const n147 = t([[20, 138],[21, 139],[22, 140],[23, 138],[24, 141],[25, 142],[26, 139],[27, 141]])

export const dark_green_Checkbox = n147
export const dark_green_Switch = n147
export const dark_green_TooltipContent = n147
export const dark_green_RadioGroupItem = n147
export const dark_green_Input = n147
export const dark_green_TextArea = n147
export const dark_green_alt1_Checkbox = n147
export const dark_green_alt1_Switch = n147
export const dark_green_alt1_TooltipContent = n147
export const dark_green_alt1_RadioGroupItem = n147
export const dark_green_alt1_Input = n147
export const dark_green_alt1_TextArea = n147
export const dark_green_alt2_Checkbox = n147
export const dark_green_alt2_Switch = n147
export const dark_green_alt2_TooltipContent = n147
export const dark_green_alt2_RadioGroupItem = n147
export const dark_green_alt2_Input = n147
export const dark_green_alt2_TextArea = n147
const n148 = t([[28, 137],[29, 138],[30, 139],[31, 137],[20, 146],[21, 145],[22, 146],[23, 145],[24, 144],[25, 40],[26, 143],[27, 142]])

export const dark_green_SwitchThumb = n148
export const dark_green_SliderThumb = n148
export const dark_green_Tooltip = n148
export const dark_green_ProgressIndicator = n148
export const dark_green_alt1_SwitchThumb = n148
export const dark_green_alt1_SliderThumb = n148
export const dark_green_alt1_Tooltip = n148
export const dark_green_alt1_ProgressIndicator = n148
export const dark_green_alt2_SwitchThumb = n148
export const dark_green_alt2_SliderThumb = n148
export const dark_green_alt2_Tooltip = n148
export const dark_green_alt2_ProgressIndicator = n148
const n149 = t([[20, 126],[21, 127],[22, 128],[23, 126],[24, 129],[25, 130],[26, 127],[27, 129]])

export const dark_blue_ListItem = n149
export const dark_blue_SelectTrigger = n149
export const dark_blue_Card = n149
export const dark_blue_DrawerFrame = n149
export const dark_blue_Progress = n149
export const dark_blue_TooltipArrow = n149
export const dark_blue_SliderTrack = n149
export const dark_blue_alt1_ListItem = n149
export const dark_blue_alt1_SelectTrigger = n149
export const dark_blue_alt1_Card = n149
export const dark_blue_alt1_DrawerFrame = n149
export const dark_blue_alt1_Progress = n149
export const dark_blue_alt1_TooltipArrow = n149
export const dark_blue_alt1_SliderTrack = n149
export const dark_blue_alt2_ListItem = n149
export const dark_blue_alt2_SelectTrigger = n149
export const dark_blue_alt2_Card = n149
export const dark_blue_alt2_DrawerFrame = n149
export const dark_blue_alt2_Progress = n149
export const dark_blue_alt2_TooltipArrow = n149
export const dark_blue_alt2_SliderTrack = n149
export const dark_blue_active_ListItem = n149
export const dark_blue_active_DrawerFrame = n149
export const dark_blue_active_Progress = n149
export const dark_blue_active_TooltipArrow = n149
export const dark_blue_active_SliderTrack = n149
const n150 = t([[20, 127],[21, 128],[22, 129],[23, 127],[24, 130],[25, 131],[26, 128],[27, 130]])

export const dark_blue_Checkbox = n150
export const dark_blue_Switch = n150
export const dark_blue_TooltipContent = n150
export const dark_blue_RadioGroupItem = n150
export const dark_blue_Input = n150
export const dark_blue_TextArea = n150
export const dark_blue_alt1_Checkbox = n150
export const dark_blue_alt1_Switch = n150
export const dark_blue_alt1_TooltipContent = n150
export const dark_blue_alt1_RadioGroupItem = n150
export const dark_blue_alt1_Input = n150
export const dark_blue_alt1_TextArea = n150
export const dark_blue_alt2_Checkbox = n150
export const dark_blue_alt2_Switch = n150
export const dark_blue_alt2_TooltipContent = n150
export const dark_blue_alt2_RadioGroupItem = n150
export const dark_blue_alt2_Input = n150
export const dark_blue_alt2_TextArea = n150
const n151 = t([[28, 126],[29, 127],[30, 128],[31, 126],[20, 135],[21, 134],[22, 135],[23, 134],[24, 133],[25, 28],[26, 132],[27, 131]])

export const dark_blue_SwitchThumb = n151
export const dark_blue_SliderThumb = n151
export const dark_blue_Tooltip = n151
export const dark_blue_ProgressIndicator = n151
export const dark_blue_alt1_SwitchThumb = n151
export const dark_blue_alt1_SliderThumb = n151
export const dark_blue_alt1_Tooltip = n151
export const dark_blue_alt1_ProgressIndicator = n151
export const dark_blue_alt2_SwitchThumb = n151
export const dark_blue_alt2_SliderThumb = n151
export const dark_blue_alt2_Tooltip = n151
export const dark_blue_alt2_ProgressIndicator = n151
const n152 = t([[20, 170],[21, 171],[22, 172],[23, 170],[24, 173],[25, 174],[26, 171],[27, 173]])

export const dark_purple_ListItem = n152
export const dark_purple_SelectTrigger = n152
export const dark_purple_Card = n152
export const dark_purple_DrawerFrame = n152
export const dark_purple_Progress = n152
export const dark_purple_TooltipArrow = n152
export const dark_purple_SliderTrack = n152
export const dark_purple_alt1_ListItem = n152
export const dark_purple_alt1_SelectTrigger = n152
export const dark_purple_alt1_Card = n152
export const dark_purple_alt1_DrawerFrame = n152
export const dark_purple_alt1_Progress = n152
export const dark_purple_alt1_TooltipArrow = n152
export const dark_purple_alt1_SliderTrack = n152
export const dark_purple_alt2_ListItem = n152
export const dark_purple_alt2_SelectTrigger = n152
export const dark_purple_alt2_Card = n152
export const dark_purple_alt2_DrawerFrame = n152
export const dark_purple_alt2_Progress = n152
export const dark_purple_alt2_TooltipArrow = n152
export const dark_purple_alt2_SliderTrack = n152
export const dark_purple_active_ListItem = n152
export const dark_purple_active_DrawerFrame = n152
export const dark_purple_active_Progress = n152
export const dark_purple_active_TooltipArrow = n152
export const dark_purple_active_SliderTrack = n152
const n153 = t([[20, 171],[21, 172],[22, 173],[23, 171],[24, 174],[25, 175],[26, 172],[27, 174]])

export const dark_purple_Checkbox = n153
export const dark_purple_Switch = n153
export const dark_purple_TooltipContent = n153
export const dark_purple_RadioGroupItem = n153
export const dark_purple_Input = n153
export const dark_purple_TextArea = n153
export const dark_purple_alt1_Checkbox = n153
export const dark_purple_alt1_Switch = n153
export const dark_purple_alt1_TooltipContent = n153
export const dark_purple_alt1_RadioGroupItem = n153
export const dark_purple_alt1_Input = n153
export const dark_purple_alt1_TextArea = n153
export const dark_purple_alt2_Checkbox = n153
export const dark_purple_alt2_Switch = n153
export const dark_purple_alt2_TooltipContent = n153
export const dark_purple_alt2_RadioGroupItem = n153
export const dark_purple_alt2_Input = n153
export const dark_purple_alt2_TextArea = n153
const n154 = t([[28, 170],[29, 171],[30, 172],[31, 170],[20, 179],[21, 178],[22, 179],[23, 178],[24, 177],[25, 76],[26, 176],[27, 175]])

export const dark_purple_SwitchThumb = n154
export const dark_purple_SliderThumb = n154
export const dark_purple_Tooltip = n154
export const dark_purple_ProgressIndicator = n154
export const dark_purple_alt1_SwitchThumb = n154
export const dark_purple_alt1_SliderThumb = n154
export const dark_purple_alt1_Tooltip = n154
export const dark_purple_alt1_ProgressIndicator = n154
export const dark_purple_alt2_SwitchThumb = n154
export const dark_purple_alt2_SliderThumb = n154
export const dark_purple_alt2_Tooltip = n154
export const dark_purple_alt2_ProgressIndicator = n154
const n155 = t([[20, 159],[21, 160],[22, 161],[23, 159],[24, 162],[25, 163],[26, 160],[27, 162]])

export const dark_pink_ListItem = n155
export const dark_pink_SelectTrigger = n155
export const dark_pink_Card = n155
export const dark_pink_DrawerFrame = n155
export const dark_pink_Progress = n155
export const dark_pink_TooltipArrow = n155
export const dark_pink_SliderTrack = n155
export const dark_pink_alt1_ListItem = n155
export const dark_pink_alt1_SelectTrigger = n155
export const dark_pink_alt1_Card = n155
export const dark_pink_alt1_DrawerFrame = n155
export const dark_pink_alt1_Progress = n155
export const dark_pink_alt1_TooltipArrow = n155
export const dark_pink_alt1_SliderTrack = n155
export const dark_pink_alt2_ListItem = n155
export const dark_pink_alt2_SelectTrigger = n155
export const dark_pink_alt2_Card = n155
export const dark_pink_alt2_DrawerFrame = n155
export const dark_pink_alt2_Progress = n155
export const dark_pink_alt2_TooltipArrow = n155
export const dark_pink_alt2_SliderTrack = n155
export const dark_pink_active_ListItem = n155
export const dark_pink_active_DrawerFrame = n155
export const dark_pink_active_Progress = n155
export const dark_pink_active_TooltipArrow = n155
export const dark_pink_active_SliderTrack = n155
const n156 = t([[20, 160],[21, 161],[22, 162],[23, 160],[24, 163],[25, 164],[26, 161],[27, 163]])

export const dark_pink_Checkbox = n156
export const dark_pink_Switch = n156
export const dark_pink_TooltipContent = n156
export const dark_pink_RadioGroupItem = n156
export const dark_pink_Input = n156
export const dark_pink_TextArea = n156
export const dark_pink_alt1_Checkbox = n156
export const dark_pink_alt1_Switch = n156
export const dark_pink_alt1_TooltipContent = n156
export const dark_pink_alt1_RadioGroupItem = n156
export const dark_pink_alt1_Input = n156
export const dark_pink_alt1_TextArea = n156
export const dark_pink_alt2_Checkbox = n156
export const dark_pink_alt2_Switch = n156
export const dark_pink_alt2_TooltipContent = n156
export const dark_pink_alt2_RadioGroupItem = n156
export const dark_pink_alt2_Input = n156
export const dark_pink_alt2_TextArea = n156
const n157 = t([[28, 159],[29, 160],[30, 161],[31, 159],[20, 168],[21, 167],[22, 168],[23, 167],[24, 166],[25, 64],[26, 165],[27, 164]])

export const dark_pink_SwitchThumb = n157
export const dark_pink_SliderThumb = n157
export const dark_pink_Tooltip = n157
export const dark_pink_ProgressIndicator = n157
export const dark_pink_alt1_SwitchThumb = n157
export const dark_pink_alt1_SliderThumb = n157
export const dark_pink_alt1_Tooltip = n157
export const dark_pink_alt1_ProgressIndicator = n157
export const dark_pink_alt2_SwitchThumb = n157
export const dark_pink_alt2_SliderThumb = n157
export const dark_pink_alt2_Tooltip = n157
export const dark_pink_alt2_ProgressIndicator = n157
const n158 = t([[20, 181],[21, 182],[22, 183],[23, 181],[24, 184],[25, 185],[26, 182],[27, 184]])

export const dark_red_ListItem = n158
export const dark_red_SelectTrigger = n158
export const dark_red_Card = n158
export const dark_red_DrawerFrame = n158
export const dark_red_Progress = n158
export const dark_red_TooltipArrow = n158
export const dark_red_SliderTrack = n158
export const dark_red_alt1_ListItem = n158
export const dark_red_alt1_SelectTrigger = n158
export const dark_red_alt1_Card = n158
export const dark_red_alt1_DrawerFrame = n158
export const dark_red_alt1_Progress = n158
export const dark_red_alt1_TooltipArrow = n158
export const dark_red_alt1_SliderTrack = n158
export const dark_red_alt2_ListItem = n158
export const dark_red_alt2_SelectTrigger = n158
export const dark_red_alt2_Card = n158
export const dark_red_alt2_DrawerFrame = n158
export const dark_red_alt2_Progress = n158
export const dark_red_alt2_TooltipArrow = n158
export const dark_red_alt2_SliderTrack = n158
export const dark_red_active_ListItem = n158
export const dark_red_active_DrawerFrame = n158
export const dark_red_active_Progress = n158
export const dark_red_active_TooltipArrow = n158
export const dark_red_active_SliderTrack = n158
const n159 = t([[20, 182],[21, 183],[22, 184],[23, 182],[24, 185],[25, 186],[26, 183],[27, 185]])

export const dark_red_Checkbox = n159
export const dark_red_Switch = n159
export const dark_red_TooltipContent = n159
export const dark_red_RadioGroupItem = n159
export const dark_red_Input = n159
export const dark_red_TextArea = n159
export const dark_red_alt1_Checkbox = n159
export const dark_red_alt1_Switch = n159
export const dark_red_alt1_TooltipContent = n159
export const dark_red_alt1_RadioGroupItem = n159
export const dark_red_alt1_Input = n159
export const dark_red_alt1_TextArea = n159
export const dark_red_alt2_Checkbox = n159
export const dark_red_alt2_Switch = n159
export const dark_red_alt2_TooltipContent = n159
export const dark_red_alt2_RadioGroupItem = n159
export const dark_red_alt2_Input = n159
export const dark_red_alt2_TextArea = n159
const n160 = t([[28, 181],[29, 182],[30, 183],[31, 181],[20, 190],[21, 189],[22, 190],[23, 189],[24, 188],[25, 88],[26, 187],[27, 186]])

export const dark_red_SwitchThumb = n160
export const dark_red_SliderThumb = n160
export const dark_red_Tooltip = n160
export const dark_red_ProgressIndicator = n160
export const dark_red_alt1_SwitchThumb = n160
export const dark_red_alt1_SliderThumb = n160
export const dark_red_alt1_Tooltip = n160
export const dark_red_alt1_ProgressIndicator = n160
export const dark_red_alt2_SwitchThumb = n160
export const dark_red_alt2_SliderThumb = n160
export const dark_red_alt2_Tooltip = n160
export const dark_red_alt2_ProgressIndicator = n160
const n161 = t([[20, 376],[21, 377],[22, 378],[23, 376],[24, 379],[25, 380],[26, 377],[27, 379]])

export const dark_indigo_ListItem = n161
export const dark_indigo_SelectTrigger = n161
export const dark_indigo_Card = n161
export const dark_indigo_DrawerFrame = n161
export const dark_indigo_Progress = n161
export const dark_indigo_TooltipArrow = n161
export const dark_indigo_SliderTrack = n161
export const dark_indigo_alt1_ListItem = n161
export const dark_indigo_alt1_SelectTrigger = n161
export const dark_indigo_alt1_Card = n161
export const dark_indigo_alt1_DrawerFrame = n161
export const dark_indigo_alt1_Progress = n161
export const dark_indigo_alt1_TooltipArrow = n161
export const dark_indigo_alt1_SliderTrack = n161
export const dark_indigo_alt2_ListItem = n161
export const dark_indigo_alt2_SelectTrigger = n161
export const dark_indigo_alt2_Card = n161
export const dark_indigo_alt2_DrawerFrame = n161
export const dark_indigo_alt2_Progress = n161
export const dark_indigo_alt2_TooltipArrow = n161
export const dark_indigo_alt2_SliderTrack = n161
export const dark_indigo_active_ListItem = n161
export const dark_indigo_active_DrawerFrame = n161
export const dark_indigo_active_Progress = n161
export const dark_indigo_active_TooltipArrow = n161
export const dark_indigo_active_SliderTrack = n161
const n162 = t([[20, 377],[21, 378],[22, 379],[23, 377],[24, 380],[25, 381],[26, 378],[27, 380]])

export const dark_indigo_Checkbox = n162
export const dark_indigo_Switch = n162
export const dark_indigo_TooltipContent = n162
export const dark_indigo_RadioGroupItem = n162
export const dark_indigo_Input = n162
export const dark_indigo_TextArea = n162
export const dark_indigo_alt1_Checkbox = n162
export const dark_indigo_alt1_Switch = n162
export const dark_indigo_alt1_TooltipContent = n162
export const dark_indigo_alt1_RadioGroupItem = n162
export const dark_indigo_alt1_Input = n162
export const dark_indigo_alt1_TextArea = n162
export const dark_indigo_alt2_Checkbox = n162
export const dark_indigo_alt2_Switch = n162
export const dark_indigo_alt2_TooltipContent = n162
export const dark_indigo_alt2_RadioGroupItem = n162
export const dark_indigo_alt2_Input = n162
export const dark_indigo_alt2_TextArea = n162
const n163 = t([[28, 376],[29, 377],[30, 378],[31, 376],[20, 385],[21, 384],[22, 385],[23, 384],[24, 383],[25, 287],[26, 382],[27, 381]])

export const dark_indigo_SwitchThumb = n163
export const dark_indigo_SliderThumb = n163
export const dark_indigo_Tooltip = n163
export const dark_indigo_ProgressIndicator = n163
export const dark_indigo_alt1_SwitchThumb = n163
export const dark_indigo_alt1_SliderThumb = n163
export const dark_indigo_alt1_Tooltip = n163
export const dark_indigo_alt1_ProgressIndicator = n163
export const dark_indigo_alt2_SwitchThumb = n163
export const dark_indigo_alt2_SliderThumb = n163
export const dark_indigo_alt2_Tooltip = n163
export const dark_indigo_alt2_ProgressIndicator = n163
const n164 = t([[20, 391],[21, 392],[22, 393],[23, 391],[24, 394],[25, 395],[26, 392],[27, 394]])

export const dark_lime_ListItem = n164
export const dark_lime_SelectTrigger = n164
export const dark_lime_Card = n164
export const dark_lime_DrawerFrame = n164
export const dark_lime_Progress = n164
export const dark_lime_TooltipArrow = n164
export const dark_lime_SliderTrack = n164
export const dark_lime_alt1_ListItem = n164
export const dark_lime_alt1_SelectTrigger = n164
export const dark_lime_alt1_Card = n164
export const dark_lime_alt1_DrawerFrame = n164
export const dark_lime_alt1_Progress = n164
export const dark_lime_alt1_TooltipArrow = n164
export const dark_lime_alt1_SliderTrack = n164
export const dark_lime_alt2_ListItem = n164
export const dark_lime_alt2_SelectTrigger = n164
export const dark_lime_alt2_Card = n164
export const dark_lime_alt2_DrawerFrame = n164
export const dark_lime_alt2_Progress = n164
export const dark_lime_alt2_TooltipArrow = n164
export const dark_lime_alt2_SliderTrack = n164
export const dark_lime_active_ListItem = n164
export const dark_lime_active_DrawerFrame = n164
export const dark_lime_active_Progress = n164
export const dark_lime_active_TooltipArrow = n164
export const dark_lime_active_SliderTrack = n164
const n165 = t([[20, 392],[21, 393],[22, 394],[23, 392],[24, 395],[25, 396],[26, 393],[27, 395]])

export const dark_lime_Checkbox = n165
export const dark_lime_Switch = n165
export const dark_lime_TooltipContent = n165
export const dark_lime_RadioGroupItem = n165
export const dark_lime_Input = n165
export const dark_lime_TextArea = n165
export const dark_lime_alt1_Checkbox = n165
export const dark_lime_alt1_Switch = n165
export const dark_lime_alt1_TooltipContent = n165
export const dark_lime_alt1_RadioGroupItem = n165
export const dark_lime_alt1_Input = n165
export const dark_lime_alt1_TextArea = n165
export const dark_lime_alt2_Checkbox = n165
export const dark_lime_alt2_Switch = n165
export const dark_lime_alt2_TooltipContent = n165
export const dark_lime_alt2_RadioGroupItem = n165
export const dark_lime_alt2_Input = n165
export const dark_lime_alt2_TextArea = n165
const n166 = t([[28, 391],[29, 392],[30, 393],[31, 391],[20, 400],[21, 399],[22, 400],[23, 399],[24, 398],[25, 307],[26, 397],[27, 396]])

export const dark_lime_SwitchThumb = n166
export const dark_lime_SliderThumb = n166
export const dark_lime_Tooltip = n166
export const dark_lime_ProgressIndicator = n166
export const dark_lime_alt1_SwitchThumb = n166
export const dark_lime_alt1_SliderThumb = n166
export const dark_lime_alt1_Tooltip = n166
export const dark_lime_alt1_ProgressIndicator = n166
export const dark_lime_alt2_SwitchThumb = n166
export const dark_lime_alt2_SliderThumb = n166
export const dark_lime_alt2_Tooltip = n166
export const dark_lime_alt2_ProgressIndicator = n166
const n167 = t([[20, 406],[21, 407],[22, 408],[23, 406],[24, 409],[25, 410],[26, 407],[27, 409]])

export const dark_amber_ListItem = n167
export const dark_amber_SelectTrigger = n167
export const dark_amber_Card = n167
export const dark_amber_DrawerFrame = n167
export const dark_amber_Progress = n167
export const dark_amber_TooltipArrow = n167
export const dark_amber_SliderTrack = n167
export const dark_amber_alt1_ListItem = n167
export const dark_amber_alt1_SelectTrigger = n167
export const dark_amber_alt1_Card = n167
export const dark_amber_alt1_DrawerFrame = n167
export const dark_amber_alt1_Progress = n167
export const dark_amber_alt1_TooltipArrow = n167
export const dark_amber_alt1_SliderTrack = n167
export const dark_amber_alt2_ListItem = n167
export const dark_amber_alt2_SelectTrigger = n167
export const dark_amber_alt2_Card = n167
export const dark_amber_alt2_DrawerFrame = n167
export const dark_amber_alt2_Progress = n167
export const dark_amber_alt2_TooltipArrow = n167
export const dark_amber_alt2_SliderTrack = n167
export const dark_amber_active_ListItem = n167
export const dark_amber_active_DrawerFrame = n167
export const dark_amber_active_Progress = n167
export const dark_amber_active_TooltipArrow = n167
export const dark_amber_active_SliderTrack = n167
const n168 = t([[20, 407],[21, 408],[22, 409],[23, 407],[24, 410],[25, 411],[26, 408],[27, 410]])

export const dark_amber_Checkbox = n168
export const dark_amber_Switch = n168
export const dark_amber_TooltipContent = n168
export const dark_amber_RadioGroupItem = n168
export const dark_amber_Input = n168
export const dark_amber_TextArea = n168
export const dark_amber_alt1_Checkbox = n168
export const dark_amber_alt1_Switch = n168
export const dark_amber_alt1_TooltipContent = n168
export const dark_amber_alt1_RadioGroupItem = n168
export const dark_amber_alt1_Input = n168
export const dark_amber_alt1_TextArea = n168
export const dark_amber_alt2_Checkbox = n168
export const dark_amber_alt2_Switch = n168
export const dark_amber_alt2_TooltipContent = n168
export const dark_amber_alt2_RadioGroupItem = n168
export const dark_amber_alt2_Input = n168
export const dark_amber_alt2_TextArea = n168
const n169 = t([[28, 406],[29, 407],[30, 408],[31, 406],[20, 415],[21, 414],[22, 415],[23, 414],[24, 413],[25, 327],[26, 412],[27, 411]])

export const dark_amber_SwitchThumb = n169
export const dark_amber_SliderThumb = n169
export const dark_amber_Tooltip = n169
export const dark_amber_ProgressIndicator = n169
export const dark_amber_alt1_SwitchThumb = n169
export const dark_amber_alt1_SliderThumb = n169
export const dark_amber_alt1_Tooltip = n169
export const dark_amber_alt1_ProgressIndicator = n169
export const dark_amber_alt2_SwitchThumb = n169
export const dark_amber_alt2_SliderThumb = n169
export const dark_amber_alt2_Tooltip = n169
export const dark_amber_alt2_ProgressIndicator = n169
const n170 = t([[20, 203],[21, 204],[22, 205],[23, 203],[24, 206],[25, 207],[26, 204],[27, 206]])

export const dark_accent_ListItem = n170
export const dark_accent_SelectTrigger = n170
export const dark_accent_Card = n170
export const dark_accent_DrawerFrame = n170
export const dark_accent_Progress = n170
export const dark_accent_TooltipArrow = n170
export const dark_accent_SliderTrack = n170
export const dark_accent_alt1_ListItem = n170
export const dark_accent_alt1_SelectTrigger = n170
export const dark_accent_alt1_Card = n170
export const dark_accent_alt1_DrawerFrame = n170
export const dark_accent_alt1_Progress = n170
export const dark_accent_alt1_TooltipArrow = n170
export const dark_accent_alt1_SliderTrack = n170
export const dark_accent_alt2_ListItem = n170
export const dark_accent_alt2_SelectTrigger = n170
export const dark_accent_alt2_Card = n170
export const dark_accent_alt2_DrawerFrame = n170
export const dark_accent_alt2_Progress = n170
export const dark_accent_alt2_TooltipArrow = n170
export const dark_accent_alt2_SliderTrack = n170
export const dark_accent_active_ListItem = n170
export const dark_accent_active_DrawerFrame = n170
export const dark_accent_active_Progress = n170
export const dark_accent_active_TooltipArrow = n170
export const dark_accent_active_SliderTrack = n170
const n171 = t([[20, 204],[21, 205],[22, 206],[23, 204],[24, 207],[25, 208],[26, 205],[27, 207]])

export const dark_accent_Checkbox = n171
export const dark_accent_Switch = n171
export const dark_accent_TooltipContent = n171
export const dark_accent_RadioGroupItem = n171
export const dark_accent_Input = n171
export const dark_accent_TextArea = n171
export const dark_accent_alt1_Checkbox = n171
export const dark_accent_alt1_Switch = n171
export const dark_accent_alt1_TooltipContent = n171
export const dark_accent_alt1_RadioGroupItem = n171
export const dark_accent_alt1_Input = n171
export const dark_accent_alt1_TextArea = n171
export const dark_accent_alt2_Checkbox = n171
export const dark_accent_alt2_Switch = n171
export const dark_accent_alt2_TooltipContent = n171
export const dark_accent_alt2_RadioGroupItem = n171
export const dark_accent_alt2_Input = n171
export const dark_accent_alt2_TextArea = n171
const n172 = t([[28, 203],[29, 204],[30, 205],[31, 203],[20, 4],[21, 212],[22, 4],[23, 212],[24, 211],[25, 210],[26, 209],[27, 208]])

export const dark_accent_SwitchThumb = n172
export const dark_accent_SliderThumb = n172
export const dark_accent_Tooltip = n172
export const dark_accent_ProgressIndicator = n172
export const dark_accent_alt1_SwitchThumb = n172
export const dark_accent_alt1_SliderThumb = n172
export const dark_accent_alt1_Tooltip = n172
export const dark_accent_alt1_ProgressIndicator = n172
export const dark_accent_alt2_SwitchThumb = n172
export const dark_accent_alt2_SliderThumb = n172
export const dark_accent_alt2_Tooltip = n172
export const dark_accent_alt2_ProgressIndicator = n172
const n173 = t([[20, 9],[21, 9],[22, 11],[23, 9],[24, 12],[25, 12],[26, 10],[27, 12]])

export const light_active_SelectTrigger = n173
export const light_active_Card = n173
export const light_active_Button = n173
export const light_active_Checkbox = n173
export const light_active_Switch = n173
export const light_active_TooltipContent = n173
export const light_active_RadioGroupItem = n173
export const light_active_Input = n173
export const light_active_TextArea = n173
export const light_gray_active_SelectTrigger = n173
export const light_gray_active_Card = n173
export const light_gray_active_Button = n173
export const light_gray_active_Checkbox = n173
export const light_gray_active_Switch = n173
export const light_gray_active_TooltipContent = n173
export const light_gray_active_RadioGroupItem = n173
export const light_gray_active_Input = n173
export const light_gray_active_TextArea = n173
const n174 = t([[28, 5],[29, 6],[30, 7],[31, 5],[20, 13],[21, 12],[22, 13],[23, 12],[24, 11],[25, 10],[26, 9],[27, 8]])

export const light_active_SwitchThumb = n174
export const light_active_SliderThumb = n174
export const light_active_Tooltip = n174
export const light_active_ProgressIndicator = n174
export const light_gray_active_SwitchThumb = n174
export const light_gray_active_SliderThumb = n174
export const light_gray_active_Tooltip = n174
export const light_gray_active_ProgressIndicator = n174
const n175 = t([[20, 119],[21, 119],[22, 121],[23, 119],[24, 122],[25, 122],[26, 120],[27, 122]])

export const dark_active_SelectTrigger = n175
export const dark_active_Card = n175
export const dark_active_Button = n175
export const dark_active_Checkbox = n175
export const dark_active_Switch = n175
export const dark_active_TooltipContent = n175
export const dark_active_RadioGroupItem = n175
export const dark_active_Input = n175
export const dark_active_TextArea = n175
export const dark_gray_active_SelectTrigger = n175
export const dark_gray_active_Card = n175
export const dark_gray_active_Button = n175
export const dark_gray_active_Checkbox = n175
export const dark_gray_active_Switch = n175
export const dark_gray_active_TooltipContent = n175
export const dark_gray_active_RadioGroupItem = n175
export const dark_gray_active_Input = n175
export const dark_gray_active_TextArea = n175
const n176 = t([[28, 115],[29, 116],[30, 117],[31, 115],[20, 123],[21, 122],[22, 123],[23, 122],[24, 121],[25, 120],[26, 119],[27, 118]])

export const dark_active_SwitchThumb = n176
export const dark_active_SliderThumb = n176
export const dark_active_Tooltip = n176
export const dark_active_ProgressIndicator = n176
export const dark_gray_active_SwitchThumb = n176
export const dark_gray_active_SliderThumb = n176
export const dark_gray_active_Tooltip = n176
export const dark_gray_active_ProgressIndicator = n176
const n177 = t([[20, 49],[21, 49],[22, 51],[23, 49],[24, 52],[25, 52],[26, 50],[27, 52]])

export const light_orange_active_SelectTrigger = n177
export const light_orange_active_Card = n177
export const light_orange_active_Button = n177
export const light_orange_active_Checkbox = n177
export const light_orange_active_Switch = n177
export const light_orange_active_TooltipContent = n177
export const light_orange_active_RadioGroupItem = n177
export const light_orange_active_Input = n177
export const light_orange_active_TextArea = n177
const n178 = t([[28, 45],[29, 46],[30, 47],[31, 45],[20, 53],[21, 52],[22, 53],[23, 52],[24, 51],[25, 50],[26, 49],[27, 48]])

export const light_orange_active_SwitchThumb = n178
export const light_orange_active_SliderThumb = n178
export const light_orange_active_Tooltip = n178
export const light_orange_active_ProgressIndicator = n178
const n179 = t([[20, 97],[21, 97],[22, 99],[23, 97],[24, 100],[25, 100],[26, 98],[27, 100]])

export const light_yellow_active_SelectTrigger = n179
export const light_yellow_active_Card = n179
export const light_yellow_active_Button = n179
export const light_yellow_active_Checkbox = n179
export const light_yellow_active_Switch = n179
export const light_yellow_active_TooltipContent = n179
export const light_yellow_active_RadioGroupItem = n179
export const light_yellow_active_Input = n179
export const light_yellow_active_TextArea = n179
const n180 = t([[28, 93],[29, 94],[30, 95],[31, 93],[20, 101],[21, 100],[22, 101],[23, 100],[24, 99],[25, 98],[26, 97],[27, 96]])

export const light_yellow_active_SwitchThumb = n180
export const light_yellow_active_SliderThumb = n180
export const light_yellow_active_Tooltip = n180
export const light_yellow_active_ProgressIndicator = n180
const n181 = t([[20, 37],[21, 37],[22, 39],[23, 37],[24, 40],[25, 40],[26, 38],[27, 40]])

export const light_green_active_SelectTrigger = n181
export const light_green_active_Card = n181
export const light_green_active_Button = n181
export const light_green_active_Checkbox = n181
export const light_green_active_Switch = n181
export const light_green_active_TooltipContent = n181
export const light_green_active_RadioGroupItem = n181
export const light_green_active_Input = n181
export const light_green_active_TextArea = n181
const n182 = t([[28, 33],[29, 34],[30, 35],[31, 33],[20, 41],[21, 40],[22, 41],[23, 40],[24, 39],[25, 38],[26, 37],[27, 36]])

export const light_green_active_SwitchThumb = n182
export const light_green_active_SliderThumb = n182
export const light_green_active_Tooltip = n182
export const light_green_active_ProgressIndicator = n182
const n183 = t([[20, 25],[21, 25],[22, 27],[23, 25],[24, 28],[25, 28],[26, 26],[27, 28]])

export const light_blue_active_SelectTrigger = n183
export const light_blue_active_Card = n183
export const light_blue_active_Button = n183
export const light_blue_active_Checkbox = n183
export const light_blue_active_Switch = n183
export const light_blue_active_TooltipContent = n183
export const light_blue_active_RadioGroupItem = n183
export const light_blue_active_Input = n183
export const light_blue_active_TextArea = n183
const n184 = t([[28, 21],[29, 22],[30, 23],[31, 21],[20, 29],[21, 28],[22, 29],[23, 28],[24, 27],[25, 26],[26, 25],[27, 24]])

export const light_blue_active_SwitchThumb = n184
export const light_blue_active_SliderThumb = n184
export const light_blue_active_Tooltip = n184
export const light_blue_active_ProgressIndicator = n184
const n185 = t([[20, 73],[21, 73],[22, 75],[23, 73],[24, 76],[25, 76],[26, 74],[27, 76]])

export const light_purple_active_SelectTrigger = n185
export const light_purple_active_Card = n185
export const light_purple_active_Button = n185
export const light_purple_active_Checkbox = n185
export const light_purple_active_Switch = n185
export const light_purple_active_TooltipContent = n185
export const light_purple_active_RadioGroupItem = n185
export const light_purple_active_Input = n185
export const light_purple_active_TextArea = n185
const n186 = t([[28, 69],[29, 70],[30, 71],[31, 69],[20, 77],[21, 76],[22, 77],[23, 76],[24, 75],[25, 74],[26, 73],[27, 72]])

export const light_purple_active_SwitchThumb = n186
export const light_purple_active_SliderThumb = n186
export const light_purple_active_Tooltip = n186
export const light_purple_active_ProgressIndicator = n186
const n187 = t([[20, 61],[21, 61],[22, 63],[23, 61],[24, 64],[25, 64],[26, 62],[27, 64]])

export const light_pink_active_SelectTrigger = n187
export const light_pink_active_Card = n187
export const light_pink_active_Button = n187
export const light_pink_active_Checkbox = n187
export const light_pink_active_Switch = n187
export const light_pink_active_TooltipContent = n187
export const light_pink_active_RadioGroupItem = n187
export const light_pink_active_Input = n187
export const light_pink_active_TextArea = n187
const n188 = t([[28, 57],[29, 58],[30, 59],[31, 57],[20, 65],[21, 64],[22, 65],[23, 64],[24, 63],[25, 62],[26, 61],[27, 60]])

export const light_pink_active_SwitchThumb = n188
export const light_pink_active_SliderThumb = n188
export const light_pink_active_Tooltip = n188
export const light_pink_active_ProgressIndicator = n188
const n189 = t([[20, 85],[21, 85],[22, 87],[23, 85],[24, 88],[25, 88],[26, 86],[27, 88]])

export const light_red_active_SelectTrigger = n189
export const light_red_active_Card = n189
export const light_red_active_Button = n189
export const light_red_active_Checkbox = n189
export const light_red_active_Switch = n189
export const light_red_active_TooltipContent = n189
export const light_red_active_RadioGroupItem = n189
export const light_red_active_Input = n189
export const light_red_active_TextArea = n189
const n190 = t([[28, 81],[29, 82],[30, 83],[31, 81],[20, 89],[21, 88],[22, 89],[23, 88],[24, 87],[25, 86],[26, 85],[27, 84]])

export const light_red_active_SwitchThumb = n190
export const light_red_active_SliderThumb = n190
export const light_red_active_Tooltip = n190
export const light_red_active_ProgressIndicator = n190
const n191 = t([[20, 284],[21, 284],[22, 286],[23, 284],[24, 287],[25, 287],[26, 285],[27, 287]])

export const light_indigo_active_SelectTrigger = n191
export const light_indigo_active_Card = n191
export const light_indigo_active_Button = n191
export const light_indigo_active_Checkbox = n191
export const light_indigo_active_Switch = n191
export const light_indigo_active_TooltipContent = n191
export const light_indigo_active_RadioGroupItem = n191
export const light_indigo_active_Input = n191
export const light_indigo_active_TextArea = n191
const n192 = t([[28, 280],[29, 281],[30, 282],[31, 280],[20, 288],[21, 287],[22, 288],[23, 287],[24, 286],[25, 285],[26, 284],[27, 283]])

export const light_indigo_active_SwitchThumb = n192
export const light_indigo_active_SliderThumb = n192
export const light_indigo_active_Tooltip = n192
export const light_indigo_active_ProgressIndicator = n192
const n193 = t([[20, 304],[21, 304],[22, 306],[23, 304],[24, 307],[25, 307],[26, 305],[27, 307]])

export const light_lime_active_SelectTrigger = n193
export const light_lime_active_Card = n193
export const light_lime_active_Button = n193
export const light_lime_active_Checkbox = n193
export const light_lime_active_Switch = n193
export const light_lime_active_TooltipContent = n193
export const light_lime_active_RadioGroupItem = n193
export const light_lime_active_Input = n193
export const light_lime_active_TextArea = n193
const n194 = t([[28, 300],[29, 301],[30, 302],[31, 300],[20, 308],[21, 307],[22, 308],[23, 307],[24, 306],[25, 305],[26, 304],[27, 303]])

export const light_lime_active_SwitchThumb = n194
export const light_lime_active_SliderThumb = n194
export const light_lime_active_Tooltip = n194
export const light_lime_active_ProgressIndicator = n194
const n195 = t([[20, 324],[21, 324],[22, 326],[23, 324],[24, 327],[25, 327],[26, 325],[27, 327]])

export const light_amber_active_SelectTrigger = n195
export const light_amber_active_Card = n195
export const light_amber_active_Button = n195
export const light_amber_active_Checkbox = n195
export const light_amber_active_Switch = n195
export const light_amber_active_TooltipContent = n195
export const light_amber_active_RadioGroupItem = n195
export const light_amber_active_Input = n195
export const light_amber_active_TextArea = n195
const n196 = t([[28, 320],[29, 321],[30, 322],[31, 320],[20, 328],[21, 327],[22, 328],[23, 327],[24, 326],[25, 325],[26, 324],[27, 323]])

export const light_amber_active_SwitchThumb = n196
export const light_amber_active_SliderThumb = n196
export const light_amber_active_Tooltip = n196
export const light_amber_active_ProgressIndicator = n196
const n197 = t([[20, 108],[21, 108],[22, 109],[23, 108],[24, 110],[25, 110],[26, 109],[27, 110]])

export const light_accent_active_SelectTrigger = n197
export const light_accent_active_Card = n197
export const light_accent_active_Button = n197
export const light_accent_active_Checkbox = n197
export const light_accent_active_Switch = n197
export const light_accent_active_TooltipContent = n197
export const light_accent_active_RadioGroupItem = n197
export const light_accent_active_Input = n197
export const light_accent_active_TextArea = n197
const n198 = t([[28, 105],[29, 106],[30, 107],[31, 105],[20, 110],[21, 110],[22, 110],[23, 110],[24, 109],[25, 109],[26, 108],[27, 108]])

export const light_accent_active_SwitchThumb = n198
export const light_accent_active_SliderThumb = n198
export const light_accent_active_Tooltip = n198
export const light_accent_active_ProgressIndicator = n198
const n199 = t([[20, 152],[21, 152],[22, 154],[23, 152],[24, 52],[25, 52],[26, 153],[27, 52]])

export const dark_orange_active_SelectTrigger = n199
export const dark_orange_active_Card = n199
export const dark_orange_active_Button = n199
export const dark_orange_active_Checkbox = n199
export const dark_orange_active_Switch = n199
export const dark_orange_active_TooltipContent = n199
export const dark_orange_active_RadioGroupItem = n199
export const dark_orange_active_Input = n199
export const dark_orange_active_TextArea = n199
const n200 = t([[28, 148],[29, 149],[30, 150],[31, 148],[20, 155],[21, 52],[22, 155],[23, 52],[24, 154],[25, 153],[26, 152],[27, 151]])

export const dark_orange_active_SwitchThumb = n200
export const dark_orange_active_SliderThumb = n200
export const dark_orange_active_Tooltip = n200
export const dark_orange_active_ProgressIndicator = n200
const n201 = t([[20, 196],[21, 196],[22, 198],[23, 196],[24, 100],[25, 100],[26, 197],[27, 100]])

export const dark_yellow_active_SelectTrigger = n201
export const dark_yellow_active_Card = n201
export const dark_yellow_active_Button = n201
export const dark_yellow_active_Checkbox = n201
export const dark_yellow_active_Switch = n201
export const dark_yellow_active_TooltipContent = n201
export const dark_yellow_active_RadioGroupItem = n201
export const dark_yellow_active_Input = n201
export const dark_yellow_active_TextArea = n201
const n202 = t([[28, 192],[29, 193],[30, 194],[31, 192],[20, 199],[21, 100],[22, 199],[23, 100],[24, 198],[25, 197],[26, 196],[27, 195]])

export const dark_yellow_active_SwitchThumb = n202
export const dark_yellow_active_SliderThumb = n202
export const dark_yellow_active_Tooltip = n202
export const dark_yellow_active_ProgressIndicator = n202
const n203 = t([[20, 141],[21, 141],[22, 143],[23, 141],[24, 40],[25, 40],[26, 142],[27, 40]])

export const dark_green_active_SelectTrigger = n203
export const dark_green_active_Card = n203
export const dark_green_active_Button = n203
export const dark_green_active_Checkbox = n203
export const dark_green_active_Switch = n203
export const dark_green_active_TooltipContent = n203
export const dark_green_active_RadioGroupItem = n203
export const dark_green_active_Input = n203
export const dark_green_active_TextArea = n203
const n204 = t([[28, 137],[29, 138],[30, 139],[31, 137],[20, 144],[21, 40],[22, 144],[23, 40],[24, 143],[25, 142],[26, 141],[27, 140]])

export const dark_green_active_SwitchThumb = n204
export const dark_green_active_SliderThumb = n204
export const dark_green_active_Tooltip = n204
export const dark_green_active_ProgressIndicator = n204
const n205 = t([[20, 130],[21, 130],[22, 132],[23, 130],[24, 28],[25, 28],[26, 131],[27, 28]])

export const dark_blue_active_SelectTrigger = n205
export const dark_blue_active_Card = n205
export const dark_blue_active_Button = n205
export const dark_blue_active_Checkbox = n205
export const dark_blue_active_Switch = n205
export const dark_blue_active_TooltipContent = n205
export const dark_blue_active_RadioGroupItem = n205
export const dark_blue_active_Input = n205
export const dark_blue_active_TextArea = n205
const n206 = t([[28, 126],[29, 127],[30, 128],[31, 126],[20, 133],[21, 28],[22, 133],[23, 28],[24, 132],[25, 131],[26, 130],[27, 129]])

export const dark_blue_active_SwitchThumb = n206
export const dark_blue_active_SliderThumb = n206
export const dark_blue_active_Tooltip = n206
export const dark_blue_active_ProgressIndicator = n206
const n207 = t([[20, 174],[21, 174],[22, 176],[23, 174],[24, 76],[25, 76],[26, 175],[27, 76]])

export const dark_purple_active_SelectTrigger = n207
export const dark_purple_active_Card = n207
export const dark_purple_active_Button = n207
export const dark_purple_active_Checkbox = n207
export const dark_purple_active_Switch = n207
export const dark_purple_active_TooltipContent = n207
export const dark_purple_active_RadioGroupItem = n207
export const dark_purple_active_Input = n207
export const dark_purple_active_TextArea = n207
const n208 = t([[28, 170],[29, 171],[30, 172],[31, 170],[20, 177],[21, 76],[22, 177],[23, 76],[24, 176],[25, 175],[26, 174],[27, 173]])

export const dark_purple_active_SwitchThumb = n208
export const dark_purple_active_SliderThumb = n208
export const dark_purple_active_Tooltip = n208
export const dark_purple_active_ProgressIndicator = n208
const n209 = t([[20, 163],[21, 163],[22, 165],[23, 163],[24, 64],[25, 64],[26, 164],[27, 64]])

export const dark_pink_active_SelectTrigger = n209
export const dark_pink_active_Card = n209
export const dark_pink_active_Button = n209
export const dark_pink_active_Checkbox = n209
export const dark_pink_active_Switch = n209
export const dark_pink_active_TooltipContent = n209
export const dark_pink_active_RadioGroupItem = n209
export const dark_pink_active_Input = n209
export const dark_pink_active_TextArea = n209
const n210 = t([[28, 159],[29, 160],[30, 161],[31, 159],[20, 166],[21, 64],[22, 166],[23, 64],[24, 165],[25, 164],[26, 163],[27, 162]])

export const dark_pink_active_SwitchThumb = n210
export const dark_pink_active_SliderThumb = n210
export const dark_pink_active_Tooltip = n210
export const dark_pink_active_ProgressIndicator = n210
const n211 = t([[20, 185],[21, 185],[22, 187],[23, 185],[24, 88],[25, 88],[26, 186],[27, 88]])

export const dark_red_active_SelectTrigger = n211
export const dark_red_active_Card = n211
export const dark_red_active_Button = n211
export const dark_red_active_Checkbox = n211
export const dark_red_active_Switch = n211
export const dark_red_active_TooltipContent = n211
export const dark_red_active_RadioGroupItem = n211
export const dark_red_active_Input = n211
export const dark_red_active_TextArea = n211
const n212 = t([[28, 181],[29, 182],[30, 183],[31, 181],[20, 188],[21, 88],[22, 188],[23, 88],[24, 187],[25, 186],[26, 185],[27, 184]])

export const dark_red_active_SwitchThumb = n212
export const dark_red_active_SliderThumb = n212
export const dark_red_active_Tooltip = n212
export const dark_red_active_ProgressIndicator = n212
const n213 = t([[20, 380],[21, 380],[22, 382],[23, 380],[24, 287],[25, 287],[26, 381],[27, 287]])

export const dark_indigo_active_SelectTrigger = n213
export const dark_indigo_active_Card = n213
export const dark_indigo_active_Button = n213
export const dark_indigo_active_Checkbox = n213
export const dark_indigo_active_Switch = n213
export const dark_indigo_active_TooltipContent = n213
export const dark_indigo_active_RadioGroupItem = n213
export const dark_indigo_active_Input = n213
export const dark_indigo_active_TextArea = n213
const n214 = t([[28, 376],[29, 377],[30, 378],[31, 376],[20, 383],[21, 287],[22, 383],[23, 287],[24, 382],[25, 381],[26, 380],[27, 379]])

export const dark_indigo_active_SwitchThumb = n214
export const dark_indigo_active_SliderThumb = n214
export const dark_indigo_active_Tooltip = n214
export const dark_indigo_active_ProgressIndicator = n214
const n215 = t([[20, 395],[21, 395],[22, 397],[23, 395],[24, 307],[25, 307],[26, 396],[27, 307]])

export const dark_lime_active_SelectTrigger = n215
export const dark_lime_active_Card = n215
export const dark_lime_active_Button = n215
export const dark_lime_active_Checkbox = n215
export const dark_lime_active_Switch = n215
export const dark_lime_active_TooltipContent = n215
export const dark_lime_active_RadioGroupItem = n215
export const dark_lime_active_Input = n215
export const dark_lime_active_TextArea = n215
const n216 = t([[28, 391],[29, 392],[30, 393],[31, 391],[20, 398],[21, 307],[22, 398],[23, 307],[24, 397],[25, 396],[26, 395],[27, 394]])

export const dark_lime_active_SwitchThumb = n216
export const dark_lime_active_SliderThumb = n216
export const dark_lime_active_Tooltip = n216
export const dark_lime_active_ProgressIndicator = n216
const n217 = t([[20, 410],[21, 410],[22, 412],[23, 410],[24, 327],[25, 327],[26, 411],[27, 327]])

export const dark_amber_active_SelectTrigger = n217
export const dark_amber_active_Card = n217
export const dark_amber_active_Button = n217
export const dark_amber_active_Checkbox = n217
export const dark_amber_active_Switch = n217
export const dark_amber_active_TooltipContent = n217
export const dark_amber_active_RadioGroupItem = n217
export const dark_amber_active_Input = n217
export const dark_amber_active_TextArea = n217
const n218 = t([[28, 406],[29, 407],[30, 408],[31, 406],[20, 413],[21, 327],[22, 413],[23, 327],[24, 412],[25, 411],[26, 410],[27, 409]])

export const dark_amber_active_SwitchThumb = n218
export const dark_amber_active_SliderThumb = n218
export const dark_amber_active_Tooltip = n218
export const dark_amber_active_ProgressIndicator = n218
const n219 = t([[20, 207],[21, 207],[22, 209],[23, 207],[24, 210],[25, 210],[26, 208],[27, 210]])

export const dark_accent_active_SelectTrigger = n219
export const dark_accent_active_Card = n219
export const dark_accent_active_Button = n219
export const dark_accent_active_Checkbox = n219
export const dark_accent_active_Switch = n219
export const dark_accent_active_TooltipContent = n219
export const dark_accent_active_RadioGroupItem = n219
export const dark_accent_active_Input = n219
export const dark_accent_active_TextArea = n219
const n220 = t([[28, 203],[29, 204],[30, 205],[31, 203],[20, 211],[21, 210],[22, 211],[23, 210],[24, 209],[25, 208],[26, 207],[27, 206]])

export const dark_accent_active_SwitchThumb = n220
export const dark_accent_active_SliderThumb = n220
export const dark_accent_active_Tooltip = n220
export const dark_accent_active_ProgressIndicator = n220