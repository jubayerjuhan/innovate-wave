import React from "react";
import predefinedStyles from "../../../../styles/predefined.module.scss";
import styles from "./testimonials.module.scss";
import TestimonialCard from "@/components/cards/TestimonialCard/TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SeactionHeading from "@/components/headings/SectionHeading/SeactionHeading";
import { TestimonialSectionProps } from "./types";

const Testimonial = ({ testimonialSection }: TestimonialSectionProps) => {
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
    <div className={`${predefinedStyles.sectionPadding}`}>
      <SeactionHeading
        title={testimonialSection.title}
        subtitle={testimonialSection.subtitle}
        orientation={testimonialSection.orientation}
      />
      <Slider
        {...settings}
        autoplay
        dots={false}
        autoplaySpeed={3000}
        accessibility={true}
      >
        {testimonialSection.testimonials.map((testimonial, key) => (
          <div key={key} className={styles.testimonialWrapper}>
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
