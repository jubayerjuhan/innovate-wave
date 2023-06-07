import { Footer } from "@/components/footer/FooterPrimary/types";
import { PageLink } from "@/components/headings/PageHeading/types";
import { OurTeamsSection } from "@/components/sections/home/OurTeams/types";
import { FeatureSection } from "@/types/homepage/featureSection";

export interface AboutUs {
  footer: Footer;
  aboutUs: {
    pageLink: PageLink;
    featureSections: FeatureSection[];
    ourTeamsSection: OurTeamsSection;
  };
}
