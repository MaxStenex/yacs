import { Theme, useTheme } from "@/entities/theme";

const themeOptions: Theme[] = ["dark", "light"];

export const ThemeToggler = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <div>
      Theme:{" "}
      <select
        value={theme}
        onChange={(e) => {
          const newTheme = e.target.value as Theme;
          changeTheme(newTheme);
        }}
      >
        {themeOptions.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
    </div>
  );
};
