import { Theme, useTheme } from "@/entities/theme";
import React from "react";

const themeOptions: Theme[] = ["dark", "light"];

export const ThemeToggler = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <div>
      Theme:{" "}
      <select value={theme} onChange={(e) => changeTheme(e.target.value as Theme)}>
        {themeOptions.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
    </div>
  );
};
