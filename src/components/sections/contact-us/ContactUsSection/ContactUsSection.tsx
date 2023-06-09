import SeactionHeading from "@/components/headings/SectionHeading/SeactionHeading";
import React from "react";
import styles from "./contactUsSection.module.scss";
import predefinedStyles from "../../../../styles/predefined.module.scss";
import { ContactUsSectionProps } from "./types";
import ContactUsForm from "../ContactUsForm/ContactUsForm";

const ContactUsSection = ({ contactUs }: ContactUsSectionProps) => {
  console.log(contactUs);
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
      <ContactUsForm contactUsForm={contactUs.contactUsForm} />
    </div>
  );
};

export default ContactUsSection;
