import React, { useState } from "react";
import { Builder } from "@builder.io/react";
import Image from "next/image";
import styles from "../../styles/ProductCard.module.css";

export default function ProductCard(props) {
  const [productDetailsOpen, setProductDetailsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/svgs/yellow-smiley-blob.svg" height={145} width={160} />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productTitle}>Product details</div>
        <div className={styles.productPrice}>$20 / month</div>

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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
            euismod cursus tempor ac pretium laoreet eu. Mi quis et feugiat eu a
            sit pretium aliquet amet.
          </p>
        </div>

        <div className={styles.divider} />

        <button className={styles.productButton}>Let’s Go</button>
      </div>
    </div>
  );
}

Builder.registerComponent(ProductCard, {
  name: "ProductCard",
});
