import ServiceCard from "@/components/cards/ServiceCard/ServiceCard";
import React from "react";
import predefinedDesign from "../../../../styles/predefined.module.scss";
import styles from "./ourServices.module.scss";

const OurServices = () => {
  return (
    <div className={`${predefinedDesign.sectionPadding} ${styles.ourServices}`}>
      <h6 className={styles.title}>Our Services</h6>
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
