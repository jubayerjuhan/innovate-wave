import client from "@/client/client";
import PageHeading from "@/components/headings/PageHeading/PageHeading";
import AboutUsServices from "@/components/sections/about-us/AboutUsServices";
import PageWrapper from "@/components/wrappers/PageWrapper/PageWrapper";
import React from "react";
import { AboutUs } from "./pageTypes/about-us";
import FeatureWithImageSection from "@/components/sections/home/FeatureWithImageSection/FeatureWithImageSection";
import sanityImage from "@/lib/sanity/imageBuilder";

const AboutUs = ({ footer, aboutUs }: AboutUs) => {
  return (
    <PageWrapper footer={footer}>
      <PageHeading />
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
      <AboutUsServices />
    </PageWrapper>
  );
};

export default AboutUs;

// Server Side Props
export async function getServerSideProps() {
  try {
    const footerQuery = `*[_type == 'footer'][0]`;
    const footerResult = await client.fetch(footerQuery);

    const query = `*[_type == 'aboutUs'][0]`;
    const result = await client.fetch(query);

    console.log(footerResult, "footerRes...");
    return { props: { footer: footerResult, aboutUs: result } };
  } catch (error) {
    return error;
  }
}
