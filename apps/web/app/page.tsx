"use client";

import { Lightbulb, MoonIcon, Settings2 } from "lucide-react";
import { useTheme } from "next-themes";
import { ThemeSwitcher } from "next-theme-switcher";
import Hero from "./_components/hero";
import Installation from "./_components/installation";
import Footer from "./_components/footer";
import { CelestialBackground } from "@/components/celestial-background";
import Usage from "./_components/usage";
import Appearance from "./_components/appearance";
import Layout from "./_components/layout";
import Icon from "./_components/icon";
import Custom from "./_components/custom";

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
        <Layout />
        <Icon />
        <Custom />
      </main>

      <Footer />
    </div>
  );
}
