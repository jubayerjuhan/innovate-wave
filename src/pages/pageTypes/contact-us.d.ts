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
  _rev: string;
  _type: string;
}

interface PageInformation {
  subtitle: string;
  description: string;
  title: string;
}

interface ContactUsForm {
  fields: Field[];
  title: string;
}

interface Field {
  _key: string;
  fieldTitle: string;
  fieldType: string;
  fieldWidth: string;
  fieldPlaceholder: string;
  fieldName: string;
  _type: string;
}

export default ContactUsProps;
