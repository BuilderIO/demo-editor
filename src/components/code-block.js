import * as React from "react";
import { Builder } from "@builder.io/react";
import { gruvboxDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

const CodeBlock = (props) => (
  <SyntaxHighlighter language={props.language} style={gruvboxDark}>
    {props.code}
  </SyntaxHighlighter>
);

Builder.registerComponent(CodeBlock, {
  name: "Code Block",
  inputs: [
    {
      name: "code",
      type: "longText",
      defaultValue: "const incr = num => num + 1",
    },
    {
      name: "language",
      type: "string",
      defaultValue: "javascript",
    },
  ],
});
