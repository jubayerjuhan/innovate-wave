export interface FeatureSection {
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  subtitle: string;
  reverse: boolean;
  _type: string;
  bulletType: "iconOnly" | "iconAndTitle";
  bulletPoints: {
    _type: string;
    description: string;
    _key: string;
    title: string;
  }[];
  description: string;
  _key: string;
  title: string;
}
