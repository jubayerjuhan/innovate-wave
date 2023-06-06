import FooterPrimary from "@/components/footer/FooterPrimary/FooterPrimary";
import Navbar from "@/components/ui/Navbar/Navbar";
import React from "react";

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <main>
      <Navbar />
      {children}
      <FooterPrimary />
    </main>
  );
};

export default PageWrapper;
