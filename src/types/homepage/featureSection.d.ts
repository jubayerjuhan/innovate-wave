export interface FeatureSection {
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  subtitle: string;
  _type: string;
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
