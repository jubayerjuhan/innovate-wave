import React from "react";
import styles from "./featureWithImageSection.module.scss";
import Button from "@/components/ui/Button/Button";
import Image from "next/image";
import heroImage from "../../../../assets/heroImage.png";

const FeatureWithImageSection = () => {
  return (
    <div className={styles.featureSection}>
      <div className={styles.infoSection}>
        <h2 className={styles.featureHeading}>
          <span>Grow Your </span>
          <br />
          business start marketing
        </h2>
        <p className={styles.featureDescription}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt.
        </p>
        <Button size="large" title="Get Started Now" />
      </div>
      <div className={styles.imageSection}>
        <Image
          src={heroImage}
          alt="Hero Image"
          className={styles.featureImage}
        />
      </div>
    </div>
  );
};

export default FeatureWithImageSection;
