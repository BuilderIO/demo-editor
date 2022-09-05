import React from "react";
import { Builder } from "@builder.io/react";
import styles from "../../styles/VideoCard.module.css";
import { withTooltip } from "../with-tooltip";

export default function VideoCard(props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.title}</div>
      <video className={styles.video} controls src={props.video}></video>
    </div>
  );
}

// Wrap our component with a tooltip pointing to it's source code
const DemoVideoCard = withTooltip(
  "https://github.com/BuilderIO/demo-editor/blob/main/src/components/cards/video-card.js",
  VideoCard
);

// Learn about registering custom components: https://www.builder.io/c/docs/custom-components-intro
Builder.registerComponent(DemoVideoCard, {
  name: "VideoCard",
  image: 'https://tabler-icons.io/static/tabler-icons/icons-png/brand-youtube.png',
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Make Your Product the Star of the Show",
    },
    {
      name: "video",
      type: "file",
      allowedFileTypes: ["mp4"],
      defaultValue:
        "https://cdn.builder.io/o/assets%2F21cf4c80eb1941fab464c19faa3a1c42%2F0ad5500130f34806984c24f2003d1437%2Fcompressed?apiKey=21cf4c80eb1941fab464c19faa3a1c42&token=0ad5500130f34806984c24f2003d1437&alt=media&optimized=true",
    },
  ],
});
