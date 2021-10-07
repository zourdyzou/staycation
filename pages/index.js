// import { Home } from "../containers/Home";
import { Layout } from "../components/Layout/Layout";

import { getRooms } from "../redux/actions/roomAction";
import { wrapper } from "../redux/store";
import { Hero } from "../components/Layout/Hero";

export default function Index() {
  return (
    <Layout>
      {/* <Home /> */}
      {/* <div className="flex items-center max-w-6xl mx-auto p-5 mt-52 bg-green-700">
        <h1>Hello World</h1>
      </div> */}
      <Hero />
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
