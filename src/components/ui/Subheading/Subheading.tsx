import React from "react";
import styles from "./subheading.module.scss";
import Image from "next/image";
import subheadingImage from "../../../assets/vectors/subheading-vector.svg";

const Subheading = ({ title }: { title: string }) => {
  return (
    <div className={styles.featureSubHeading}>
      <Image src={subheadingImage} alt="Subheading Image" />
      <h6 className={styles.featureSubheadingText}>{title}</h6>
    </div>
  );
};

export default Subheading;
