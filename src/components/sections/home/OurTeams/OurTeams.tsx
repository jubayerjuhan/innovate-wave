import React from "react";
import predefinedStyles from "../../../../styles/predefined.module.scss";
import styles from "./teams.module.scss";
import TeamMember from "@/components/cards/TeamMember/TeamMember";

const OurTeams = () => {
  return (
    <div className={predefinedStyles.sectionPadding}>
      <div className={styles.teamMembers}>
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
      </div>
    </div>
  );
};

export default OurTeams;
