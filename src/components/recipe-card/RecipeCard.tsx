import { ImageLoader, LinkButton } from '@/components';
import { IRecipeCard } from '@/types';
import { ROUTES } from '@/constants';
import styles from './recipe-card.module.scss';

interface IProps {
  recipe: IRecipeCard;
}

export const RecipeCard = ({ recipe }: IProps) => {
  const { title, slug, mainImage } = recipe;

  return (
    <LinkButton
      linkStyles={styles.recipeCard}
      link={`/${ROUTES.recipes}/${title === 'Клафуті' ? 'clafoutis' : slug}`}
      text={title}
    >
      <div className={styles.recipeCard__background}>
        <ImageLoader
          styles={styles.recipeCard__background__img}
          image={mainImage}
          alt={`Фото ${title}`}
        />
      </div>
    </LinkButton>
  );
};
