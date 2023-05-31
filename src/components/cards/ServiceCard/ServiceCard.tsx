import React from "react";
import styles from "./serviceCard.module.scss";
import predefinedStyle from "../../../styles/predefined.module.scss";

import Image from "next/image";
import seoIcon from "../../../assets/icons/seo-icon.png";
import Button from "@/components/ui/Button/Button";

const ServiceCard = () => {
  return (
    <div className={`${styles.serviceCard}`}>
      <div className={styles.icon}>
        <Image src={seoIcon} alt="Logo" />
      </div>
      <h6 className={styles.title}>Professional SEO Services</h6>
      <p className={styles.description}>
        Our advanced SEO strategy can help you recover your organic traffic,
        clear attack posts from the first page, grow your organic traffic
        rapidly, rank for super competitive money keywords, and overall it can
        ensure a steady flow of high converting organic traffic.
      </p>
      <Button title="Learn More" />
    </div>
  );
};

export default ServiceCard;
