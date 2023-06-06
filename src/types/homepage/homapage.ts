import { OurTeamsSection } from "./../../components/sections/home/OurTeams/types.d";
import { TestimonialSection } from "@/components/sections/home/Testimonial/types";
import { FeatureSection } from "./featureSection";
import { HeroSection } from "./heroSection";
import { OurClients } from "./ourClients";
import { OurServices } from "./ourServices";
import { Footer } from "@/components/footer/FooterPrimary/types";

export interface HomepageType {
  heroSection: HeroSection;
  featureSections: FeatureSection[];
  ourClients: OurClients[];
  ourServices: OurServices;
  testimonialSection: TestimonialSection;
  ourTeamsSection: OurTeamsSection;
  footer: Footer;
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  _rev: string;
  _type: string;
}
