import client from "@/client/client";
import ContactUsNewsLetter from "@/components/newsletters/ContactUsNewsLetter/ContactUsNewsLetter";
import FeatureWithImageSection from "@/components/sections/home/FeatureWithImageSection/FeatureWithImageSection";
import Herosection from "@/components/sections/home/Herosection/Herosection";
import OurClients from "@/components/sections/home/OurClients/OurClients";
import OurServices from "@/components/sections/home/OurServices/OurServices";
import OurTeams from "@/components/sections/home/OurTeams/OurTeams";
import Testimonial from "@/components/sections/home/Testimonial/Testimonial";
import PageWrapper from "@/components/wrappers/PageWrapper/PageWrapper";
import sanityImage from "@/lib/sanity/imageBuilder";
import { HomepageType } from "@/types/homepage/homapage";

export default function Home({
  heroSection,
  ourClients,
  featureSections,
  ourServices,
  testimonialSection,
  ourTeamsSection,
  footer,
}: HomepageType) {
  return (
    <PageWrapper footer={footer}>
      <Herosection herosection={heroSection} />
      {/* <OurClients ourClients={ourClients} /> */}
      {featureSections.map((feature, key) => {
        return (
          <FeatureWithImageSection
            bulletType={feature.bulletType}
            bullets={feature.bulletPoints}
            reverse={feature.reverse}
            key={key}
            image={sanityImage(feature.image).url()}
            heading={feature.title}
            subHeading={feature.subtitle}
            description={feature.description}
          />
        );
      })}
      <OurServices ourServices={ourServices} />
      <Testimonial testimonialSection={testimonialSection} />
      <OurTeams ourTeamsSection={ourTeamsSection} />
      <ContactUsNewsLetter />
    </PageWrapper>
  );
}

// Server Side Props
export async function getServerSideProps() {
  try {
    const query = `*[_type == 'homepage'][0]`;
    const footerQuery = `*[_type == 'footer'][0]`;
    const result = await client.fetch(query);
    const footerResult = await client.fetch(footerQuery);

    console.log(footerResult, "footerRes...");
    return { props: { ...result, footer: footerResult } };
  } catch (error) {
    return error;
  }
}
