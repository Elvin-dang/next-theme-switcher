![demo](https://github.com/user-attachments/assets/3b199922-7faa-4d84-93b2-8c8956be6f6a)
# next-theme-switcher

A lightweight, customizable, and framework-agnostic **theme switcher** component for **Next.js** and **React**.  
Supports `light`, `dark`, and `system` themes with full TypeScript support and zero dependencies.

---

## 🚀 Features

- 🌓 Supports `light`, `dark`, and `system` themes
- ⚡ Works out-of-the-box with **Next.js**, **Vite**, and **CRA**
- 🎨 Customizable appearance (icons, scale, border radius, gap)
- 🧩 Easy to integrate with your theme provider or existing UI
- 💪 Built with **TypeScript**, **ESM/CJS** outputs, and **tree-shakable**

---

## 📦 Installation

```bash
npm install next-theme-switcher
# or
yarn add next-theme-switcher
# or
pnpm add next-theme-switcher
```

## 🧭 Usage

Wrap your app with the ThemeProvider and add the ThemeSwitcher anywhere in your component tree.

Example (Next.js / App Router)

```tsx
// app/layout.tsx
// next-themes is preinstalled (optional)
import { ThemeProvider } from "next-themes";
// add styles
import "next-theme-switcher/styles";

// ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

```tsx
// page.tsx
import { useTheme } from "next-themes";
import { ThemeSwitcher } from "next-theme-switcher";

function Page() {
  const { theme, setTheme } = useTheme();

  return <ThemeSwitcher theme={theme} onThemeChange={setTheme} />;
}
```

---

Find the full API reference in the [documentation](https://next-theme-switcher.elvindang.info).

MIT © Elvin Dang
