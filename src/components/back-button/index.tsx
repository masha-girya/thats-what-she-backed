"use client";

import { useRouter } from "next/navigation";
import styles from "./index.module.scss";
import { ArrowIcon } from "../icons/ArrowIcon";

export const BackButton = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      className={styles.backBtn}
      onClick={() => router.back()}
    >
      <ArrowIcon className={styles.backBtn__arrow} />
      Повернутись назад
    </button>
  );
};
