"use client";

import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import {
  BundledLanguage,
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockItem,
} from "@repo/ui/components/ui/shadcn-io/code-block";
import {
  Snippet,
  SnippetCopyButton,
  SnippetHeader,
  SnippetTabsContent,
  SnippetTabsList,
  SnippetTabsTrigger,
} from "@repo/ui/components/ui/shadcn-io/snippet";
import { GapOption, SizeOption, ThemeSwitcher } from "next-theme-switcher";
import { useTheme } from "nextra-theme-docs";
import React from "react";

const Appearance = () => {
  const { theme, setTheme } = useTheme();
  const [size, setSize] = React.useState<SizeOption>("medium");
  const [scale, setScale] = React.useState<number>(1);
  const [borderRadius, setBorderRadius] = React.useState<number>(5);
  const [gap, setGap] = React.useState<GapOption>(1);
  const [activeTab, setActiveTab] = React.useState<string>("Preview");

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
    <ThemeSwitcher 
      theme={theme} 
      onThemeChange={setTheme} 
      size="${size}"
      scale={${scale}} 
      borderRadius={${borderRadius}} 
      gap={${gap}} 
    />
  );
}`,
    },
  ];

  const tabs = [
    {
      label: "Preview",
      component: (
        <div className="h-full flex items-center justify-center">
          <ThemeSwitcher
            theme={theme}
            onThemeChange={setTheme}
            size={size}
            scale={scale}
            borderRadius={borderRadius}
            gap={gap}
          />
        </div>
      ),
    },
    {
      label: "Code",
      component: (
        <CodeBlock data={codePage} defaultValue={codePage[0]?.language}>
          <CodeBlockBody>
            {(item) => (
              <CodeBlockItem key={item.language} value={item.language}>
                <CodeBlockContent language={item.language as BundledLanguage}>
                  {item.code}
                </CodeBlockContent>
              </CodeBlockItem>
            )}
          </CodeBlockBody>
        </CodeBlock>
      ),
    },
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">✨ Appearance</h2>
      <p className="mb-4 text-sm">
        Customize the appearance of your theme switcher by passing props like{" "}
        <code className="font-bold">size</code>, <code className="font-bold">scale</code>,{" "}
        <code className="font-bold">border-radius</code>, and <code className="font-bold">gap</code>{" "}
        to the <code className="font-bold">ThemeSwitcher</code> component.
      </p>
      <div className="flex flex-col gap-3 mb-6">
        <div>
          <h1 className="mb-1">Sizes</h1>
          <div className="flex justify-between gap-2">
            <div className="flex gap-2">
              <Button
                variant={size === "small" ? "default" : "outline"}
                onClick={() => setSize("small")}
              >
                small
              </Button>
              <Button
                variant={size === "medium" ? "default" : "outline"}
                onClick={() => setSize("medium")}
              >
                medium <p className="opacity-50">(default)</p>
              </Button>
              <Button
                variant={size === "large" ? "default" : "outline"}
                onClick={() => setSize("large")}
              >
                large
              </Button>
            </div>
            <Button
              className="cursor-pointer"
              variant="secondary"
              onClick={() => {
                setSize("medium");
                setScale(1);
                setBorderRadius(5);
                setGap(1);
              }}
            >
              Reset
            </Button>
          </div>
        </div>
        <div className="flex gap-4 justify-between">
          <div>
            <h1 className="mb-1">Scale</h1>
            <div className="flex gap-1 items-end justify-start">
              <p className="text-sm opacity-50">X</p>
              <Input
                type="number"
                min={0}
                value={scale}
                className="w-18"
                onChange={(e) => setScale(Number(e.target.value))}
              />
            </div>
          </div>
          <div>
            <h1 className="mb-1">Border Radius</h1>
            <div className="flex gap-1 items-end justify-start">
              <Input
                type="number"
                min={0}
                value={borderRadius}
                className="w-18"
                onChange={(e) => setBorderRadius(Number(e.target.value))}
              />
              <p className="text-sm opacity-50">px</p>
            </div>
          </div>
          <div>
            <h1 className="mb-1">Gap</h1>
            <div className="flex gap-1 items-end justify-start">
              <Input
                type="number"
                min={0}
                value={gap}
                className="w-16"
                onChange={(e) => setGap(Number(e.target.value) as GapOption)}
              />
              <p className="text-sm opacity-50">unit(s)</p>
            </div>
          </div>
        </div>
      </div>
      <Snippet onValueChange={setActiveTab} value={activeTab} className="h-[500px]">
        <SnippetHeader>
          <SnippetTabsList>
            {tabs.map((tab) => (
              <SnippetTabsTrigger key={tab.label} value={tab.label}>
                {tab.label}
              </SnippetTabsTrigger>
            ))}
          </SnippetTabsList>
          {activeTab === "Code" && (
            <SnippetCopyButton className="inline-flex ml-auto" value={codePage[0]?.code || ""} />
          )}
        </SnippetHeader>
        {tabs.map((tab) => (
          <SnippetTabsContent key={tab.label} value={tab.label}>
            {tab.component}
          </SnippetTabsContent>
        ))}
      </Snippet>
    </section>
  );
};

export default Appearance;
