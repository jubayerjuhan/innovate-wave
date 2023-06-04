export interface OurTeamsSectionProps {
  ourTeamsSection: OurTeamsSection;
}

export interface OurTeamsSection {
  teamMembers: TeamMemberTypes[];
  title: string;
  subtitle: string;
  description: string;
  orientation: "left" | "middle";
}

export interface TeamMemberTypes {
  _key: string;
  _type: string;
  teamMemberName: string;
  email: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  twitter: string;
  linkedIn: string;
  teamMemberRole: string;
}
