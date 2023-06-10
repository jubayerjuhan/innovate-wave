import SeactionHeading from "@/components/headings/SectionHeading/SeactionHeading";
import React from "react";
import styles from "./contactUsSection.module.scss";
import predefinedStyles from "../../../../styles/predefined.module.scss";
import { ContactUsSectionProps } from "./types";
import ContactUsForm from "../ContactUsForm/ContactUsForm";
import ContractAddress from "../ContactAddress/ContractAddress";

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
        <ContractAddress
          contactCards={contactUs.moreWays.contactCards}
          description={contactUs.moreWays.description}
          socialMediaCard={contactUs.moreWays.socialMediaCard}
          subtitle={contactUs.moreWays.subtitle}
          title={contactUs.moreWays.title}
        />
      </div>
    </div>
  );
};

export default ContactUsSection;
