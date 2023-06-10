import { Footer } from "@/components/footer/FooterPrimary/types";

export interface ContactUsProps {
  footer: Footer;
  contactUs: ContactUs;
}

export interface ContactUs {
  pageInformation: PageInformation;
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  contactUsForm: ContactUsForm;
  moreWays: MoreWaysToContact;
  _rev: string;
  _type: string;
}

interface PageInformation {
  subtitle: string;
  description: string;
  title: string;
}

export interface ContactUsForm {
  fields: Field[];
  title: string;
}

interface Field {
  _key: string;
  options: string[];
  fieldTitle: string;
  fieldType: string;
  fieldWidth: string;
  fieldPlaceholder: string;
  fieldName: string;
  _type: string;
}

type SocialMedia = {
  _type: "socialMedia";
  title: string;
  link: string;
  logo: {
    asset: {
      _ref: string;
      _type: "reference";
    };
    _type: "image";
  };
  _key: string;
};

type ContactCard = {
  _type: "contactCard";
  description: string;
  _key: string;
  title: string;
  image: {
    _type: "image";
    asset: {
      _type: "reference";
      _ref: string;
    };
  };
  link: string;
};

export type MoreWaysToContact = {
  socialMediaCard: {
    socialMedias: SocialMedia[];
    title: string;
    image: {
      _type: "image";
      asset: {
        _type: "reference";
        _ref: string;
      };
    };
  };
  subtitle: string;
  contactCards: ContactCard[];
  title: string;
};

export default ContactUsProps;
