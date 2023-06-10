import React from "react";
import styles from "./TextArea.module.scss";
import { TextAreaProps } from "./types";

const TextArea = ({ placeHolder, ...props }: TextAreaProps) => {
  return (
    <textarea
      name=""
      id=""
      className={styles.textArea}
      placeholder={placeHolder}
      {...props}
    />
  );
};

export default TextArea;
