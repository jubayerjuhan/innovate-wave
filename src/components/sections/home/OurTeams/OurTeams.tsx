import React from "react";
import predefinedStyles from "../../../../styles/predefined.module.scss";
import styles from "./teams.module.scss";
import TeamMember from "@/components/cards/TeamMember/TeamMember";
import SeactionHeading from "@/components/headings/SectionHeading/SeactionHeading";
import { OurTeamsSection, OurTeamsSectionProps } from "./types";

const OurTeams = ({ ourTeamsSection }: OurTeamsSectionProps) => {
  return (
    <div className={predefinedStyles.sectionPadding}>
      <SeactionHeading
        orientation={ourTeamsSection.orientation}
        subtitle={ourTeamsSection.subtitle}
        title={ourTeamsSection.title}
        description={ourTeamsSection.description}
      />
      <div className={styles.teamMembers}>
        {ourTeamsSection.teamMembers.map((teamMember, index) => (
          <TeamMember teamMember={teamMember} key={index} />
        ))}
      </div>
    </div>
  );
};

export default OurTeams;
