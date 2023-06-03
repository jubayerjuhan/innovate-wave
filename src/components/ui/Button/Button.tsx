import React from "react";
import { BsArrowRight } from "react-icons/bs";
import styles from "./button.module.scss";

const Button = ({
  title,
  color,
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
  return (
    <button
      className={`${buttonClasses} ${color === "orange" && styles.orangeColor}`}
    >
      <p>{title}</p>
      <BsArrowRight />
    </button>
  );
};

export default Button;
