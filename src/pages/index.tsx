import FeatureWithImageSection from "@/components/sections/home/FeatureWithImageSection/FeatureWithImageSection";
import Herosection from "@/components/sections/home/Herosection/Herosection";
import Navbar from "@/components/ui/Navbar/Navbar";
import PageWrapper from "@/components/wrappers/PageWrapper/PageWrapper";

import { FiSettings } from "react-icons/fi";
import { BsSend } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";

export default function Home() {
  const bullets = [
    {
      icon: FiSettings,
      title: "Page Rankings",
      description:
        "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
    },
    {
      icon: BsSend,
      title: "Site Optimisation",
      description:
        "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
    },
    {
      icon: IoPeopleOutline,
      title: "Reporting & Analysis",
      description:
        "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
    },
  ];
  return (
    <PageWrapper>
      <Navbar />
      <Herosection />
      <FeatureWithImageSection bulletType="iconOnly" bullets={bullets} />
      <FeatureWithImageSection
        bulletType="iconAndTitle"
        reverse
        bullets={bullets}
      />
    </PageWrapper>
  );
}
