import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./logoSlider.module.scss";
import predefinedStyles from "../../../styles/predefined.module.scss";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import clientLogo_1 from "../../../assets/clientsLogo/logo-11.svg";
import clientLogo_2 from "../../../assets/clientsLogo/logo-21.svg";
import clientLogo_3 from "../../../assets/clientsLogo/logo-31.svg";
import clientLogo_4 from "../../../assets/clientsLogo/logo-41.svg";
import clientLogo_5 from "../../../assets/clientsLogo/logo-51.svg";
import FeattureSubheading from "@/components/ui/FeatureSubheading/FeattureSubheading";

const items = [
  { src: clientLogo_1, alt: "Client" },
  { src: clientLogo_2, alt: "Client" },
  { src: clientLogo_3, alt: "Client" },
  { src: clientLogo_4, alt: "Client" },
  { src: clientLogo_5, alt: "Client" },
];

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`${predefinedStyles.sectionPadding} ${styles.slider}`}>
      {/* <FeattureSubheading title="Our Clients" className={styles.subheading} /> */}
      <Slider {...settings} autoplay autoplaySpeed={3000} dots={false}>
        {items.map((logo, index) => (
          <div
            key={index}
            className={styles.slide}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Image
              src={logo.src}
              alt="Client Logo"
              className={styles.clientLogo}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
