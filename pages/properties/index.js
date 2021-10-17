import React from "react";
import { useRouter } from "next/router";

import { getRooms } from "../../redux/actions/roomAction";
import { wrapper } from "../../redux/store";
import { Layout } from "../../components/Layout/Layout";
import { BreadCrumbs } from "../../components/Misc/BreadCrumbs";
import { Property } from "../../containers/Property";

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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, query }) => {
      await store.dispatch(
        getRooms(req, query.page, query.location, query.guests, query.category)
      );
    }
);
