export interface OurServices {
  services: Service[];
  title: string;
  subtitle: string;
  description: string;
}

export interface Service {
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
