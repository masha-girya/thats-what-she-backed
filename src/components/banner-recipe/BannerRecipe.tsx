import Image from 'next/image';
import Link from 'next/link';
import { getLastRecipe } from '@/lib';
import { ROUTES } from '@/constants';
import styles from './banner-recipe.module.scss';

export const BannerRecipe = async () => {
  const { recipe } = await getLastRecipe();

  if (!recipe) {
    return <></>;
  }

  const { title, mainImage, slug } = recipe;

  return (
    <Link href={`/${ROUTES.recipes}/${slug}`} className={styles.bannerRecipe}>
      <Image
        src={mainImage || ''}
        alt={title || ''}
        width={600}
        height={1000}
        priority={true}
      />
      <div className={styles.bannerRecipe__link}>
        <h2>Нещодавній рецепт</h2>
        <p>{title}</p>
      </div>
    </Link>
  );
};
