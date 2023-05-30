import React from "react";
import Button from "@/components/ui/Button/Button";
import Image from "next/image";
import featureImage from "../../../../assets/element-72.jpeg";
import TextBlock from "@/components/ui/Text/TextBlock/TextBlock";
import styles from "./featureWithImageSection.module.scss";
import Subheading from "@/components/ui/FeatureSubheading/FeattureSubheading";
import { FeatureSectionProps } from "./types";
import FeatureBullet from "../FeatureBullet/FeatureBullet";

const FeatureWithImageSection = ({
  reverse,
  bulletType,
}: FeatureSectionProps) => {
  return (
    <div
      className={`${styles.featureSection} ${reverse && styles.rowColReverse}`}
    >
      <div className={styles.infoSection}>
        <Subheading title="Superioty" />
        <h2 className={styles.featureHeading}>
          <span>Grow Your </span>
          <br />
          business start marketing
        </h2>
        <TextBlock className={styles.featureDescription}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt.
        </TextBlock>
        <FeatureBullet bulletType="iconOnly" />
        <Button size="large" title="Get Started Now" />
      </div>
      <div className={`${styles.imageSection} ${reverse && styles.imgReverse}`}>
        <Image
          src={featureImage}
          alt="Hero Image"
          className={styles.featureImage}
        />
      </div>
    </div>
  );
};

export default FeatureWithImageSection;
