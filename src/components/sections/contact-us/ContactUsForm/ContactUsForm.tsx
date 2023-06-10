import React from "react";
import styles from "./contactUsForm.module.scss";
import { ContactUsFormProps } from "./types";
import TextInputField from "@/components/inputs/TextInputField/TextInputField";
import Button from "@/components/ui/Button/Button";
import TextArea from "@/components/inputs/TextArea/TextArea";
import SelectField from "@/components/inputs/SelectField/SelectField";
import { useForm as FormSpree, ValidationError } from "@formspree/react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  useFormik,
} from "formik";
const ContactUsForm = ({ contactUsForm }: ContactUsFormProps) => {
  const [state, handleSubmit] = FormSpree("xayzgzbk");
  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });

  const handleClick = () => {
    console.log("object");
  };

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
                key={index}
                name={field.fieldName}
                placeholder={field.fieldPlaceholder}
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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

      <button onClick={() => formik.submitForm()}>Submit</button>
      <div className={styles.buttonWrapper} onClick={handleClick}>
        <Button title="Submit Your Issue" size="large" fullWidth />
      </div>
    </div>
  );
};

export default ContactUsForm;
