import FooterPrimary from "@/components/footer/FooterPrimary/FooterPrimary";
import Navbar from "@/components/ui/Navbar/Navbar";
import React from "react";
import { PageWrapperProps } from "./types";
import styles from "./pageWrapper.module.scss";

const PageWrapper = ({ children, footer }: PageWrapperProps) => {
  return (
    <main>
      <Navbar />
      <div className={styles.pageWrapperBody}>{children}</div>
      <FooterPrimary footer={footer} />
    </main>
  );
};

export default PageWrapper;
