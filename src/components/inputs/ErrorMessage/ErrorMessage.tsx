import React from "react";
import styles from "./ErrorMessage.module.scss";

const ErrorMessage = ({ message }: { message?: string }) => {
  return <p className={styles.errorMessage}>{message}</p>;
};

export default ErrorMessage;
