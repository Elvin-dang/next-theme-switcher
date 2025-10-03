"use client";

import { Lightbulb, MoonIcon, Settings2 } from "lucide-react";
import { useTheme } from "next-themes";
import { ThemeSwitcher } from "next-theme-switcher";
import "next-theme-switcher/styles";
import Hero from "./_components/hero";
import Installation from "./_components/installation";
import Footer from "./_components/footer";
import { CelestialBackground } from "@/components/celestial-background";
import Usage from "./_components/usage";
import Appearance from "./_components/appearance";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="m-0 p-0 pt-24 px-4 md:px-2 min-h-[calc(100vh-64px)]">
      <CelestialBackground />
      <main className="max-w-[640px] my-0 m-auto flex flex-col gap-20">
        <Hero />
        <Installation />
        <Usage />
        <Appearance />
      </main>

      <Footer />
    </div>
  );
}
