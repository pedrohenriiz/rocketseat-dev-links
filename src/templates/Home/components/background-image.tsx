'use client';

import { useTheme } from 'next-themes';

export default function BackgroundImage() {
  const { resolvedTheme } = useTheme();

  const darkImage =
    'bg-[url(/assets/bg-mobile.jpg)] lg:bg-[url(/assets/bg-desktop.jpg)]';
  const lightImage =
    'bg-[url(/assets/bg-mobile-light.jpg)] lg:bg-[url(/assets/bg-desktop-light.png)';

  const themeBackgroundImage =
    resolvedTheme === 'dark' ? darkImage : lightImage;
  return (
    <div
      className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${
        themeBackgroundImage
      }`}
    />
  );
}
