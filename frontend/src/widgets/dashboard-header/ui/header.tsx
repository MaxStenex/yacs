import { UserProfilePopover } from "@/features/user-profile";
import { PreferencesPopover } from "@/features/user-preferences";
import { Input, Logo } from "@/shared/ui";
import React from "react";
import styles from "./header.module.scss";

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
        <PreferencesPopover />
        <UserProfilePopover />
      </div>
    </header>
  );
};
