import client from "@/client/client";
import { Footer } from "@/components/footer/FooterPrimary/types";
import PageHeading from "@/components/headings/PageHeading/PageHeading";
import PageWrapper from "@/components/wrappers/PageWrapper/PageWrapper";
import React from "react";

const AboutUs = ({ footer }: { footer: Footer }) => {
  return (
    <PageWrapper footer={footer}>
      <PageHeading />
    </PageWrapper>
  );
};

export default AboutUs;

// Server Side Props
export async function getServerSideProps() {
  try {
    const footerQuery = `*[_type == 'footer'][0]`;
    const footerResult = await client.fetch(footerQuery);

    console.log(footerResult, "footerRes...");
    return { props: { footer: footerResult } };
  } catch (error) {
    return error;
  }
}
