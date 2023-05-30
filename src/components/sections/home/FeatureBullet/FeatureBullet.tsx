import IconAndTitleBullet from "@/components/Bullets/IconAndTitleBullet/IconAndTitleBullet";
import React from "react";
import { FiSettings } from "react-icons/fi";
import styles from "./featureBullet.module.scss";

const FeatureBullet = ({
  bulletType,
}: {
  bulletType: "iconAndTitle" | "iconOnly";
}) => {
  return (
    <div className={styles.featureBullets}>
      {[1, 2, 3].map((bullet, index) => {
        return <IconAndTitleBullet key={index} Icon={FiSettings} />;
      })}
    </div>
  );
};

export default FeatureBullet;
