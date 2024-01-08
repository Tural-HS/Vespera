import Compliance_details from "@/components/Compliance/compliance_details";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";

import PageHeader from "@/components/Reuseable/PageHeader";
import React from "react";

const Compliance_page = () => {
  return (
    <Layout pageTitle="Compliance" footerClassName="site-footer-three">
      <Header />
      <PageHeader title="Compliance" />
      <Compliance_details />
    </Layout>
  );
};

export default Compliance_page;
