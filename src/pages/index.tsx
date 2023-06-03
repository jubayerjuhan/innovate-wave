import { client } from "@/client/client";
import FeatureWithImageSection from "@/components/sections/home/FeatureWithImageSection/FeatureWithImageSection";
import Herosection from "@/components/sections/home/Herosection/Herosection";
import OurClients from "@/components/sections/home/OurClients/OurClients";
import OurServices from "@/components/sections/home/OurServices/OurServices";
import OurTeams from "@/components/sections/home/OurTeams/OurTeams";
import Testimonial from "@/components/sections/home/Testimonial/Testimonial";
import Navbar from "@/components/ui/Navbar/Navbar";
import PageWrapper from "@/components/wrappers/PageWrapper/PageWrapper";
import {
  featureBulletsData,
  homepageFeatures,
} from "@/constants/pageData/home/home";
import { HomepageType } from "@/types/homepage/homapage";
import { reverse } from "dns";

export default function Home({ heroSection, ourClients }: HomepageType) {
  console.log(heroSection);
  return (
    <PageWrapper>
      <Navbar />
      <Herosection herosection={heroSection} />
      <OurClients ourClients={ourClients} />
      {homepageFeatures.map((feature, key) => (
        <FeatureWithImageSection
          bulletType={feature.bulletType}
          bullets={feature.bullets}
          reverse={feature.reverse}
          key={key}
          image={feature.image}
          heading={feature.heading}
          subHeading={feature.subHeading}
          description={feature.description}
        />
      ))}
      <OurServices />
      <Testimonial />
      <OurTeams />
    </PageWrapper>
  );
}

// Server Side Props
export async function getServerSideProps() {
  try {
    const query = `*[_type == 'homepage'][0]`;
    const result = await client.fetch(query);
    return { props: result };
  } catch (error) {
    return error;
  }
}
