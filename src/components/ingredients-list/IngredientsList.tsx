'use client';

import { useCallback, useState } from 'react';
import classNames from 'classnames';
import styles from './ingredients-list.module.scss';
import { Checkmark } from '../icons';

interface IProps {
  ingredients: string[];
}

export const IngredientsList = (props: IProps) => {
  const { ingredients } = props;
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheckItem = useCallback(
    (item: string) => {
      if (checkedItems.includes(item)) {
        setCheckedItems((prev) => prev.filter((prevItem) => prevItem !== item));
      } else {
        setCheckedItems((prev) => [...prev, item]);
      }
    },
    [checkedItems],
  );

  return (
    <ul className={styles.ingredientsList}>
      {ingredients.map((ingredient: string) => (
        <li key={ingredient}>
          <label
            className={classNames(styles.ingredientsList__inputBox, {
              [styles.ingredientsList__inputBox_checked]:
                checkedItems.includes(ingredient),
            })}
          >
            <input
              name={ingredient}
              className={styles.ingredientsList__inputBox__checkbox}
              type="checkbox"
              checked={checkedItems.includes(ingredient)}
              onChange={() => handleCheckItem(ingredient)}
            />
            <div className={styles.ingredientsList__inputBox__checkmarkBox}>
              <Checkmark className={styles.ingredientsList__inputBox__checkmarkBox__checkmark} />
            </div>
            {ingredient}
          </label>
        </li>
      ))}
    </ul>
  );
};
