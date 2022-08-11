import React, { useState } from "react";
import { Builder } from "@builder.io/react";
import Image from "next/image";
import styles from "../../styles/ProductCard.module.css";

export default function ProductCard(props) {
  const [productDetailsOpen, setProductDetailsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={props.productImage || "/svgs/yellow-smiley-blob.svg"}
          height={145}
          width={160}
        />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productTitle}>{props.productTitle}</div>
        <div className={styles.productPrice}>{props.productPrice}</div>

        <div className={styles.divider} />

        <div
          className={styles.productDetails}
          onClick={() => setProductDetailsOpen(!productDetailsOpen)}
        >
          Details
          <div
            className={styles.dropdown}
            style={productDetailsOpen ? { transform: "rotate(135deg)" } : {}}
          />
        </div>

        <div
          className={styles.productDescription}
          style={productDetailsOpen ? { maxHeight: 600 } : {}}
        >
          <p>{props.productDescription}</p>
        </div>

        <div className={styles.divider} />

        <button
          className={styles.productButton}
          style={props.buttonColor ? { background: props.buttonColor } : {}}
        >
          {props.buttonText}
        </button>
      </div>
    </div>
  );
}

Builder.registerComponent(ProductCard, {
  name: "ProductCard",
  inputs: [
    {
      name: "productTitle",
      type: "string",
      defaultValue: "Your Product Details Here",
    },
    {
      name: "productDescription",
      type: "longText",
      defaultValue:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "productPrice",
      type: "string",
      defaultValue: "$20 / month",
      helperText:
        "You can add validation to inputs, so if you enter a string without a number this will show a warning.",
      regex: {
        pattern: /\d/,
        options: "g",
        message: "Price must contain a number (e.g. $20)",
      },
    },
    { name: "buttonColor", type: "color", defaultValue: "#1a73e8" },
    {
      name: "buttonText",
      type: "string",
      defaultValue: "Buy now",
      enum: ["Buy now", "Let's go", "Add to cart"],
    },

    {
      name: "productImage",
      type: "file",
      allowedFileTypes: ["jpg", "png", "svg"],
      defaultValue: "/svgs/yellow-smiley-blob.svg",
    },
  ],
});
