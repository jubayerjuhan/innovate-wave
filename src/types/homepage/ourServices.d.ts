export interface OurServices {
  services: Services[];
  title: string;
  subtitle: string;
  description: string;
}

interface Services {
  title: string;
  _type: string;
  link: string;
  description: string;
  logo: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  _key: string;
}
