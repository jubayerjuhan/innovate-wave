import styles from "./TextInputField.module.scss";
import { TextInputField } from "./types";
import React, { Ref } from "react";

const TextInputField = ({
  style,
  placeholder,
  name,
  ...props
}: TextInputField) => {
  return (
    <div className={styles.inputGroup} style={style}>
      <input
        className={styles.formControl}
        placeholder={placeholder}
        name={name}
        {...props}
      />
    </div>
  );
};

export default TextInputField;
