import client from "@/client/client";
import PageHeading from "@/components/headings/PageHeading/PageHeading";
import PageWrapper from "@/components/wrappers/PageWrapper/PageWrapper";
import React from "react";
import { AboutUs } from "./pageTypes/about-us";
import FeatureWithImageSection from "@/components/sections/home/FeatureWithImageSection/FeatureWithImageSection";
import sanityImage from "@/lib/sanity/imageBuilder";
import OurTeams from "@/components/sections/home/OurTeams/OurTeams";
import AwardsSection from "@/components/sections/about-us/AwardsSection/AwardsSection";

const AboutUs = ({ footer, aboutUs }: AboutUs) => {
  return (
    <PageWrapper footer={footer}>
      <PageHeading pageLink={aboutUs.pageLink} />
      {aboutUs.featureSections.map((featureSection, index) => (
        <FeatureWithImageSection
          bulletType={featureSection.bulletType}
          bullets={featureSection.bulletPoints}
          description={featureSection.description}
          heading={featureSection.title}
          image={sanityImage(featureSection.image).url()}
          subHeading={featureSection.subtitle}
          reverse={featureSection.reverse}
          key={index}
        />
      ))}
      <AwardsSection />
      <OurTeams ourTeamsSection={aboutUs.ourTeamsSection} />
    </PageWrapper>
  );
};

export default AboutUs;

// Server Side Props
export async function getServerSideProps() {
  try {
    const footerQuery = `*[_type == 'footer'][0]`;
    const footerResult = await client.fetch(footerQuery);

    const aboutUsQuery = `*[_type == 'aboutUs'][0]`;
    const aboutUsResult = await client.fetch(aboutUsQuery);

    console.log(footerResult, "footerRes...");
    return { props: { footer: footerResult, aboutUs: aboutUsResult } };
  } catch (error) {
    return error;
  }
}
