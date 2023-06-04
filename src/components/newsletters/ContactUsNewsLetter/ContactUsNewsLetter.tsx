import React from "react";
import predefinedStyles from "../../../styles/predefined.module.scss";
import Button from "@/components/ui/Button/Button";
import styles from "./contactUsNewsLetter.module.scss";

const ContactUsNewsLetter = () => {
  return (
    <div
      className={`${predefinedStyles.sectionPadding} ${styles.newslettersWrapper}`}
    >
      <div className={styles.newsletters}>
        <div className={styles.newslettersText}>
          <h3>Ready For Next Project?</h3>
          <h5>{`Let's Get Started`}</h5>
        </div>
        <Button title="Contact Us" color="orange" size="larger" />
      </div>
    </div>
  );
};

export default ContactUsNewsLetter;
