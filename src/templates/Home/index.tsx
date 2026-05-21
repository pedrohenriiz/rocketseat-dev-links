'use client';

import { PrismicImage, PrismicRichText } from '@prismicio/react';
import { useTheme } from 'next-themes';
import BackgroundImage from './components/background-image';

export default function HomeTemplate({ avatar, name, bio, links }) {
  const { setTheme } = useTheme();

  return (
    <div className='relative min-h-screen'>
      <BackgroundImage />

      <div className='relative container'>
        <div className='flex items-center justify-center'>
          <PrismicImage className='size-28 rounded-full' field={avatar} />
        </div>
        <h1>{name}</h1>
        <PrismicRichText field={bio} />

        <button onClick={() => setTheme('light')}>Light</button>
        <button onClick={() => setTheme('dark')}>Dark</button>

        <ul>
          {links.map((item, i) => (
            <li key={i}>
              <a href={item.url.url} target='_blank'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
