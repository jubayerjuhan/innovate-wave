import client from "@/client/client";
import PageWrapper from "@/components/wrappers/PageWrapper/PageWrapper";
import React from "react";

const AboutUs = () => {
  return <PageWrapper></PageWrapper>;
};

export default AboutUs;

export async function getServerSideProps() {
  try {
    const footer = await client.fetch(`*[_type == 'homepage'][0].footer`);
    console.log(footer, "footer...");
    return { props: { footer } };
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return { props: { footer: null } };
  }
}
