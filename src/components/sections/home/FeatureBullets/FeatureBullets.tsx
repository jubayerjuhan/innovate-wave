import React from "react";
import styles from "./featureBullet.module.scss";
import { Bullet } from "../FeatureWithImageSection/types";
import IconAndTitleBullet from "../../../bullets/IconAndTitleBullet/IconAndTitleBullet";

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
