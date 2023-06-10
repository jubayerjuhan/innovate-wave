import SeactionHeading from "@/components/headings/SectionHeading/SeactionHeading";
import React from "react";
import styles from "./contactUsSection.module.scss";
import predefinedStyles from "../../../../styles/predefined.module.scss";
import { ContactUsSectionProps } from "./types";
import ContactUsForm from "../ContactUsForm/ContactUsForm";
import ContactCard from "@/components/cards/ContactCard/ContactCard";

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
      <div className={styles.contactUsFormWrapper}>
        <ContactUsForm contactUsForm={contactUs.contactUsForm} />
        <ContactCard />
      </div>
    </div>
  );
};

export default ContactUsSection;
