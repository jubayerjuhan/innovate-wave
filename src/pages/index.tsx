import { client } from "@/client/client";
import FeatureWithImageSection from "@/components/sections/home/FeatureWithImageSection/FeatureWithImageSection";
import Herosection from "@/components/sections/home/Herosection/Herosection";
import OurClients from "@/components/sections/home/OurClients/OurClients";
import OurServices from "@/components/sections/home/OurServices/OurServices";
import OurTeams from "@/components/sections/home/OurTeams/OurTeams";
import Testimonial from "@/components/sections/home/Testimonial/Testimonial";
import Navbar from "@/components/ui/Navbar/Navbar";
import PageWrapper from "@/components/wrappers/PageWrapper/PageWrapper";
import sanityImage from "@/lib/sanity/imageBuilder";
import { HomepageType } from "@/types/homepage/homapage";

export default function Home({
  heroSection,
  ourClients,
  featureSections,
}: HomepageType) {
  console.log(heroSection);
  console.log(featureSections, "featuresections");
  return (
    <PageWrapper>
      <Navbar />
      <Herosection herosection={heroSection} />
      <OurClients ourClients={ourClients} />
      {featureSections.map((feature, key) => {
        console.log(feature, "feature");
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
