import React from "react";
import predefinedStyles from "../../../../styles/predefined.module.scss";
import styles from "./testimonials.module.scss";
import FeattureSubheading from "@/components/ui/FeatureSubheading/FeattureSubheading";
import TestimonialCard from "@/components/cards/TestimonialCard/TestimonialCard";

const Testimonial = () => {
  return (
    <div className={predefinedStyles.sectionPadding}>
      <FeattureSubheading title="Testimonials" />
      <h2 className={styles.heading}>Valuable feedback from our clients</h2>
      <div className={styles.testimonialContainer}>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonial;
