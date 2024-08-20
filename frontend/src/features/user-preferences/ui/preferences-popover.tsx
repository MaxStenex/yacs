"use client";
import { SettingsIcon } from "@/shared/assets/icons";
import { IconButton, Popover } from "@/shared/ui";

export const PreferencesPopover = () => {
  return (
    <Popover>
      <Popover.Trigger>
        <IconButton>
          <SettingsIcon />
        </IconButton>
      </Popover.Trigger>
      <Popover.Content>Contentiwe</Popover.Content>
    </Popover>
  );
};
