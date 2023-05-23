import React from "react";
import styles from "./button.module.scss";

const Button = ({ title, varient = "primary" }: ButtonProps) => {
  return (
    <button
      className={`${
        varient === "primary" ? styles.button : styles.secondaryButton
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
