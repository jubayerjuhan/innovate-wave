import client from "@/client/client";
import PageWrapper from "@/components/wrappers/PageWrapper/PageWrapper";
import React from "react";
import ContactUsProps from "./pageTypes/contact-us";
import PageHeading from "@/components/headings/PageHeading/PageHeading";
import SeactionHeading from "@/components/headings/SectionHeading/SeactionHeading";
import ContactUsSection from "@/components/sections/contact-us/ContactUsSection/ContactUsSection";

const ContactUs = ({ footer }: ContactUsProps) => {
  return (
    <PageWrapper footer={footer}>
      {/* <PageHeading /> */}
      <ContactUsSection />
    </PageWrapper>
  );
};

export default ContactUs;

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
