"use client";
import React, { PropsWithChildren, cloneElement, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { PopoverContentPosition, PopoverContext, usePopoverContext } from "./model";
import { useOutsideClick } from "@/shared/lib";

interface Props extends PropsWithChildren {}

type ContentComponent = React.FC<PropsWithChildren>;

type TriggerComponent = React.FC<{ children: React.ReactElement }>;

type PopoverComponent = React.FC<Props> & { Trigger: TriggerComponent } & {
  Content: ContentComponent;
};

export const Popover: PopoverComponent = ({ children }) => {
  const [contentPosition, setContentPosition] = useState<PopoverContentPosition>(null);

  const changeContentPosition = (pos: PopoverContentPosition) => {
    setContentPosition(pos);
  };

  return (
    <PopoverContext.Provider value={{ contentPosition, changeContentPosition }}>
      {children}
    </PopoverContext.Provider>
  );
};

const PopoverTrigger: TriggerComponent = ({ children }) => {
  const { contentPosition, changeContentPosition } = usePopoverContext();

  const toggleContentVisibility = (event: React.MouseEvent<HTMLElement>) => {
    if (contentPosition) {
      changeContentPosition(null);
      return;
    }

    const { x, y, height } = event.currentTarget.getBoundingClientRect();

    changeContentPosition({ x, y: y + height + 5 });
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    toggleContentVisibility(event);

    if (children.props.onClick) {
      children.props.onClick(event);
    }
  };

  return <>{cloneElement(children, { onClick: handleClick })}</>;
};

Popover.Trigger = PopoverTrigger;

export const PopoverContent: ContentComponent = ({ children }) => {
  const { contentPosition } = usePopoverContext();

  if (!contentPosition) return null;

  return <PopoverContentBody>{children}</PopoverContentBody>;
};

Popover.Content = PopoverContent;

const PopoverContentBody = ({ children }: PropsWithChildren) => {
  const { contentPosition, changeContentPosition } = usePopoverContext();
  const contentRef = useRef<HTMLDivElement>(null);

  useOutsideClick(contentRef, () => {
    changeContentPosition(null);
  });

  return createPortal(
    <div
      style={{
        position: "absolute",
        top: contentPosition!.y,
        left: contentPosition!.x,
      }}
      ref={contentRef}
    >
      {children}
    </div>,
    document.body
  );
};
