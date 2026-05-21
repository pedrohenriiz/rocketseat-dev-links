'use client';

import { useTheme } from 'next-themes';

import { SunIcon, MoonStarsIcon } from '@phosphor-icons/react';

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDarkTheme = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDarkTheme ? 'light' : 'dark')}
      className={`group relative flex w-16 h-6 rounded-full transition-colors duration-300 bg-surface-color-mode border border-stroke-color-mode`}
    >
      <span
        className={`flex items-center justify-center size-8 rounded-full bg-white absolute -translate-y-1 shadow transition-all duration-300 group-hover:ring-8 ring-highlight-color-mode group-hover:cursor-pointer
      ${isDarkTheme ? 'translate-x-0' : 'translate-x-8'}
    `}
      >
        {isDarkTheme ? (
          <MoonStarsIcon className='size-4 text-slate-700' />
        ) : (
          <SunIcon className='size-4 text-color-light-mode' />
        )}
      </span>
    </button>
  );
}
