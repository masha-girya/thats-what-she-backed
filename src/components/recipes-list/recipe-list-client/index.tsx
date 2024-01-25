'use client';

import { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Search, RecipeCard, PrevIcon, NextIcon } from '@/components';
import styles from './index.module.scss';
import { useDevice } from '@/hooks';

interface IProps {
  recipes: {
    mainImage: string;
    title: string;
    slug: string;
  }[];
  isFavRecipes?: boolean;
  isSlider?: boolean;
}

export const RecipesListClient = (props: IProps) => {
  const { recipes, isFavRecipes, isSlider } = props;

  const [searchQuery, setSearchQuery] = useState('');
  const [recipesOnShow, setRecipesOnShow] = useState(recipes);
  const [swiper, setSwiper] = useState<any | null>(null);

  const { isNoteBook, isTablet, isMobile } = useDevice();

  const getSlidesPerView = useCallback(() => {
    if (isNoteBook || isTablet) {
      return 2;
    }
    if (isMobile) {
      return 1;
    }

    return 3;
  }, [window]);

  const handleNext = useCallback(() => {
    if (swiper) {
      swiper.slideNext();
    }
  }, [swiper]);

  const handlePrev = useCallback(() => {
    if (swiper) {
      swiper.slidePrev();
    }
  }, [swiper]);

  useEffect(() => {
    const newRecipes = recipes.filter((recipe) =>
      recipe.title
        .toLocaleLowerCase()
        .includes(searchQuery.toLocaleLowerCase()),
    );

    setRecipesOnShow(newRecipes);
  }, [searchQuery]);

  return (
    <>
      {!isSlider && (
        <div
          className={classNames(styles.recipeListClient__search, {
            [styles.recipeListClient__search_favs]: isFavRecipes,
          })}
        >
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
      )}

      <div
        className={classNames(styles.recipeListClient__box, {
          [styles.recipeListClient__box_slider]: isSlider,
        })}
      >
        {!isSlider &&
          recipesOnShow.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}

        {isSlider && (
          <>
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              navigation={
                isMobile || isTablet
                  ? false
                  : {
                      prevEl: 'styles.prevIcon',
                      nextEl: 'styles.nextIcon',
                    }
              }
              slidesPerView={getSlidesPerView()}
              onSwiper={setSwiper}
              spaceBetween={30}
              modules={[Pagination, Navigation]}
              className={styles.recipeListClient__swiper}
            >
              {recipesOnShow.map((recipe) => (
                <SwiperSlide
                  key={recipe.slug}
                  className={styles.recipeListClient__swiper__slide}
                >
                  <RecipeCard recipe={recipe} />
                </SwiperSlide>
              ))}
            </Swiper>

            {recipesOnShow.length > 3 ||
              (isNoteBook && (
                <>
                  <div className={styles.prevIcon} onClick={handlePrev}>
                    <PrevIcon />
                  </div>
                  <div className={styles.nextIcon} onClick={handleNext}>
                    <NextIcon />
                  </div>
                </>
              ))}
          </>
        )}
      </div>
    </>
  );
};
