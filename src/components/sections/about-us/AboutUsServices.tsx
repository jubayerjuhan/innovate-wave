import React from "react";
import predefinedStyles from "../../../styles/predefined.module.scss";
import SeactionHeading from "@/components/headings/SectionHeading/SeactionHeading";
import ServiceCardRounded from "@/components/cards/ServiceCards/ServiceCardRounded/ServiceCardRounded";
import client from "@/client/client";

const AboutUsServices = () => {
  return (
    <div className={predefinedStyles.sectionPadding}>
      <SeactionHeading
        orientation="middle"
        subtitle="Services"
        title="Services That We Provide"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit necessitatibus aperiam voluptatum sapiente autem impedit fugit tenetur accusamus repudiandae nobis, ducimus corrupti nemo. Dolorem quia repellendus sunt esse unde autem?"
      />
      <ServiceCardRounded />
    </div>
  );
};

export default AboutUsServices;
