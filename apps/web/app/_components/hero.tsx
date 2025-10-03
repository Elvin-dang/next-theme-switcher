import React from "react";
import { Button } from "@repo/ui/components/button";
import Link from "next/link";
import { Sparkle } from "lucide-react";
import { ThemeSwitcher } from "next-theme-switcher";
import { useTheme } from "next-themes";

type Props = {};

const Hero = (props: Props) => {
  const { theme, setTheme } = useTheme();

  return (
    <section className="text-center pt-20 flex flex-col items-center">
      <div className="absolute top-20 right-1/2 translate-x-1/2">
        <div
          className="absolute w-100 h-100 -translate-x-1/3 -translate-y-1/3 dark:hidden"
          style={{
            background: `radial-gradient(circle, var(--sun-glow) 0%, transparent 70%)`,
          }}
        />
        <div className="w-32 h-32 bg-white dark:bg-amber-300 rounded-full">
          <div className="w-32 h-32 bg-black rounded-full [animation:ntd_1s_forwards] dark:[animation:dtn_1s_forwards]"></div>
        </div>
      </div>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
        <Sparkle className="w-4 h-4" />
        <span>Experience the magic of day and night</span>
      </div>
      <h1 className="text-5xl font-bold mb-4 mt-6">Next Theme Switcher</h1>
      <p className="text-lg text-gray-600 mb-4">
        A simple, customizable Theme Switcher component for React projects.
      </p>
      <ThemeSwitcher theme={theme} onThemeChange={setTheme} />
      <Link href="/docs">
        <Button className="mt-6 inline-flex cursor-pointer">Document</Button>
      </Link>
    </section>
  );
};

export default Hero;
