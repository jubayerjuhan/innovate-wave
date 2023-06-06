import React from "react";
import styles from "./footerPrimary.module.scss";
import logo from "../../../assets/Innovate Wave Logo White.png";
import Image from "next/image";
import TextBlock from "@/components/ui/Text/TextBlock/TextBlock";
import { FooterProps } from "./types";
import sanityImage from "@/lib/sanity/imageBuilder";

export default function FooterPrimary({ footer }: FooterProps) {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footer}>
        <div className={styles.infoSection}>
          <div className={styles.logo}>
            <Image
              src={sanityImage(footer.logo).url()}
              alt="Footer Logo"
              fill
              objectFit="cover"
            />
          </div>
          <TextBlock className={styles.aboutCompany}>
            {footer.description}
          </TextBlock>
        </div>
        {footer.footerLinkColumns.map((footerColumn, index) => (
          <div className={styles.footerLinksWrappper} key={index}>
            <p className={styles.footerLinkTitle}>
              {footerColumn.footerColumnTitle}
            </p>

            {footerColumn.footerColumn.map((footerLink, index) => (
              <a
                className={styles.footerLink}
                href={footerLink.footerLink}
                key={index}
              >
                {footerLink.footerLinkTitle}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
