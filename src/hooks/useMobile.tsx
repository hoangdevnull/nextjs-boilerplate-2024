'use client';

import { useMediaQuery } from '@mantine/hooks';

const useMobile = () => {
  return useMediaQuery('(max-width: 48rem)');
};

export default useMobile;
