import React from "react";
import styles from "./serviceCard.module.scss";
import Button from "@/components/ui/Button/Button";
import { ServiceProps } from "./types";
import sanityImage from "@/lib/sanity/imageBuilder";
import Image from "next/image";

const ServiceCard = ({ service }: ServiceProps) => {
  return (
    <div className={`${styles.serviceCard}`}>
      <div className={styles.iconWrapper}>
        <div className={styles.icon}>
          <Image
            src={sanityImage(service.logo).url()}
            alt={service.title}
            fill
            className={styles.iconImage}
          />
        </div>
      </div>
      <h6 className={styles.title}>{service.title}</h6>
      <p className={styles.description}>{service.description}</p>
      <Button title="Learn More" />
    </div>
  );
};

export default ServiceCard;
