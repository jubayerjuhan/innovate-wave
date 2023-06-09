import React from "react";
import styles from "./contactUsForm.module.scss";
import { ContactUsFormProps } from "./types";
import TextInputField from "@/components/inputs/TextInputField/TextInputField";
import Button from "@/components/ui/Button/Button";
import TextArea from "@/components/inputs/TextArea/TextArea";
import SelectField from "@/components/inputs/SelectField/SelectField";
import { useForm, ValidationError } from "@formspree/react";

const ContactUsForm = ({ contactUsForm }: ContactUsFormProps) => {
  const [state, handleSubmit] = useForm("xayzgzbk");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className={styles.contactUsForm}>
      <h4 className={styles.title}>{contactUsForm.title}</h4>
      <form action="" className={styles.contactForm}>
        <div className={styles.twoByTwoGrid}>
          {contactUsForm.fields.slice(0, 4).map((field, index) => {
            if (field.fieldType === "select")
              return (
                <SelectField
                  options={field.options}
                  key={field._key}
                  name={field.fieldName}
                  placeholder={field.fieldPlaceholder}
                />
              );
            return (
              <TextInputField
                name={field.fieldName}
                placeholder={field.fieldPlaceholder}
                type="text"
                key={index}
              />
            );
          })}
        </div>
        {contactUsForm.fields.slice(4, 5).map((field) => (
          <div className={styles.messageAreaWrapper} key={field._key}>
            <TextArea placeHolder={field.fieldPlaceholder} />
          </div>
        ))}
      </form>
      <div className={styles.buttonWrapper}>
        <Button title="Submit Your Issue" size="large" fullWidth />
      </div>
    </div>
  );
};

export default ContactUsForm;
