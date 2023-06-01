import React from "react";
import styles from "./testimonialCard.module.scss";
import Image from "next/image";
import svgIcon from "../../../assets/vectors/blueandwhite-reverse.svg";
import testimonialCallout from "../../../assets/vectors/testimonial_callout.svg";

const TestimonialCard = () => {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.client}>
        <Image
          src={"https://avatars.githubusercontent.com/u/33898452?v=4"}
          alt="Image"
          width={60}
          height={60}
          className={styles.clientImage}
        />
        <div className={styles.clientInfo}>
          <p className={styles.clientName}>Jubayer Juhan</p>
          <p className={styles.clientCompany}>
            <span className={styles.clientRole}>CTO - </span>
            Digital Dude LLC
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
          Fantastic Job Done By Innovate Wave
        </p>
        <p className={styles.description}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Amet minim
          mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequat duis enim velit mollit.
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
