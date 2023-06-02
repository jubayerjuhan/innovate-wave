import { FeatureSection } from "./featureSection";
import { HeroSection } from "./heroSection";
import { OurClients } from "./ourClients";
import { OurServices } from "./ourServices";

export interface HomepageType {
  heroSection: HeroSection;
  featureSections: FeatureSection[];
  ourClients: OurClients[];
  ourServices: OurServices;
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  _rev: string;
  _type: string;
}
