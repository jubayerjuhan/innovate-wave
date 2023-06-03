import React from "react";
import styles from "./featureBullet.module.scss";
import { Bullet } from "../FeatureWithImageSection/types";
import TextBlock from "@/components/ui/Text/TextBlock/TextBlock";

const FeatureBullets = ({
  bulletType,
  bullets,
}: {
  bulletType: "iconAndTitle" | "iconOnly";
  bullets: Bullet[];
}) => {
  return (
    <div className={styles.featureBullets}>
      {bullets.map((bullet, index) => {
        return (
          <IconAndTitleBullet
            key={index}
            bullet={bullet}
            Icon={bullet.icon}
            type={bulletType}
          />
        );
      })}
    </div>
  );
};

export default FeatureBullets;

const IconAndTitleBullet = ({ Icon, type, bullet }: any) => {
  return (
    <div className={styles.bullet}>
      <div className={styles.iconWrapper}>
        {/* <Icon className={styles.icon} /> */}
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
