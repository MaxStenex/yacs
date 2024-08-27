import { useInitialSize, useOutsideClick } from "@/shared/lib";
import React, { PropsWithChildren, useRef } from "react";
import { createPortal } from "react-dom";
import { usePopoverContext } from "./model";

export type PopoverContentComponent = React.FC<PropsWithChildren>;

export const PopoverContent: PopoverContentComponent = ({ children }) => {
  const { triggerPosition } = usePopoverContext();

  if (!triggerPosition) return null;

  return <PopoverContentBody>{children}</PopoverContentBody>;
};

const GAP_BETWEEN_TRIGGER_AND_CONTENT = 5;
const GAP_BETWEEN_DOCUMENT_BODY_AND_CONTENT = 5;

const PopoverContentBody = ({ children }: PropsWithChildren) => {
  const { triggerPosition, changeTriggerPosition } = usePopoverContext();
  const contentRef = useRef<HTMLDivElement>(null);
  const { width: contentWidth = 0 } = useInitialSize({
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
