import styles from "./TextInputField.module.scss";
import { TextInputField } from "./types";
import React, { Ref } from "react";

const TextInputField = ({ style, placeholder, name }: TextInputField) => {
  return (
    <div className={styles.inputGroup} style={style}>
      <input
        name={name}
        type="text"
        className={styles.formControl}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInputField;
