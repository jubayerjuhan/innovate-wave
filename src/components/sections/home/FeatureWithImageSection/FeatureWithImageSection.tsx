import React from "react";
import Button from "@/components/ui/Button/Button";
import Image from "next/image";
import TextBlock from "@/components/ui/Text/TextBlock/TextBlock";
import styles from "./featureWithImageSection.module.scss";
import Subheading from "@/components/ui/FeatureSubheading/FeattureSubheading";
import { FeatureSectionProps } from "./types";
import FeatureBullets from "../FeatureBullets/FeatureBullets";

const FeatureWithImageSection = ({
  reverse,
  bulletType,
  bullets,
  image,
  heading,
  subHeading,
  description,
}: FeatureSectionProps) => {
  return (
    <div
      className={`${styles.featureSection} ${reverse && styles.rowColReverse}`}
    >
      <div className={styles.infoSection}>
        <Subheading title={subHeading} />
        <h2 className={styles.featureHeading}>{heading}</h2>
        <TextBlock className={styles.featureDescription}>
          {description}
        </TextBlock>
        <FeatureBullets bulletType={bulletType} bullets={bullets} />
        <Button size="large" title="Get Started Now" />
      </div>
      <div className={`${styles.imageSection} ${reverse && styles.imgReverse}`}>
        <Image src={image} alt="Hero Image" className={styles.featureImage} />
      </div>
    </div>
  );
};

export default FeatureWithImageSection;
