import Image from "next/image";
import React from "react";
import styles from "./teamMember.module.scss";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const TeamMember = () => {
  return (
    <div className={styles.teamBox}>
      <Image
        src="https://avatars.githubusercontent.com/u/33898452?v=4"
        alt="Teammember"
        width={350}
        height={400}
        className={styles.image}
      />

      <div className={styles.nameWrapper}>
        <div className={styles.nameContainer}>
          <p className={styles.name}>Jubayer Juhan</p>
          <p className={styles.designation}>Project Manager</p>
        </div>
        <div className={styles.socialMedia}>
          <HiOutlineMail />
          <FiLinkedin />
          <FiTwitter />
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
