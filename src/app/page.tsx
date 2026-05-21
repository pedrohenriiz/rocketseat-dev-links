import { createClient } from '@/prismicio';
import HomeTemplate from '@/templates/Home';

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle('link_tree');
  const { avatar, name, links, icons } = page.data;

  return (
    <HomeTemplate avatar={avatar} name={name} links={links} icons={icons} />
  );
}
