import React from "react";
import Button from "@/components/ui/Button/Button";
import Image from "next/image";
import heroImage from "../../../../assets/heroImage.png";
import TextBlock from "@/components/ui/Text/TextBlock/TextBlock";
import styles from "./herosection.module.scss";
import { HeroSection } from "@/types/homepage/heroSection";
import { HerosectionProps } from "./types";

const Herosection = ({ herosection }: HerosectionProps) => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.infoSection}>
        <h2 className={styles.heroHeading}>{herosection.title}</h2>
        <TextBlock className={styles.heroDescription}>
          {herosection.description}
        </TextBlock>
        <Button size="large" title="Get Started Now" />
      </div>
      <div className={styles.imageSection}>
        <Image src={heroImage} alt="Hero Image" className={styles.heroImage} />
      </div>
    </div>
  );
};

export default Herosection;
