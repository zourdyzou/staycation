// import { Home } from "../containers/Home";
import { Layout } from "../components/Layout/Layout";

import { getRooms } from "../redux/actions/roomAction";
import { wrapper } from "../redux/store";
import { Hero } from "../components/Layout/Hero";
import { Explore } from "../components/Layout/Explore";
import { Home } from "../containers/Home";
import { CardFeatured } from "../components/Card/CardContainer";

export default function Index() {
  return (
    <Layout>
      <Hero />
      <main className="max-w-6xl mx-auto pb-32">
        <Explore />
        <Home />
        <CardFeatured />
      </main>
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, query }) => {
      await store.dispatch(
        getRooms(req, query.page, query.location, query.guests, query.category)
      );
    }
);
