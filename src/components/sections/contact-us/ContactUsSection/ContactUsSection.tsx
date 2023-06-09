import SeactionHeading from "@/components/headings/SectionHeading/SeactionHeading";
import React from "react";
import styles from "./contactUsSection.module.scss";
import predefinedStyles from "../../../../styles/predefined.module.scss";

const ContactUsSection = () => {
  return (
    <div
      className={`${predefinedStyles.sectionPadding} ${styles.contactUsSection}`}
    >
      <SeactionHeading
        orientation="middle"
        subtitle="Contact Us"
        title="Get in touch with us for more information"
        description="Get in touch with us for more information Get in touch with us for more information Get in touch with us for more information"
        small
      />
    </div>
  );
};

export default ContactUsSection;
