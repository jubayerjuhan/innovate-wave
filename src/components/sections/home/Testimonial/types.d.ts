interface Testimonial {
  _key: string;
  _type: string;
  company: string;
  title: string;
  authorDesignation: string;
  authorName: string;
  authorImage: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  description: string;
}

export interface TestimonialSectionProps {
  testimonialSection: TestimonialSection;
}

export interface TestimonialSection {
  title: string;
  subtitle: string;
  description: string;
  testimonials: Testimonial[];
}
