import { Layout } from "../components/Layout/Layout";

import { getRooms } from "../redux/actions/roomAction";
import { wrapper } from "../redux/store";

import { Hero } from "../components/Layout/Hero";
import { Explore } from "../components/Layout/Explore";
import { RoomsFeatured } from "../containers/RoomsFeatured";
import { CardFeatured } from "../components/Card/CardContainer";
import { HomeFeatured } from "../containers/HomeFeatured";
import { PopularChoiceFeatured } from "../containers/PopularChoiceFeatured";
import { Jumbotron } from "../components/Misc/Jumbotron";

export default function Index() {
  return (
    <Layout>
      <Hero />
      <main className="max-w-6xl mx-auto pb-32">
        <Explore />
        <RoomsFeatured />
        <CardFeatured />
        <HomeFeatured />
        <PopularChoiceFeatured />
        <Jumbotron
          img="https://res.cloudinary.com/zourdyzh/image/upload/v1633886567/kazachok_kmxeeh.webp"
          title="The Greatest Outdoors"
          description="Wishlists curates by"
          pitcher="Staycation"
          buttonText="Check It Out"
        />
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
