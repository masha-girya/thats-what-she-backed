"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styles from "./page.module.scss";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, []);

  return <div className={styles.page}></div>;
}
