import * as React from "react";
import { Builder } from "@builder.io/react";
import { gruvboxDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { withTooltip } from "./with-tooltip";

const CodeBlock = (props) => (
  <SyntaxHighlighter language={props.language} style={gruvboxDark}>
    {props.code}
  </SyntaxHighlighter>
);

// Wrap our component with a tooltip pointing to it's source code
const DemoCodeBlock = withTooltip(
  "https://github.com/BuilderIO/demo-editor/blob/main/src/components/code-block.js",
  CodeBlock
);

// Learn about registering custom components: https://www.builder.io/c/docs/custom-components-intro
Builder.registerComponent(DemoCodeBlock, {
  name: "CodeBlock",
  image: 'https://tabler-icons.io/static/tabler-icons/icons-png/code-plus.png',
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
