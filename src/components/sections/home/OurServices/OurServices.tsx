import ServiceCard from "@/components/cards/ServiceCards/ServiceCard/ServiceCard";
import React from "react";
import predefinedDesign from "../../../../styles/predefined.module.scss";
import styles from "./ourServices.module.scss";
import SeactionHeading from "@/components/headings/SectionHeading/SeactionHeading";
import { OurServicesProps } from "./types";

const OurServices = ({ ourServices }: OurServicesProps) => {
  return (
    <div className={`${predefinedDesign.sectionPadding} ${styles.ourServices}`}>
      <SeactionHeading
        orientation="middle"
        title={ourServices.title}
        subtitle={ourServices.subtitle}
      />
      <div className={styles.serviceCardWrapper}>
        {ourServices.services.map((service, index) => {
          return <ServiceCard service={service} key={index} />;
        })}
      </div>
    </div>
  );
};

export default OurServices;
