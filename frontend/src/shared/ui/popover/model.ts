import { createContext, useContext } from "react";

export type PopoverTriggerPosition = null | {
  x: number;
  y: number;
  width: number;
  height: number;
};

interface PopoverContextState {
  triggerPosition: PopoverTriggerPosition;
  changeTriggerPosition: (p: PopoverTriggerPosition) => void;
}

export const PopoverContext = createContext<PopoverContextState | null>(null);

export const usePopoverContext = (): PopoverContextState => {
  const context = useContext(PopoverContext);

  if (!context) throw new Error("You should use popover context within provider");

  return context;
};
