import React, { useState } from "react";
import { Builder } from "@builder.io/react";
import Image from "next/image";
import styles from "../../styles/BlogCard.module.css";
import { withTooltip } from "../with-tooltip";

export default function BlogCard(props) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={props.thumbnail} />
      </div>
      <div className={styles.blogDetails}>
        <div className={styles.blogHeading}>
          <span className={styles.headingText}>{props.tag}</span>
          <span className={styles.blogLength}>
            {props.estimatedTime} minute read
          </span>
        </div>
        <div className={styles.blogTitle}>{props.title}</div>

        <div
          className={styles.blogDescription}
          dangerouslySetInnerHTML={{ __html: props.body }}
        ></div>

        <div className={styles.divider} />

        <div className={styles.byLineContainer}>
          <span className={styles.byLine}>
            <img src={props.authorImage} />
            {props.author}
          </span>

          <span className={styles.publishDate}>{props.publishDate}</span>
        </div>
      </div>
    </div>
  );
}

// Wrap our component with a tooltip pointing to it's source code
const DemoBlogCard = withTooltip(
  "https://github.com/BuilderIO/demo-editor/blob/main/src/components/cards/blog-card.js",
  BlogCard
);

// Learn about registering custom components: https://www.builder.io/c/docs/custom-components-intro
Builder.registerComponent(DemoBlogCard, {
  name: "BlogCard",
  image: 'https://tabler-icons.io/static/tabler-icons/icons-png/article.png',
  inputs: [
    {
      name: "thumbnail",
      type: "file",
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2F1f3bf1d766354f32ba70dde440fcef97%2F75e3e53ecc4a44b795592a4fbe57f702",
      allowedFileTypes: ["png", "jpg", "svg"],
    },

    {
      name: "title",
      type: "string",
      defaultValue: "Guide Your Customers with Best Practices",
    },
    { name: "tag", type: "string", defaultValue: "Best Practices" },
    { name: "estimatedTime", type: "number", defaultValue: 5 },

    {
      name: "body",
      type: "richText",
      defaultValue:
        "Empower  your teams to leverage your code components as building blocks to unlock their creativity. Create content for any experience, channel, and screen. A drag and drop experience makes building content easy and fast for your teams.",
    },
    { name: "author", type: "string", defaultValue: "Jane Builder" },
    {
      name: "authorImage",
      type: "file",
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F91d681a0a2304c42b07bbb2f54af399d",
      allowedFileTypes: ["png", "jpg", "svg"],
    },
    { name: "publishDate", type: "string", defaultValue: "Yesterday" },
  ],
});
