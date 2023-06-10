import React from "react";
import styles from "./ContractAddress.module.scss";
import SeactionHeading from "@/components/headings/SectionHeading/SeactionHeading";
import ContactCard from "@/components/cards/ContactCard/ContactCard";

const ContractAddress = () => {
  return (
    <div className={styles.wrapper}>
      <SeactionHeading
        orientation="left"
        subtitle="Reach Us"
        title="More Ways To Reach Us"
        description="We Just Dont Have One Way To Reach Out Us, You Can Reach To Us Physically As Well As By Email Or Social Media"
        small
      />

      <div className={styles.contactCardContainer}>
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
    </div>
  );
};

export default ContractAddress;
