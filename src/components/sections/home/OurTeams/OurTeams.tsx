import React from "react";
import predefinedStyles from "../../../../styles/predefined.module.scss";
import styles from "./teams.module.scss";
import TeamMember from "@/components/cards/TeamMember/TeamMember";
import SeactionHeading from "@/components/headings/SectionHeading/SeactionHeading";

const OurTeams = () => {
  return (
    <div className={predefinedStyles.sectionPadding}>
      <SeactionHeading
        orientation="middle"
        subtitle="Team"
        title="Meet our genius fighter"
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />
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
