import { IconType } from "react-icons";

export interface FeatureSectionProps {
  reverse?: boolean;
  bulletType: "iconAndTitle" | "iconOnly";
  bullets: Bullet[];
}

export interface Bullet {
  icon: IconType;
  title: string;
  description: string;
}
