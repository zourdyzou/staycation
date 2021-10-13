import React from "react";

import { useRouter } from "next/router";
import { Layout } from "../components/Layout/Layout";
import { BreadCrumbs } from "../components/Misc/BreadCrumbs";
import { Property } from "../containers/Property";

const PropertiesPage = () => {
  const router = useRouter();

  return (
    <Layout title="Properties and Hotels | Staycation">
      <BreadCrumbs link={router.pathname.slice(1)} />
      <div className="pt-8 pb-36">
        <Property />
      </div>
    </Layout>
  );
};

export default PropertiesPage;
