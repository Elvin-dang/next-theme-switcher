"use client";

import { ThemeSwitcher } from "@repo/next-theme-switcher";
import { Lightbulb, MoonIcon, Settings2 } from "lucide-react";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: 20,
      }}
    >
      <ThemeSwitcher theme={theme} onThemeChange={setTheme} size="small" />
      <ThemeSwitcher
        theme={theme}
        onThemeChange={setTheme}
        size="small"
        layout={["light", "system", "dark"]}
      />
      <ThemeSwitcher
        theme={theme}
        onThemeChange={setTheme}
        size="small"
        icons={{ light: Lightbulb, dark: MoonIcon, system: Settings2 }}
        layout={["light", "system", "dark"]}
      />
      <ThemeSwitcher theme={theme} onThemeChange={setTheme} size="small" gap={2} />
      <ThemeSwitcher theme={theme} onThemeChange={setTheme} size="small" scale={2} />
      <ThemeSwitcher theme={theme} onThemeChange={setTheme} size="medium" />
      <ThemeSwitcher theme={theme} onThemeChange={setTheme} size="medium" scale={2} />
      <ThemeSwitcher theme={theme} onThemeChange={setTheme} size="large" />
      <ThemeSwitcher theme={theme} onThemeChange={setTheme} size="large" scale={3} />
    </div>
  );
}
