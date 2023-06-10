import React from "react";
import styles from "./ContactCard.module.scss";
import Image from "next/image";
const ContactCard = () => {
  return (
    <div className={styles.contactCard}>
      <div className={styles.contactCardIconWrapper}>
        <Image
          className={styles.contactCardIconWrapper}
          src={
            "https://cdn3d.iconscout.com/3d/premium/thumb/location-pin-3994307-3307641.png"
          }
          fill
          alt="Contact Us Card Icon"
        />
      </div>
      <h4 className={styles.contactCardType}>Email</h4>
      <p className={styles.contactTitle}>team@innovatewave.com</p>
    </div>
  );
};

export default ContactCard;
