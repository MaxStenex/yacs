import React from "react";
import Link from "next/link";
import styles from "./logo.module.scss";
import { ROUTES } from "@/shared/config";

export const Logo = () => {
  return (
    <span className={styles.wrapper}>
      <Link href={ROUTES.INDEX} className={styles.link}>
        YACS
      </Link>
    </span>
  );
};
