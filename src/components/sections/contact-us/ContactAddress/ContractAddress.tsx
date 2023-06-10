import React from "react";
import styles from "./ContractAddress.module.scss";
import SeactionHeading from "@/components/headings/SectionHeading/SeactionHeading";
import ContactCard from "@/components/cards/ContactCard/ContactCard";
import { MoreWaysToContact } from "@/pages/pageTypes/contact-us";

const ContractAddress = ({
  contactCards,
  socialMediaCard,
  subtitle,
  description,
  title,
}: MoreWaysToContact) => {
  return (
    <div className={styles.wrapper}>
      <SeactionHeading
        orientation="left"
        subtitle={subtitle}
        title={title}
        description={description}
        small
      />

      <div className={styles.contactCardContainer}>
        {contactCards.map((card) => (
          <ContactCard
            key={card._key}
            description={card.description}
            image={card.image}
            title={card.title}
            link={card.link}
            type={"single"}
          />
        ))}
        <ContactCard
          description={socialMediaCard.title}
          image={socialMediaCard.image}
          title={socialMediaCard.title}
          type="array"
          options={socialMediaCard.socialMedias}
        />
      </div>
    </div>
  );
};

export default ContractAddress;
