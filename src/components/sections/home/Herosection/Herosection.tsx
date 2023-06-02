import React from "react";
import Button from "@/components/ui/Button/Button";
import Image from "next/image";
import heroImage from "../../../../assets/heroImage.png";
import TextBlock from "@/components/ui/Text/TextBlock/TextBlock";
import styles from "./herosection.module.scss";
import { HeroSection } from "@/types/homepage/heroSection";
import { HerosectionProps } from "./types";

const Herosection = ({}: HerosectionProps) => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.infoSection}>
        <h2 className={styles.heroHeading}>
          <span>Grow Your </span>
          business start marketing
        </h2>
        <TextBlock className={styles.heroDescription}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt.
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
