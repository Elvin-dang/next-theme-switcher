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
import { ThemeLayout, ThemeSwitcher } from "next-theme-switcher";
import { useTheme } from "next-themes";
import React from "react";

const Layout = () => {
  const { theme, setTheme } = useTheme();
  const [layout, setLayout] = React.useState<ThemeLayout>(["system", "light", "dark"]);
  const [activeTab, setActiveTab] = React.useState<string>("Preview");

  const codePage = [
    {
      language: "tsx",
      filename: "page.tsx",
      code: `import { useTheme } from "next-themes";
import { ThemeSwitcher } from "next-theme-switcher";

function Page() {
  const { theme, setTheme } = useTheme();

  return (
    <ThemeSwitcher 
      theme={theme} 
      onThemeChange={setTheme} 
      layout={${JSON.stringify(layout)}} 
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
          <ThemeSwitcher theme={theme} onThemeChange={setTheme} layout={layout} />
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
      <h2 className="text-xl font-semibold mb-2">🗂️ Layout</h2>
      <p className="mb-4 text-sm">
        Control the order of theme options by passing the <code className="font-bold">layout</code>{" "}
        prop to the <code className="font-bold">ThemeSwitcher</code>. This lets you decide how{" "}
        <code className="font-bold">light</code>, <code className="font-bold">dark</code>, and{" "}
        <code className="font-bold">system</code> modes are arranged in the switcher.
      </p>

      <Snippet onValueChange={setActiveTab} value={activeTab} className="h-[400px]">
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

export default Layout;
