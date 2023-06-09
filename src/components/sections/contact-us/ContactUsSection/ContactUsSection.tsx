import SeactionHeading from "@/components/headings/SectionHeading/SeactionHeading";
import React from "react";
import styles from "./contactUsSection.module.scss";
import predefinedStyles from "../../../../styles/predefined.module.scss";
import { ContactUsSectionProps } from "./types";

const ContactUsSection = ({ contactUs }: ContactUsSectionProps) => {
  return (
    <div
      className={`${predefinedStyles.sectionPadding} ${styles.contactUsSection}`}
    >
      <SeactionHeading
        orientation="middle"
        subtitle={contactUs.pageInformation.subtitle}
        title={contactUs.pageInformation.title}
        description={contactUs.pageInformation.description}
        small
      />
    </div>
  );
};

export default ContactUsSection;
