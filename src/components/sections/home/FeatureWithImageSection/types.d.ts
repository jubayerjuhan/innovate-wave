import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface FeatureSectionProps {
  reverse?: boolean;
  bulletType: "iconAndTitle" | "iconOnly";
  bullets: Bullet[];
  image: StaticImageData;
  heading: string;
  subHeading: string;
  description: string;
}

export interface Bullet {
  icon: IconType;
  title: string;
  description: string;
}
