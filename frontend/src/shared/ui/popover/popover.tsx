"use client";
import React, { PropsWithChildren, useState } from "react";
import { PopoverContext, PopoverTriggerPosition } from "./model";
import { PopoverContent, PopoverContentComponent } from "./popover-content";
import { PopoverTrigger, PopoverTriggerComponent } from "./popover-trigger";

interface Props extends PropsWithChildren {}

type PopoverComponent = React.FC<Props> & { Trigger: PopoverTriggerComponent } & {
  Content: PopoverContentComponent;
};

export const Popover: PopoverComponent = ({ children }) => {
  const [triggerPosition, setTriggerPosition] = useState<PopoverTriggerPosition>(null);

  const changeTriggerPosition = (pos: PopoverTriggerPosition) => {
    setTriggerPosition(pos);
  };

  return (
    <PopoverContext.Provider value={{ triggerPosition, changeTriggerPosition }}>
      {children}
    </PopoverContext.Provider>
  );
};

Popover.Trigger = PopoverTrigger;

Popover.Content = PopoverContent;
