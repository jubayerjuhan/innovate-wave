import React from "react";
import styles from "./featureSubheading.module.scss";
import Image from "next/image";
import subheadingImage from "../../../assets/vectors/subheading-vector.svg";

const FeattureSubheading = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div className={`${styles.featureSubHeading} ${className}`}>
      <Image src={subheadingImage} alt="Feature Subheading Image" />
      <h6 className={styles.featureSubheadingText}>{title}</h6>
    </div>
  );
};

export default FeattureSubheading;
