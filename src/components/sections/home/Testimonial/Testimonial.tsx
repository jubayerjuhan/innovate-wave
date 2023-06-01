import React from "react";
import predefinedStyles from "../../../../styles/predefined.module.scss";
import styles from "./testimonials.module.scss";
import FeattureSubheading from "@/components/ui/FeatureSubheading/FeattureSubheading";
import TestimonialCard from "@/components/cards/TestimonialCard/TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
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
          slidesToShow: 1,
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

  const items = [
    { message: "Hello" },
    { message: "world" },
    { message: "bye" },
    { message: "world" },
    { message: "gello" },
  ];
  return (
    <div className={predefinedStyles.sectionPadding}>
      <FeattureSubheading title="Testimonials" />
      <h2 className={styles.heading}>Valuable feedback from our clients</h2>
      <Slider
        {...settings}
        autoplay
        dots={false}
        autoplaySpeed={3000}
        accessibility={true}
      >
        {items.map((item, key) => (
          <div key={key} className={styles.testimonialWrapper}>
            <TestimonialCard />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
