import { OurTeamsSection } from "./../../components/sections/home/OurTeams/types.d";
import { TestimonialSection } from "@/components/sections/home/Testimonial/types";
import { FeatureSection } from "./featureSection";
import { HeroSection } from "./heroSection";
import { OurClients } from "./ourClients";
import { OurServices } from "./ourServices";

export interface HomepageType {
  heroSection: HeroSection;
  featureSections: FeatureSection[];
  ourClients: OurClients[];
  ourServices: OurServices;
  testimonialSection: TestimonialSection;
  ourTeamsSection: OurTeamsSection;
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  _rev: string;
  _type: string;
}
