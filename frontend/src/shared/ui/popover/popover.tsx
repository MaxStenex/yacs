"use client";
import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

type PopoverType = React.FC<Props> & { Trigger: React.FC<PropsWithChildren> } & {
  Content: React.FC<PropsWithChildren>;
};

export const Popover: PopoverType = ({ children }) => {
  return <>{children}</>;
};

Popover.Trigger = ({ children }) => {
  return <>{children}</>;
};

Popover.Trigger.displayName = "PopoverTrigger";

Popover.Content = ({ children }) => {
  return <>{children}</>;
};

Popover.Content.displayName = "PopoverContent";
