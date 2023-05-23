import React from "react";
import styles from "./button.module.scss";

const Button = ({
  title,
  variant = "primary",
  size = "medium",
}: ButtonProps) => {
  let buttonClasses = styles.button;

  // varying on color
  if (variant === "secondary") {
    buttonClasses = styles.secondaryButton;
  }

  // varying on size
  if (size === "medium") {
    buttonClasses += ` ${styles.button}`;
  } else if (size === "large") {
    buttonClasses += ` ${styles.largeButton}`;
  }
  return <button className={buttonClasses}>{title}</button>;
};

export default Button;
