import React from "react";
import styles from "./pageHeading.module.scss";
import Image from "next/image";
import { BiHomeCircle } from "react-icons/bi";
import Link from "next/link";

const PageHeading = () => {
  return (
    <div className={styles.pageHeading}>
      <div className={styles.textSection}>
        <h4>About Us</h4>
        <div className={styles.linkSection}>
          <PageHeadingLink icon />
          <PageHeadingLink />
        </div>
      </div>
      <div className={styles.iconSection}>
        <Image
          src="https://wp.devignedge.com/maruncy/home-3/wp-content/themes/maruncy/assets/images/element-1.svg"
          alt="Image"
          fill
        />
      </div>
    </div>
  );
};

const PageHeadingLink = ({ icon }: { icon?: boolean }) => {
  return (
    <div className={styles.homeLink}>
      {icon && <BiHomeCircle className={styles.homeLinkIcon} />}
      <Link className={styles.homeLinkTitle} href="/">
        Home
      </Link>
    </div>
  );
};

export default PageHeading;
