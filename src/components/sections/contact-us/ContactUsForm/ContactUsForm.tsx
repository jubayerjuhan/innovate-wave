import React from "react";
import styles from "./contactUsForm.module.scss";
import TextInputField from "@/components/inputs/TextInputField/TextInputField";
import Button from "@/components/ui/Button/Button";
import TextArea from "@/components/inputs/TextArea/TextArea";
import SelectField from "@/components/inputs/SelectField/SelectField";
import { useForm as FormSpree } from "@formspree/react";
import { ContactUsFormProps } from "./types";
import { useFormik } from "formik";
import contactUsValidation from "@/constants/schemas/formValidation/contactUsValidationSchema";
import LottieAnimation from "@/components/animations/LottieAnimation";
import mailSendAnimation from "../../../../assets/animations/mailsend-done.json";

const ContactUsForm = ({ contactUsForm }: ContactUsFormProps) => {
  const [state, handleFormSpreeSubmit] = FormSpree("xayzgzbk");

  const formik = useFormik({
    initialValues: {},
    validationSchema: contactUsValidation,
    onSubmit: (values) => handleFormSubmit(values),
    validateOnChange: false,
  });

  const handleFormSubmit = (values: any) => {
    handleFormSpreeSubmit(values);
  };

  return (
    <div className={styles.contactUsForm}>
      <h4 className={styles.title}>{contactUsForm.title}</h4>
      {state.succeeded ? (
        <LottieAnimation
          message="Your Message Has Been Sent"
          animationFile={mailSendAnimation}
          buttonTitle="Go To Homepage"
        />
      ) : (
        <>
          <form action="" className={styles.contactForm}>
            <div className={styles.twoByTwoGrid}>
              {contactUsForm.fields.slice(0, 4).map((field, index) => {
                if (field.fieldType === "select")
                  return (
                    <SelectField
                      id={field.fieldName}
                      options={field.options}
                      key={field._key}
                      name={field.fieldName}
                      placeholder={field.fieldPlaceholder}
                      onChange={formik.handleChange}
                      errorMessage={
                        formik.errors[
                          field.fieldName as keyof typeof formik.errors
                        ]
                      }
                    />
                  );
                return (
                  <TextInputField
                    id={field.fieldName}
                    key={index}
                    name={field.fieldName}
                    placeholder={field.fieldPlaceholder}
                    type="text"
                    onChange={formik.handleChange}
                    errorMessage={
                      formik.errors[
                        field.fieldName as keyof typeof formik.errors
                      ]
                    }
                  />
                );
              })}
            </div>
            {contactUsForm.fields.slice(4, 5).map((field) => (
              <div className={styles.messageAreaWrapper} key={field._key}>
                <TextArea
                  id={field.fieldName}
                  key={field._key}
                  placeHolder={field.fieldPlaceholder}
                  onChange={formik.handleChange}
                  errorMessage={
                    formik.errors[field.fieldName as keyof typeof formik.errors]
                  }
                />
              </div>
            ))}
          </form>
          <div
            className={styles.buttonWrapper}
            onClick={() => formik.handleSubmit()}
          >
            <Button title="Submit Your Issue" size="large" fullWidth />
          </div>
        </>
      )}
    </div>
  );
};

export default ContactUsForm;
