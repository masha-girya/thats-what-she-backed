import { Suspense } from 'react';
import {
  RecipeStep,
  RecipeSticker,
  RecipeHeader,
  RecipeTips,
  ServerErrorPlug,
  BackButton,
  LoadingPage,
  RecipesList,
  ShareSocials,
  TitleBox,
  InstagramPost,
} from '@/components';
import { ERROR_TEXT, ROUTES } from '@/constants';
import { getRecipeBySlug } from '@/lib';
import styles from './recipe-page.module.scss';
import { Metadata } from 'next';
import { endpoint } from '@/utils';

type Props = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  console.log(1122, params);

  const { recipe } = await fetch(`${endpoint}/${ROUTES.recipes}/${params.slug}`).then(
    (res) => {
      return res.json();
    },
  );

  return {
    title: recipe.title,
    description: recipe.description[0],
    keywords: recipe.category,
    openGraph: {
      images: [recipe.mainImage],
    },
  };
}

const RecipePage = async ({ params }: any) => {
  const { recipe } = await getRecipeBySlug(params.slug);
  generateMetadata({ params });

  if (!recipe) {
    return <ServerErrorPlug text={ERROR_TEXT.recipeInner} />;
  }

  const {
    recipeSteps,
    bakingTime,
    formSize,
    amount,
    tips,
    lastImage,
    instaPostLink,
  } = recipe;

  const stickerInfo = [
    {
      title: 'Час приготування: ',
      info: bakingTime,
    },
    {
      title: 'Кількість порцій: ',
      info: amount,
    },
    {
      title: 'Розмір форми: ',
      info: formSize,
    },
  ];

  return (
    <Suspense fallback={<LoadingPage />}>
      <div className={styles.recipe}>
        <div className={styles.recipe__recipeBox}>
          <div className={styles.recipe__recipeBox__head}>
            <BackButton />
            <TitleBox slug={recipe.slug} totalFavs={recipe.totalFavs} />
          </div>

          <RecipeHeader recipe={recipe} />

          <RecipeTips tips={tips} />

          <RecipeSticker>
            {stickerInfo.map((info) => (
              <p key={info.title} className={styles.recipe__stickerInfo}>
                <span className={styles.recipe__stickerInfo__title}>
                  {info.title}
                </span>
                {info.info}
              </p>
            ))}
          </RecipeSticker>

          <RecipeStep recipeSteps={recipeSteps} lastImage={lastImage} />

          {instaPostLink && <InstagramPost postLink={instaPostLink} />}

          <RecipeSticker>
            <p className={styles.recipe__shareText}>
              А за кропітку роботу над рецептом ви завжди можете підримати мене
              донатом або поділитись цим рецептом через соцмережі 🌚🌝
            </p>
            <ShareSocials isInSticker />
          </RecipeSticker>
        </div>

        <RecipesList isBlock isSlider />
      </div>
    </Suspense>
  );
};

export default RecipePage;
