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
import { ThemeLayout, ThemeOption, ThemeSwitcher } from "next-theme-switcher";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@repo/ui/lib/utils";

const SortableTheme = ({ theme }: { theme: ThemeOption }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: theme });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const isCursorGrabbing = attributes["aria-pressed"];

  return (
    <div
      ref={setNodeRef}
      style={style}
      key={theme}
      className={cn(
        "cursor-grab flex-1 bg-background dark:bg-gray-700 border rounded-md flex items-center justify-center py-1 select-none",
        isCursorGrabbing && "cursor-grabbing"
      )}
      {...attributes}
      {...listeners}
    >
      {theme}
    </div>
  );
};

const Layout = () => {
  const { theme, setTheme } = useTheme();
  const [layout, setLayout] = useState<ThemeLayout>(["system", "light", "dark"]);
  const [activeTab, setActiveTab] = useState<string>("Preview");
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

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

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active && over && active.id !== over.id) {
      setLayout((prevItems) => {
        const oldIndex = prevItems.findIndex((item) => item === active.id);
        const newIndex = prevItems.findIndex((item) => item === over.id);

        return arrayMove(prevItems, oldIndex, newIndex) as ThemeLayout;
      });
    }
  }

  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">🗂️ Layout</h2>
      <p className="mb-4 text-sm">
        Control the order of theme options by passing the <code className="font-bold">layout</code>{" "}
        prop to the <code className="font-bold">ThemeSwitcher</code>. This lets you decide how{" "}
        <code className="font-bold">light</code>, <code className="font-bold">dark</code>, and{" "}
        <code className="font-bold">system</code> modes are arranged in the switcher.
      </p>

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={layout} strategy={horizontalListSortingStrategy}>
          <div className="flex space-x-2 w-full justify-between p-2 mb-2 bg-foreground/10 rounded-lg border touch-none">
            {layout.map((theme) => (
              <SortableTheme key={theme} theme={theme} />
            ))}
          </div>
        </SortableContext>
      </DndContext>

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
