import FeatureWithImageSection from "@/components/sections/home/FeatureWithImageSection/FeatureWithImageSection";
import Herosection from "@/components/sections/home/Herosection/Herosection";
import Navbar from "@/components/ui/Navbar/Navbar";
import PageWrapper from "@/components/wrappers/PageWrapper/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <Navbar />
      <Herosection />
      <FeatureWithImageSection />
      <FeatureWithImageSection reverse />
      <FeatureWithImageSection />
      <FeatureWithImageSection reverse />
    </PageWrapper>
  );
}
