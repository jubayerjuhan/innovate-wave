import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./logoSlider.module.scss";
import predefinedStyles from "../../../styles/predefined.module.scss";
import { OurClients } from "@/types/homepage/ourClients";
import sanityImage from "@/lib/sanity/imageBuilder";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function SimpleSlider({
  ourClients,
}: {
  ourClients: OurClients[];
}) {
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
        {ourClients.map((client, index) => (
          <div
            key={index}
            className={styles.slide}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={sanityImage(client.logo).url()}
              alt="Client Logo"
              width={230}
              height={60}
              className={styles.clientLogo}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
