'use client';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Home() {
  const { setTheme } = useTheme();

  return (
    <div className='flex flex-col flex-1 items-center justify-center font-sans '>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
    </div>
  );
}
