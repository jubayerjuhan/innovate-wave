import { FiSettings } from "react-icons/fi";
import { BsSend } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";
import { Bullet } from "@/components/sections/home/FeatureWithImageSection/types";
import { HomepageFeature } from "./types";

import featureImage from "../../../assets/element-72.jpeg";
import boyImage from "../../../assets/heroImage.png";

export const featureBulletsData: Bullet[] = [
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

export const homepageFeatures: HomepageFeature[] = [
  {
    bulletType: "iconAndTitle",
    reverse: false,
    bullets: featureBulletsData,
    image: featureImage,
    heading: "How Content Marketing can help",
    subHeading: "Superiority",
    description:
      "Est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam.    ",
  },
  {
    bulletType: "iconOnly",
    reverse: true,
    bullets: featureBulletsData,
    image: boyImage,
    heading: "What is Content Marketing",
    subHeading: "Context",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];
