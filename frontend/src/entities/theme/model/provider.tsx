"use client";
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { Theme } from "./types";

interface ThemeContextState {
  theme: Theme;
  changeTheme: (value: Theme) => void;
}

const ThemeContext = createContext<ThemeContextState | null>(null);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>("dark");

  const changeTheme = useCallback((value: Theme) => {
    setTheme(value);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error("You should provide context for useTheme");

  return context;
};
