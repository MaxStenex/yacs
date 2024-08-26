"use client";
import React, { PropsWithChildren, cloneElement, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { PopoverTriggerPosition, PopoverContext, usePopoverContext } from "./model";
import { useOutsideClick, useResizeObserver } from "@/shared/lib";

interface Props extends PropsWithChildren {}

type ContentComponent = React.FC<PropsWithChildren>;

type TriggerComponent = React.FC<{ children: React.ReactElement }>;

type PopoverComponent = React.FC<Props> & { Trigger: TriggerComponent } & {
  Content: ContentComponent;
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

const PopoverTrigger: TriggerComponent = ({ children }) => {
  const { triggerPosition, changeTriggerPosition } = usePopoverContext();

  const toggleContentVisibility = (event: React.MouseEvent<HTMLElement>) => {
    if (triggerPosition) {
      changeTriggerPosition(null);
      return;
    }

    const { x, y, width, height } = event.currentTarget.getBoundingClientRect();

    changeTriggerPosition({ x, y, width, height });
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
  const { triggerPosition } = usePopoverContext();

  if (!triggerPosition) return null;

  return <PopoverContentBody>{children}</PopoverContentBody>;
};

Popover.Content = PopoverContent;

const GAP_BETWEEN_TRIGGER_AND_CONTENT = 5;
const GAP_BETWEEN_DOCUMENT_BODY_AND_CONTENT = 5;

const PopoverContentBody = ({ children }: PropsWithChildren) => {
  const { triggerPosition, changeTriggerPosition } = usePopoverContext();
  const contentRef = useRef<HTMLDivElement>(null);
  const { width: contentWidth } = useResizeObserver({
    ref: contentRef,
  });

  const isContentFitInBody =
    document.body.clientWidth -
      GAP_BETWEEN_DOCUMENT_BODY_AND_CONTENT -
      triggerPosition!.x -
      contentWidth >
    0;

  useOutsideClick(contentRef, () => {
    changeTriggerPosition(null);
  });

  return createPortal(
    <div
      style={{
        position: "absolute",
        top:
          triggerPosition!.y + triggerPosition!.height + GAP_BETWEEN_TRIGGER_AND_CONTENT,
        left:
          triggerPosition!.x +
          (isContentFitInBody ? 0 : triggerPosition!.width - contentWidth),
      }}
      ref={contentRef}
    >
      {children}
    </div>,
    document.body
  );
};
