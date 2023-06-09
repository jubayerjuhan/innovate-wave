import FeattureSubheading from "@/components/ui/FeatureSubheading/FeattureSubheading";
import React, { useEffect } from "react";
import styles from "./sectionHeading.module.scss";

const SeactionHeading = ({
  subtitle,
  title,
  orientation,
  description,
  small,
}: SectionHeadingType) => {
  return (
    <div
      className={`${styles.sectionHeading} ${
        orientation === "middle" && styles.center
      } ${small ? styles.smallHeading : ""}`}
    >
      <FeattureSubheading title={subtitle} />
      <h2 className={styles.heading}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default SeactionHeading;
