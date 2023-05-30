import { Bullet } from "@/components/sections/home/FeatureWithImageSection/types";
import { StaticImageData } from "next/image";

export interface HomepageFeature {
  bulletType: "iconOnly" | "iconAndTitle";
  reverse: boolean;
  bullets: Bullet[];
  image: StaticImageData;
  heading: string;
  subHeading: string;
  description: string;
}
