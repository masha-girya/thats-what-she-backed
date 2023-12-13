"use client";

import { useCallback, useState } from "react";
import styles from "./index.module.scss";
import classNames from "classnames";

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
    [checkedItems]
  );

  return (
    <ul className={styles.ingredientsList}>
      {ingredients.map((li: string) => (
        <li key={li}>
          <label
            className={classNames(styles.ingredientsList__item, {
              [styles.ingredientsList__item_checked]: checkedItems.includes(li),
            })}
          >
            <input
              className={styles.ingredientsList__checkbox}
              type="checkbox"
              checked={checkedItems.includes(li)}
              onChange={() => handleCheckItem(li)}
            />
            {li}
          </label>
        </li>
      ))}
    </ul>
  );
};
