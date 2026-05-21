'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function BackgroundImage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const darkImage =
    'bg-[url(/assets/bg-mobile.jpg)] lg:bg-[url(/assets/bg-desktop.jpg)]';
  const lightImage =
    'bg-[url(/assets/bg-mobile-light.jpg)] lg:bg-[url(/assets/bg-desktop-light.jpg)]';

  const themeBackgroundImage =
    mounted && resolvedTheme === 'dark' ? darkImage : lightImage;

  return (
    <div
      className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${themeBackgroundImage}`}
    />
  );
}
