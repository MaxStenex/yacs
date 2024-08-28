"use client";
import { SettingsIcon } from "@/shared/assets/icons";
import { IconButton, Popover, Typography } from "@/shared/ui";
import styles from "./preferences-popover.module.scss";
import { ThemeToggler } from "./theme-toggler";

export const PreferencesPopover = () => {
  return (
    <Popover>
      <Popover.Trigger>
        <IconButton>
          <SettingsIcon />
        </IconButton>
      </Popover.Trigger>
      <Popover.Content>
        <div className={styles.main}>
          <Typography variant="h5">Settings</Typography>
          <div className={styles.body}>
            <ThemeToggler />
          </div>
        </div>
      </Popover.Content>
    </Popover>
  );
};
