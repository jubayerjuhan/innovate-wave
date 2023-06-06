import FooterPrimary from "@/components/footer/FooterPrimary/FooterPrimary";
import Navbar from "@/components/ui/Navbar/Navbar";
import React from "react";
import { PageWrapperProps } from "./types";

const PageWrapper = ({ children, footer }: PageWrapperProps) => {
  return (
    <main>
      <Navbar />
      {children}
      <FooterPrimary footer={footer} />
    </main>
  );
};

export default PageWrapper;
