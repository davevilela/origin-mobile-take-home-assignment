import { Skeleton as SkeletonOG } from 'moti/skeleton';
import React from 'react';

import { useRootTheme } from '~/providers/ThemeProvider';

export function Skeleton(props: React.ComponentProps<typeof SkeletonOG>) {
  const [colorMode] = useRootTheme();
  return <SkeletonOG colorMode={colorMode} {...props} />;
}
