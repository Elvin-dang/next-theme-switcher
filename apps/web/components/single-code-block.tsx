import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockFiles,
  CodeBlockHeader,
  CodeBlockItem,
} from "@repo/ui/components/ui/shadcn-io/code-block";
import type { BundledLanguage, CodeBlockData } from "@repo/ui/components/ui/shadcn-io/code-block";
import React from "react";

type Props = {
  data: CodeBlockData[];
  className?: string;
};

const SingleCodeBlock = ({ data, className }: Props) => {
  return (
    <CodeBlock data={data} defaultValue={data[0]?.filename} className={className}>
      <CodeBlockHeader>
        <CodeBlockFiles>
          {(item) => (
            <CodeBlockFilename key={item.filename} value={item.filename}>
              {item.filename}
            </CodeBlockFilename>
          )}
        </CodeBlockFiles>
        <CodeBlockCopyButton />
      </CodeBlockHeader>
      <CodeBlockBody>
        {(item) => (
          <CodeBlockItem key={item.filename} value={item.filename}>
            <CodeBlockContent language={item.language as BundledLanguage}>
              {item.code}
            </CodeBlockContent>
          </CodeBlockItem>
        )}
      </CodeBlockBody>
    </CodeBlock>
  );
};

export default SingleCodeBlock;
