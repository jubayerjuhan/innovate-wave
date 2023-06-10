import React from "react";
import styles from "./ContactCard.module.scss";
import Image from "next/image";
import { ContactCardProps } from "./types";
import sanityImage from "@/lib/sanity/imageBuilder";
const ContactCard: React.FC<ContactCardProps> = ({
  description,
  image,
  title,
  type,
  options,
  link,
}) => {
  return (
    <div className={styles.contactCard}>
      <div className={styles.contactCardIconWrapper}>
        <Image
          className={styles.contactCardIconWrapper}
          src={sanityImage(image).url()}
          fill
          alt={title}
        />
      </div>
      <h4 className={styles.contactCardType}>{title}</h4>
      {type === "single" ? (
        <a className={styles.contactTitle} href={link} target="_blank">
          {description}
        </a>
      ) : (
        <div className={styles.socialMedias}>
          {options?.map((option) => (
            <div className={styles.socialMedia} key={option._key}>
              <div className={styles.socialMediaImageWrapper}>
                <Image
                  src={sanityImage(option.logo).url()}
                  alt={option.title}
                  fill
                />
              </div>
              <a target="_blank" className={styles.contactTitle}>
                {option.title}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactCard;
