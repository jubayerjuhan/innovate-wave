import { SocialMedia } from "@/pages/pageTypes/contact-us";

export interface ContactCardProps {
  image: object;
  title: string;
  description?: string;
  type: "array" | "single";
  link?: string;
  options?: SocialMedia[];
}
