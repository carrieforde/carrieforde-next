import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import atomOneDark from "react-syntax-highlighter/dist/cjs/styles/prism/material-dark";

import { CodeProps } from "@/components/code/types";

export const Code: React.FC<CodeProps> = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language || "jsx"} style={atomOneDark}>
      {value}
    </SyntaxHighlighter>
  );
};
