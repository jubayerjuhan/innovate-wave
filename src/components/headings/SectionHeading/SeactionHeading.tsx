import FeattureSubheading from "@/components/ui/FeatureSubheading/FeattureSubheading";
import React, { useEffect } from "react";
import styles from "./sectionHeading.module.scss";

const SeactionHeading = ({
  subtitle,
  title,
  orientation,
}: SectionHeadingType) => {
  return (
    <div
      className={`${styles.sectionHeading} ${
        orientation === "middle" && styles.center
      }`}
    >
      <FeattureSubheading title={subtitle} />
      <h2 className={styles.heading}>{title}</h2>
    </div>
  );
};

export default SeactionHeading;
