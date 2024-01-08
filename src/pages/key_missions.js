import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import Missions from "@/components/ServicesSection/Missions";
import React from "react";

const key_missions = () => {
  return (
    <Layout pageTitle="Services" footerClassName="site-footer-three">
      <Header />
      <PageHeader page="Key Missions Of Our Company" title="Key Missions Of Our Company" />
      <Missions hideTitle />
    </Layout>
  );
};

export default key_missions;
