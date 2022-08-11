import React from "react";
import { Builder } from "@builder.io/react";
import styles from "../../styles/VideoCard.module.css";

export default function VideoCard(props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.title}</div>
      <video className={styles.video} controls src={props.video}></video>
    </div>
  );
}

Builder.registerComponent(VideoCard, {
  name: "VideoCard",
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
