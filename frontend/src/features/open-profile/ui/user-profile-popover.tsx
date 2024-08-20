"use client";
import { UserProfileIcon } from "@/shared/assets/icons";
import { IconButton, Popover } from "@/shared/ui";

export const UserProfilePopover = () => {
  return (
    <Popover>
      <Popover.Trigger>
        <IconButton>
          <UserProfileIcon />
        </IconButton>
      </Popover.Trigger>
      <Popover.Content>Contentiwe</Popover.Content>
    </Popover>
  );
};
