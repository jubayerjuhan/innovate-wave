import React from "react";
import styles from "./TextArea.module.scss";
import { TextAreaProps } from "./types";

const TextArea = ({ placeHolder }: TextAreaProps) => {
  return (
    <textarea
      name=""
      id=""
      className={styles.textArea}
      placeholder={placeHolder}
    />
  );
};

export default TextArea;
