'use client';

import { useCallback, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { NextIcon, PrevIcon, RecipeCard } from '@/components';
import { IRecipeCard } from '@/types';
import { useDevice } from '@/hooks';
import styles from './recipes-swiper.module.scss';

interface IProps {
  recipes: IRecipeCard[];
}

export const RecipesSwiper = (props: IProps) => {
  const { recipes } = props;
  const [swiper, setSwiper] = useState<any | null>(null);

  const { isNoteBook, isTablet, isMobile } = useDevice();

  const getSlidesPerView = useCallback(() => {
    switch (true) {
      case isNoteBook || isTablet:
        return 2;
      case isMobile:
        return 1;
      default:
        return 3;
    }
  }, [isNoteBook, isTablet, isMobile]);

  const handleNext = useCallback(() => {
    swiper && swiper.slideNext();
  }, [swiper]);

  const handlePrev = useCallback(() => {
    swiper && swiper.slidePrev();
  }, [swiper]);

  return (
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
        className={styles.recipesSwiper}
      >
        {recipes.map((recipe) => (
          <SwiperSlide
            key={recipe.slug}
            className={styles.recipesSwiper__slide}
          >
            <RecipeCard recipe={recipe} />
          </SwiperSlide>
        ))}
      </Swiper>

      {(recipes.length > 3 || isNoteBook) && (
        <>
          <div className={styles.prevIcon} onClick={handlePrev}>
            <PrevIcon />
          </div>
          <div className={styles.nextIcon} onClick={handleNext}>
            <NextIcon />
          </div>
        </>
      )}
    </>
  );
};
