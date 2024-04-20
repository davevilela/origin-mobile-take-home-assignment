import { useHeaderHeight as useHeaderHeightOG } from '@react-navigation/elements';

export const useHeaderHeight = () => {
  try {
    return useHeaderHeightOG();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_error) {
    return 0;
  }
};
