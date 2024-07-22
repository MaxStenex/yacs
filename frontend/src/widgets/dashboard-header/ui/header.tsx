import React from "react";
import styles from "./header.module.scss";
import { Logo } from "@/shared/ui";

interface Props {}

export const DashboardHeader: React.FC<Props> = () => {
  return (
    <header className={styles.wrapper}>
      <Logo />
    </header>
  );
};
