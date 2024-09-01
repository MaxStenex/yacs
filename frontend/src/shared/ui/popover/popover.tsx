"use client";
import React, { useState } from "react";
import { PopoverContext, PopoverTriggerPosition } from "./model";
import { PopoverContent, PopoverContentComponent } from "./popover-content";
import { PopoverTrigger, PopoverTriggerComponent } from "./popover-trigger";

type ClosePopover = () => void;

type ChildrenCallback = (params: { closePopover: ClosePopover }) => React.ReactNode;

interface Props {
  children: React.ReactNode | ChildrenCallback;
}

type PopoverComponent = React.FC<Props> & { Trigger: PopoverTriggerComponent } & {
  Content: PopoverContentComponent;
};

export const Popover: PopoverComponent = ({ children }) => {
  const [triggerPosition, setTriggerPosition] = useState<PopoverTriggerPosition>(null);

  const changeTriggerPosition = (pos: PopoverTriggerPosition) => {
    setTriggerPosition(pos);
  };

  const closePopover: ClosePopover = () => {
    setTriggerPosition(null);
  };

  return (
    <PopoverContext.Provider value={{ triggerPosition, changeTriggerPosition }}>
      {typeof children === "function" ? children({ closePopover }) : children}
    </PopoverContext.Provider>
  );
};

Popover.Trigger = PopoverTrigger;

Popover.Content = PopoverContent;
