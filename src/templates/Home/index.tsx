import { PrismicImage } from '@prismicio/react';
import BackgroundImage from './components/background-image';
import ThemeSwitch from './components/theme-switch';
import Link from 'next/link';

import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoYoutube,
  IoLogoTiktok,
  IoLogoWhatsapp,
} from 'react-icons/io5';
import type { IconType } from 'react-icons';
import { GroupField, ImageField, KeyTextField } from '@prismicio/client';
import {
  LinkTreeDocumentDataIconsItem,
  LinkTreeDocumentDataLinksItem,
  Simplify,
} from '../../../prismicio-types';

const baseIcons: Record<string, IconType> = {
  github: IoLogoGithub,
  instagram: IoLogoInstagram,
  twitter: IoLogoTwitter,
  linkedin: IoLogoLinkedin,
  youtube: IoLogoYoutube,
  tiktok: IoLogoTiktok,
  whatsapp: IoLogoWhatsapp,
};

interface HomeTemplateProps {
  avatar: ImageField<never>;
  name: KeyTextField;
  links: GroupField<Simplify<LinkTreeDocumentDataLinksItem>>;
  icons: GroupField<Simplify<LinkTreeDocumentDataIconsItem>>;
}

export default function HomeTemplate({
  avatar,
  name,
  links,
  icons,
}: HomeTemplateProps) {
  return (
    <div className='relative min-h-screen'>
      <BackgroundImage />

      <div className='relative container flex items-center justify-center flex-col pt-14'>
        <div className='flex items-center justify-center'>
          <PrismicImage className='size-28 rounded-full' field={avatar} />
        </div>
        <h1 className='text-color-mode typography-md mt-2 mb-6'>{name}</h1>

        <ThemeSwitch />

        <ul className='container flex flex-col items-center justify-center my-6 gap-4 '>
          {links.map((item, i) => {
            console.log(item);
            return (
              <Link
                className='px-6 py-4 typography-md bg-surface-color-mode rounded-lg border border-stroke-color-mode'
                key={item.url?.text}
                href={item.url?.text!}
                target='_blank'
              >
                {item.label}
              </Link>
            );
          })}
        </ul>

        <ul className='my-6 flex gap-4'>
          {icons.map((item) => {
            const Icon = baseIcons[item?.icon!];
            return (
              <Link
                key={item.url?.text!}
                href={item.url.text!}
                className='size-10 gap-4'
              >
                {Icon && <Icon className='size-6' />}
              </Link>
            );
          })}
        </ul>

        <div>
          <p className='typography-sm'>Feito com ♥ por Pedro Henrique</p>
        </div>
      </div>
    </div>
  );
}
