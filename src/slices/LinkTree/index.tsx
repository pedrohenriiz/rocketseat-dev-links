import { FC } from 'react';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `LinkTree`.
 */
export type LinkTreeProps = SliceComponentProps<Content.LinkTreeSlice>;

/**
 * Component for "LinkTree" Slices.
 */
const LinkTree: FC<LinkTreeProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for link_tree (variation: {slice.variation}) slices.
      <br />
      <strong>You can edit this slice directly in your code editor 222.</strong>
      {/**
       * 💡 Use your own AI agent with the Prismic CLI
       * 📚 Docs: https://prismic.io/docs/ai#create-slices
       */}
    </section>
  );
};

export default LinkTree;
