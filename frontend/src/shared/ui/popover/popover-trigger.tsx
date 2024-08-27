import React, { cloneElement } from "react";
import { usePopoverContext } from "./model";

export type PopoverTriggerComponent = React.FC<{ children: React.ReactElement }>;

export const PopoverTrigger: PopoverTriggerComponent = ({ children }) => {
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
