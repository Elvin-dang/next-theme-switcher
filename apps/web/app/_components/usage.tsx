import React from "react";
import SingleCodeBlock from "@/components/single-code-block";

const codeLayout = [
  {
    language: "tsx",
    filename: "layout.tsx",
    code: `// next-themes is preinstalled (optional)
import { ThemeProvider } from 'next-themes'; 

// ...

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}`,
  },
];

const codePage = [
  {
    language: "tsx",
    filename: "page.tsx",
    code: `import { useTheme } from "next-themes";
import { ThemeSwitcher } from "next-theme-switcher";

// ...

function Page() {
  const { theme, setTheme } = useTheme();

  return (
    <ThemeSwitcher theme={theme} onThemeChange={setTheme} />
  );
}`,
  },
];

const Usage = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">🚀 Usage</h2>
      <p className="mb-4 text-sm">
        Integrate <code className="font-bold">next-theme-switcher</code> by wrapping your app with{" "}
        <code className="font-bold">ThemeProvider</code> and using the{" "}
        <code className="font-bold">ThemeSwitcher</code> component to toggle themes.
      </p>
      <SingleCodeBlock data={codeLayout} />
      <SingleCodeBlock data={codePage} className="mt-6" />
    </section>
  );
};

export default Usage;
