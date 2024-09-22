// TODO: remove useMedia from 'front-end-navigation' and use
// the one from the frontend-monorepo package, when it's ready
import { useEffect, useState } from 'react';

const breakpoints = ['768px', '992px', '1200px', '1900px'];

const DEVICE_TYPE = [
  `(max-width: ${breakpoints[1]})`,
  `(max-width: ${breakpoints[2]})`,
  `(max-width: ${breakpoints[3]})`,
  `(max-width: ${breakpoints[0]})`,
];

export const useMedia = () => {
  const getValue = () => {
    const mediaQueryLists = DEVICE_TYPE.map(q => window.matchMedia(q));
    const device = mediaQueryLists.filter(i => !!i.matches);

    const isMobile = device && device[0]?.media === DEVICE_TYPE[0];
    const isTablet = device && device[0]?.media === DEVICE_TYPE[1];
    const isDesktop = device && device[0]?.media === DEVICE_TYPE[2];
    const isWidescreen = !isMobile && !isTablet && !isDesktop;

    return { isMobile, isTablet, isDesktop, isWidescreen };
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    const handler = () => setValue(getValue);

    window.addEventListener('resize', handler);

    return () => window.removeEventListener('resize', handler);
  });

  return value;
};
