import IconAndTitleBullet from "@/components/Bullets/IconAndTitleBullet/IconAndTitleBullet";
import React from "react";
import { FiSettings } from "react-icons/fi";
import styles from "./featureBullet.module.scss";
import { Bullet } from "../FeatureWithImageSection/types";

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
