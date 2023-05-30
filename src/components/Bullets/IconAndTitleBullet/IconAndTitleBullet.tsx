import React from "react";
import styles from "./IconAndTitleBullet.module.scss";
import { IconBulletProps } from "./types";
import TextBlock from "@/components/ui/Text/TextBlock/TextBlock";

const IconAndTitleBullet = ({ Icon }: IconBulletProps) => {
  return (
    <div className={styles.bullet}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} />
      </div>
      <div className={styles.bulletBody}>
        <h6 className={styles.bulletTitle}>Page Rankings</h6>
        <TextBlock className={styles.description}>
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat.
        </TextBlock>
      </div>
    </div>
  );
};

export default IconAndTitleBullet;
