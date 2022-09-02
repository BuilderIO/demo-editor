import React from "react";
import { Builder } from "@builder.io/react";
import styles from "../../styles/TestimonialCard.module.css";
import { withTooltip } from "../with-tooltip";

export default function TestimonialCard(props) {
  return (
    <div className={styles.container}>
      <div className={styles.quote}>
        <img src="https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F211041d0536c4f1cb1c19e8007c8cd7c" />
      </div>
      <div className={styles.testimonialDetails}>
        <p>{props.testimonial}</p>
        <div className={styles.divider} />
        <div className={styles.customer}>{props.customer}</div>
        <div className={styles.customerDetails}>{props.customerDetails}</div>
      </div>
    </div>
  );
}

// Wrap our component with a tooltip pointing to it's source code
const DemoTestimonialCard = withTooltip(
  "https://github.com/BuilderIO/demo-editor/blob/main/src/components/cards/testimonial-card.js",
  TestimonialCard
);

// Learn about registering custom components: https://www.builder.io/c/docs/custom-components-intro
Builder.registerComponent(DemoTestimonialCard, {
  name: "TestimonialCard",
  inputs: [
    {
      name: "testimonial",
      type: "longText",
      defaultValue:
        "With Builder, we’re able to see the same quality results that were only previously possible through reliance on our engineering team, who now have capacity to tackle higher-value projects.",
    },
    {
      name: "customer",
      type: "string",
      defaultValue: "Everlane",
      enum: [
        "Everlane",
        "Alo Yoga",
        "Afterpay",
        "Zapier",
        "Vista",
        "Harry's",
        "Chubbies",
        "Atoms",
      ],
    },

    {
      name: "customerDetails",
      type: "string",
      defaultValue: "DAVE KING, CTO",
    },
  ],
});
