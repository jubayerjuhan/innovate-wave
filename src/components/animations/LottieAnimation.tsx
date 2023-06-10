import React from "react";
import Lottie from "react-lottie";
import styles from "./LottieAnimation.module.scss";
import { LottieAnimationProps } from "./types";
import Button from "../ui/Button/Button";

const LottieAnimation = ({
  message,
  animationFile,
  buttonTitle,
}: LottieAnimationProps) => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationFile,
  };

  return (
    <div className={styles.lottieAnimation}>
      <Lottie options={lottieOptions} height={300} width={300} />
      <p className={styles.message}>{message}</p>
      <Button title={buttonTitle} />
    </div>
  );
};

export default LottieAnimation;
