import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import NewsDetailsPage from "@/components/NewsSection/NewsDetailsPage";
import PageHeader from "@/components/Reuseable/PageHeader";
import React from "react";

const Products = () => {
  return (
    <Layout pageTitle="Products" footerClassName="site-footer-three">
      <Header />
      <PageHeader title="Products" />
      <NewsDetailsPage />
    </Layout>
  );
};

export default Products;
