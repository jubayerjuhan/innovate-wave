import Award from "@/components/cards/Award/Award";
import React from "react";
import predefinedStyles from "../../../../styles/predefined.module.scss";
import styles from "./awardsSection.module.scss";
import PageHeading from "@/components/headings/PageHeading/PageHeading";
import SeactionHeading from "@/components/headings/SectionHeading/SeactionHeading";

const AwardsSection = () => {
  return (
    <div className={`${predefinedStyles.sectionPadding} `}>
      <div className={`${styles.awardWrapper}`}>
        <Award />
      </div>
    </div>
  );
};

export default AwardsSection;
