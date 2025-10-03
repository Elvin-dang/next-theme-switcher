import React, { useState } from "react";
import {
  Snippet,
  SnippetCopyButton,
  SnippetHeader,
  SnippetTabsContent,
  SnippetTabsList,
  SnippetTabsTrigger,
} from "@repo/ui/components/ui/shadcn-io/snippet";

type Props = {};

const commands = [
  {
    label: "npm",
    code: "npm install next-theme-switcher",
  },
  {
    label: "yarn",
    code: "yarn add next-theme-switcher",
  },
  {
    label: "pnpm",
    code: "pnpm add next-theme-switcher",
  },
  {
    label: "bun",
    code: "bun add next-theme-switcher",
  },
];

const Installation = (props: Props) => {
  const [value, setValue] = useState(commands[0]?.label);
  const activeCommand = commands.find((command) => command.label === value);

  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">Installation</h2>
      <Snippet onValueChange={setValue} value={value}>
        <SnippetHeader>
          <SnippetTabsList>
            {commands.map((command) => (
              <SnippetTabsTrigger key={command.label} value={command.label}>
                {command.label}
              </SnippetTabsTrigger>
            ))}
          </SnippetTabsList>
          {activeCommand && (
            <SnippetCopyButton className="inline-flex" value={activeCommand.code} />
          )}
        </SnippetHeader>
        {commands.map((command) => (
          <SnippetTabsContent key={command.label} value={command.label}>
            {command.code}
          </SnippetTabsContent>
        ))}
      </Snippet>
    </section>
  );
};

export default Installation;
