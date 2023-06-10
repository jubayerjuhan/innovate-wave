import ErrorMessage from "../ErrorMessage/ErrorMessage";
import styles from "./TextInputField.module.scss";
import { TextInputField } from "./types";
import React from "react";

const TextInputField = ({
  style,
  placeholder,
  name,
  errorMessage,
  ...props
}: TextInputField) => {
  console.log(errorMessage);
  return (
    <div className={styles.inputGroup} style={style}>
      <input
        className={styles.formControl}
        placeholder={placeholder}
        name={name}
        {...props}
      />
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

export default TextInputField;
