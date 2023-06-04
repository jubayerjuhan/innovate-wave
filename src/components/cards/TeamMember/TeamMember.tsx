import Image from "next/image";
import React from "react";
import styles from "./teamMember.module.scss";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { TeamMemberProps } from "./types";
import sanityImage from "@/lib/sanity/imageBuilder";

const TeamMember = ({ teamMember }: TeamMemberProps) => {
  return (
    <div className={styles.teamBox}>
      <Image
        src={sanityImage(teamMember.image).url()}
        alt={teamMember.teamMemberName}
        width={340}
        height={400}
        className={styles.image}
      />

      <div className={styles.nameWrapper}>
        <div className={styles.nameContainer}>
          <p className={styles.name}>{teamMember.teamMemberName}</p>
          <p className={styles.designation}>{teamMember.teamMemberRole}</p>
        </div>
        <div className={styles.socialMedia}>
          <a href={`mailto:${teamMember.email}`} target="_blank">
            <HiOutlineMail />
          </a>
          <a href={`${teamMember.linkedIn}`} target="_blank">
            <FiLinkedin />
          </a>
          <a href={`${teamMember.twitter}`} target="_blank">
            <FiTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
