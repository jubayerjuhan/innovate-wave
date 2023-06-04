import React from "react";
import styles from "./footerPrimary.module.scss";
import logo from "../../../assets/Innovate Wave Logo White.png";
import Image from "next/image";
import TextBlock from "@/components/ui/Text/TextBlock/TextBlock";

const FooterPrimary = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footer}>
        <div className={styles.infoSection}>
          <div className={styles.logo}>
            <Image src={logo} alt="Footer Logo" fill objectFit="cover" />
          </div>
          <TextBlock className={styles.aboutCompany}>
            We’re maruncy, get your business to the new heights in no time.
            We’re maruncy, get your business to the new heights in no time.
            We’re maruncy, get your business to the new heights in no time.
          </TextBlock>
        </div>
        <div className={styles.footerLinksWrappper}>
          <p className={styles.footerLinkTitle}>Discover</p>
          <a className={styles.footerLink}>Marchent</a>
          <a className={styles.footerLink}>Buy Sell</a>
          <a className={styles.footerLink}>Giving Back</a>
          <a className={styles.footerLink}>Help and Support</a>
        </div>
        <div className={styles.footerLinksWrappper}>
          <p className={styles.footerLinkTitle}>Discover</p>
          <a className={styles.footerLink}>Marchent</a>
          <a className={styles.footerLink}>Buy Sell</a>
          <a className={styles.footerLink}>Giving Back</a>
          <a className={styles.footerLink}>Help and Support</a>
        </div>
        <div className={styles.footerLinksWrappper}>
          <p className={styles.footerLinkTitle}>Discover</p>
          <a className={styles.footerLink}>Marchent</a>
          <a className={styles.footerLink}>Buy Sell</a>
          <a className={styles.footerLink}>Giving Back</a>
          <a className={styles.footerLink}>Help and Support</a>
        </div>
      </div>
    </div>
  );
};

export default FooterPrimary;
