import React, { useEffect } from "react";
import styles from "./footerPrimary.module.scss";
import logo from "../../../assets/Innovate Wave Logo White.png";
import Image from "next/image";
import TextBlock from "@/components/ui/Text/TextBlock/TextBlock";
import client from "@/client/client";

export default function FooterPrimary(props: any) {
  console.log(props, "props...");
  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const footer = await client.fetch(`*[_type == 'homepage'][0].footer`);
    console.log(footer, "footer");
  }

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
}

export async function getServerSideProps() {
  try {
    const footer = await client.fetch(`*[_type == 'homepage'][0].footer`);
    return { props: { footer } };
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return { props: { footer: null } };
  }
}
