"use client";

import { useRouter } from "next/navigation";
import { ArrowIcon } from "../icons/ArrowIcon";
import { BUTTONS_TEXT } from "@/constants";
import styles from "./index.module.scss";

export const BackButton = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      className={styles.backBtn}
      onClick={() => router.back()}
    >
      <ArrowIcon className={styles.backBtn__arrow} />
      {BUTTONS_TEXT.goBack}
    </button>
  );
};
