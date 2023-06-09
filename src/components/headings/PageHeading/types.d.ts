import React from "react";

export interface PageHeadingProps {
  pageLink?: PageLink;
  pageTitle: string;
}
export interface PageHeadingLinkProps {
  icon?: boolean;
  pageLink?: PageLink;
}

interface PageLink {
  link: string;
  title: string;
}
