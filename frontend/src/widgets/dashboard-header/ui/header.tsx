import React from "react";
import styles from "./header.module.scss";
import { Input, Logo } from "@/shared/ui";

interface Props {}

export const DashboardHeader: React.FC<Props> = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.searchWrapper}>
        <Logo />
        <div className={styles.inputWrapper}>
          <Input className={styles.input} />
        </div>
      </div>
      <div className={styles.settingsWrapper}>
        <div>Settings btn</div>
        <div>Profile btn</div>
      </div>
    </header>
  );
};
