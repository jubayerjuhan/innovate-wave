export interface FooterProps {
  footer: Footer;
}

export interface Footer {
  _createdAt: string;
  _rev: string;
  _type: "footer";
  description: string;
  logo: Logo;
  footerLinkColumns: FooterLinkColumn[];
}

interface Logo {
  _type: "image";
  asset: Asset;
}

interface Asset {
  _ref: string;
  _type: "reference";
  _id: string;
}

interface FooterLinkColumn {
  footerColumn: FooterColumn[];
}

interface FooterColumn {
  footerColumnTitle: string;
  footerLinks: FooterLink[];
}

interface FooterLink {
  _type: "footerLink";
  _key: string;
  footerLink: string;
  footerLinkTitle: string;
}
