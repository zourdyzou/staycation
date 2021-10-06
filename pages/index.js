// import { Home } from "../containers/Home";
import { Layout } from "../components/Layout/Layout";

import { getRooms } from "../redux/actions/roomAction";
import { wrapper } from "../redux/store";

export default function Index() {
  return (
    <Layout>
      {/* <Home /> */}
      <h1>Hello World</h1>
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
