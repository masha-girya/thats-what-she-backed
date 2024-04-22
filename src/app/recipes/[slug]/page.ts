export { default } from './RecipePage';

import { Metadata } from 'next';
import axios from 'axios';
import { endpoint } from '@/utils';
import { META_GLOBAL } from '@/constants';

export const dynamic = 'force-dynamic';

type Props = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const referer = `${endpoint}/recipes/${params.slug}`;

  const { data } = await axios.get(referer);

  return {
    ...META_GLOBAL,
    metadataBase: new URL(referer),
    title: data.recipe.title,
    description: data.recipe.description[0],
    keywords: data.recipe.category,
    openGraph: {
      images: [data.recipe.mainImage],
      title: data.recipe.title,
      description: data.recipe.description[0],
    },
    twitter: {
      images: [data.recipe.mainImage],
      title: data.recipe.title,
      description: data.recipe.description[0],
    },
  };
}
