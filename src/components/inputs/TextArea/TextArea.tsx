import React from "react";
import styles from "./TextArea.module.scss";
import { TextAreaProps } from "./types";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const TextArea = ({ placeHolder, errorMessage, ...props }: TextAreaProps) => {
  return (
    <>
      <textarea
        name=""
        id=""
        className={styles.textArea}
        placeholder={placeHolder}
        {...props}
      />
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </>
  );
};

export default TextArea;
