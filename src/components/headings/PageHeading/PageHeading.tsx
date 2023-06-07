import React from "react";
import styles from "./pageHeading.module.scss";
import Image from "next/image";
import { BiHomeCircle } from "react-icons/bi";
import Link from "next/link";
import { PageHeadingLinkProps, PageHeadingProps } from "./types";

const PageHeading = ({ pageLink }: PageHeadingProps) => {
  return (
    <div className={styles.pageHeading}>
      <div className={styles.textSection}>
        <h4>About Us</h4>
        <div className={styles.linkSection}>
          <PageHeadingLink icon pageLink={{ link: "/", title: "Home" }} />
          <PageHeadingLink pageLink={pageLink} />
        </div>
      </div>
      <div className={styles.iconSection}>
        <Image src="https://svgshare.com/i/tyu.svg" alt="Image" fill />
      </div>
    </div>
  );
};

const PageHeadingLink = ({ icon, pageLink }: PageHeadingLinkProps) => {
  return (
    <div className={styles.homeLink}>
      {icon && <BiHomeCircle className={styles.homeLinkIcon} />}
      <Link
        className={styles.homeLinkTitle}
        href={pageLink?.link ? pageLink.link : "/"}
      >
        {pageLink?.title}
      </Link>
    </div>
  );
};

export default PageHeading;
