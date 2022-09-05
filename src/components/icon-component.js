import React, { useState } from "react";
import Image from "next/image";
import { Builder } from "@builder.io/react";
import { IconBlob } from "./icon-blob";
import { iconUrls } from "./icons";
import styles from "../styles/Icon.module.css";
import { withTooltip } from "./with-tooltip";

const DEFAULT_FLEX_GAP = 10;

const IconComponent = (props) => {
  return (
    <div className={styles.iconContainer}>
      <div
        className={styles.blobContainer}
        style={{ gap: props.flexGap || DEFAULT_FLEX_GAP }}
      >
        {iconUrls.slice(0, props.numberOfIcons).map((icon) => (
          <IconBlob key={icon} icon={icon} />
        ))}
      </div>
      <div className={styles.heroContainer}>
        <p className={styles.heroLeadText}>The power of no code</p>
        <h3 className={styles.heroTitleText}>You’re in total control</h3>
        <p className={styles.heroDescription}>
          This is a <span style={{ color: "#F06D41" }}>react component</span>.
          It’s connected to Builder for visual editing. Changes will update live
          in the visual editor as you edit.
        </p>
        <div className={styles.heroCallout}>
          <Image src="/svgs/yellow-right-arrow.svg" height="40" width="40" />
          <p className={styles.heroCalloutText}>
            To edit the parameters, select the block, then choose Edit.
          </p>
        </div>
      </div>
    </div>
  );
};

// Wrap our component with a tooltip pointing to it's source code
const DemoIconComponent = withTooltip(
  "https://github.com/BuilderIO/demo-editor/blob/main/src/components/icon-component.js",
  IconComponent
);

// Learn about registering custom components: https://www.builder.io/c/docs/custom-components-intro
Builder.registerComponent(DemoIconComponent, {
  name: "IconComponent",
  image: "https://tabler-icons.io/static/tabler-icons/icons-png/grid-dots.png",
  inputs: [
    { name: "numberOfIcons", type: "number", defaultValue: 20 },
    { name: "flexGap", type: "number", defaultValue: DEFAULT_FLEX_GAP },
  ],
});
