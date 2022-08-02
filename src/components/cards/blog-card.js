import React, { useState } from "react";
import { Builder } from "@builder.io/react";
import Image from "next/image";
import styles from "../../styles/BlogCard.module.css";

export default function BlogCard(props) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/svgs/orange-palette-blob.svg" height={145} width={160} />
      </div>
      <div className={styles.blogDetails}>
        <div class={styles.blogHeading}>
          <span className={styles.headingText}>Best Practices</span>
          <span className={styles.blogLength}>5 minute read</span>
        </div>
        <div className={styles.blogTitle}>
          Accelerate and unlock headless CMS
        </div>

        <div className={styles.blogDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>

        <div className={styles.divider} />

        <div className={styles.byLineContainer}>
          <span className={styles.byLine}>
            <img src="https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F91d681a0a2304c42b07bbb2f54af399d" />
            Jane Builder
          </span>

          <span className={styles.publishDate}>Yesterday</span>
        </div>
      </div>
    </div>
  );
}

Builder.registerComponent(BlogCard, {
  name: "BlogCard",
});
