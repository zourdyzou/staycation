import React from "react";

import { useRouter } from "next/router";
import { Layout } from "../components/Layout/Layout";
import { BreadCrumbs } from "../components/Misc/BreadCrumbs";

const PropertiesPage = () => {
  const router = useRouter();

  return (
    <Layout title="Properties and Hotels | Staycation">
      <BreadCrumbs link={router.pathname.slice(1)} />
    </Layout>
  );
};

export default PropertiesPage;
