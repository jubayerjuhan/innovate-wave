import ServiceCard from "@/components/cards/ServiceCard/ServiceCard";
import React from "react";
import predefinedDesign from "../../../../styles/predefined.module.scss";
import styles from "./ourServices.module.scss";
import SeactionHeading from "@/components/headings/SectionHeading/SeactionHeading";

const OurServices = () => {
  return (
    <div className={`${predefinedDesign.sectionPadding} ${styles.ourServices}`}>
      <SeactionHeading
        orientation="middle"
        title="Services That We Provide"
        subtitle="Our Services"
      />
      <div className={styles.serviceCardWrapper}>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default OurServices;
