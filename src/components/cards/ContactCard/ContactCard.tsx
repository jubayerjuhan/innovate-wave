import React from "react";
import styles from "./ContactCard.module.scss";
import Image from "next/image";
import { ContactCardProps } from "./types";
import sanityImage from "@/lib/sanity/imageBuilder";
import Link from "next/link";
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
        <Link
          className={styles.contactTitle}
          href={link ? link : "/"}
          target="_blank"
        >
          {description}
        </Link>
      ) : (
        <div className={styles.socialMedias}>
          {options?.map((option) => (
            <Link
              target="_blank"
              href={option.link}
              className={styles.socialMedia}
              key={option._key}
            >
              <div className={styles.socialMediaImageWrapper}>
                <Image
                  src={sanityImage(option.logo).url()}
                  alt={option.title}
                  fill
                />
              </div>
              <p className={styles.contactTitle}>{option.title}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactCard;
