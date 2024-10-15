import { PropsWithChildren } from "react";
import { ThemeProvider } from "@/entities/theme";
import { AppWrapper } from "./ui";
import "./styles/index.scss";

export const App: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <AppWrapper>{children}</AppWrapper>
    </ThemeProvider>
  );
};
