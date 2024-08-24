import { createContext, useContext } from "react";

export type PopoverContentPosition = null | {
  x: number;
  y: number;
};

interface PopoverContextState {
  contentPosition: PopoverContentPosition;
  changeContentPosition: (p: PopoverContentPosition) => void;
}

export const PopoverContext = createContext<PopoverContextState | null>(null);

export const usePopoverContext = (): PopoverContextState => {
  const context = useContext(PopoverContext);

  if (!context) throw new Error("You should use popover context within provider");

  return context;
};
