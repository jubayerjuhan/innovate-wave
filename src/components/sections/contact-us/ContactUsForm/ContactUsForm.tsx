import React from "react";
import styles from "./contactUsForm.module.scss";
import { ContactUsFormProps } from "./types";

const ContactUsForm = ({ contactUsForm }: ContactUsFormProps) => {
  return (
    <div className={styles.contactUsForm}>
      <h4 className={styles.title}>{contactUsForm.title}</h4>
      <form action="" className={styles.contactForm}></form>
    </div>
  );
};

export default ContactUsForm;
