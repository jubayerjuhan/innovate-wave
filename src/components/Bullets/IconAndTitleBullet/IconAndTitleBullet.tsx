import React from "react";
import styles from "./IconAndTitleBullet.module.scss";
import { IconBulletProps } from "./types";
import TextBlock from "@/components/ui/Text/TextBlock/TextBlock";

const IconAndTitleBullet = ({ Icon, type, bullet }: IconBulletProps) => {
  return (
    <div className={styles.bullet}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} />
      </div>
      <div className={styles.bulletBody}>
        {type !== "iconOnly" && (
          <h6 className={styles.bulletTitle}>{bullet.title}</h6>
        )}
        <TextBlock className={styles.description}>
          {bullet.description}
        </TextBlock>
      </div>
    </div>
  );
};

export default IconAndTitleBullet;
