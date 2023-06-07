import React from "react";
import styles from "./award.module.scss";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const Award = () => {
  return (
    <div className={styles.award}>
      <div className={styles.awardCompanyPhotoWrapper}>
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/NASA_Worm_logo.svg/1200px-NASA_Worm_logo.svg.png"
          }
          alt="Nasa Logo"
          className={styles.awardCompany}
          fill
        />
      </div>
      <div className={styles.awardTitleWrapper}>
        <h4 className={styles.awardTitle}>Nasa Space Apps Challenge 2021</h4>
        <p className={styles.awardPosition}>
          Runner Up - “ Decor of the week “
        </p>
      </div>
      <div className={styles.navigation}>
        <BsArrowRight className={styles.navigationIcon} />
      </div>
    </div>
  );
};

export default Award;
