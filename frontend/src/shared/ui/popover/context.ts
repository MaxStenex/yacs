import { createContext, useContext } from "react";

interface PopoverContextState {
  isOpened: boolean;
  toggleIsOpened: () => void;
}

export const PopoverContext = createContext<PopoverContextState | null>(null);

export const usePopoverContext = (): PopoverContextState => {
  const context = useContext(PopoverContext);

  if (!context) throw new Error("You should use popover context within provider");

  return context;
};
