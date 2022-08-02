import React from "react";
import { Builder } from "@builder.io/react";
import styles from "../../styles/VideoCard.module.css";

export default function VideoCard(props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>We're Going Up From Here</div>
      <video
        className={styles.video}
        controls
        src="https://cdn.builder.io/o/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fe5d14768ef714b93a8609b8e27771c06%2Fcompressed?apiKey=YJIGb4i01jvw0SRdL5Bt&token=e5d14768ef714b93a8609b8e27771c06&alt=media&optimized=true"
      ></video>
    </div>
  );
}

Builder.registerComponent(VideoCard, {
  name: "VideoCard",
});
