import LogoSlider from "@/components/slides/LogoSlider/LogoSlider";
import React from "react";

import clientLogo_1 from "../../../../assets/clientsLogo/logo-11.svg";
import clientLogo_2 from "../../../../assets/clientsLogo/logo-21.svg";
import clientLogo_3 from "../../../../assets/clientsLogo/logo-31.svg";
import clientLogo_4 from "../../../../assets/clientsLogo/logo-41.svg";
import clientLogo_5 from "../../../../assets/clientsLogo/logo-51.svg";
import { OurClientsProps } from "./types";
import Image from "next/image";
import sanityImage from "@/lib/sanity/imageBuilder";

const items = [
  { src: clientLogo_1, alt: "Client" },
  { src: clientLogo_2, alt: "Client" },
  { src: clientLogo_3, alt: "Client" },
  { src: clientLogo_4, alt: "Client" },
  { src: clientLogo_5, alt: "Client" },
];

const OurClients = ({ ourClients }: OurClientsProps) => {
  return (
    <div>
      <LogoSlider ourClients={ourClients} />
    </div>
  );
};

export default OurClients;
