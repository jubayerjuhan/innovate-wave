import { Footer } from "@/components/footer/FooterPrimary/types";
import { FeatureSection } from "@/types/homepage/featureSection";

export interface AboutUs {
  footer: Footer;
  aboutUs: {
    featureSections: FeatureSection[];
  };
}
