"use client";
import React, { PropsWithChildren, cloneElement, createContext, useState } from "react";
import { PopoverContext, usePopoverContext } from "./context";

interface Props extends PropsWithChildren {}

type ContentComponent = React.FC<PropsWithChildren>;

type TriggerComponent = React.FC<{ children: React.ReactElement }>;

type PopoverType = React.FC<Props> & { Trigger: TriggerComponent } & {
  Content: ContentComponent;
};

export const Popover: PopoverType = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleIsOpened = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <PopoverContext.Provider value={{ isOpened, toggleIsOpened }}>
      {children}
    </PopoverContext.Provider>
  );
};

const PopoverTrigger: TriggerComponent = ({ children }) => {
  const { toggleIsOpened } = usePopoverContext();

  const handleClick = (event: React.MouseEvent) => {
    toggleIsOpened();

    if (children.props.onClick) {
      children.props.onClick(event);
    }
  };

  return <>{cloneElement(children, { onClick: handleClick })}</>;
};

Popover.Trigger = PopoverTrigger;

const PopoverContent: ContentComponent = ({ children }) => {
  const { isOpened } = usePopoverContext();

  if (!isOpened) return null;

  return <>{children}</>;
};

Popover.Content = PopoverContent;
