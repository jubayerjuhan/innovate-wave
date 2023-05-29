import { interFont } from "@/pages/_app";
import React from "react";
import styles from "./textBlock.module.scss";

const TextBlock = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={`${interFont.className} ${styles.textBlock} ${className}`}>
      {children}
    </p>
  );
};

export default TextBlock;
