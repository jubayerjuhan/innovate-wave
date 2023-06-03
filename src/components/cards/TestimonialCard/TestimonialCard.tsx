import React from "react";
import styles from "./testimonialCard.module.scss";
import Image from "next/image";
import svgIcon from "../../../assets/vectors/blueandwhite-reverse.svg";
import testimonialCallout from "../../../assets/vectors/testimonial_callout.svg";
import { Testimonial } from "@/components/sections/home/Testimonial/types";
import { TestimonialSliderCardProps } from "./types";
import sanityImage from "@/lib/sanity/imageBuilder";

const TestimonialCard = ({ testimonial }: TestimonialSliderCardProps) => {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.client}>
        <Image
          src={sanityImage(testimonial.authorImage).url()}
          alt="Image"
          width={60}
          height={60}
          className={styles.clientImage}
        />
        <div className={styles.clientInfo}>
          <p className={styles.clientName}>{testimonial.authorName}</p>
          <p className={styles.clientCompany}>
            <span className={styles.clientRole}>
              {testimonial.authorDesignation} -{" "}
            </span>
            {testimonial.company}
          </p>
        </div>
      </div>

      <div className={styles.testimonialBody}>
        <Image
          src={testimonialCallout}
          alt="Testimonial Callout"
          className={styles.testimonialCallout}
        />
        <p className={styles.testimonialTitle}>
          <Image
            src={svgIcon}
            alt="Svg icon"
            className={styles.testimonialIcon}
          />
          {testimonial.title}
        </p>
        <p className={styles.description}>{testimonial.description}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
