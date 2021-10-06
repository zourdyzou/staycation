import React from "react";
import { getSession } from "next-auth/client";

import { myBookingDetails } from "../../redux/actions/bookingAction";
import { Layout } from "../../components/Layout/Layout";
import { BookingDetails } from "../../components/Booking/BookingDetails";
import { wrapper } from "../../redux/store";

const MyBookingPage = () => {
  return (
    <Layout title="Booking Details | staycation.com">
      <BookingDetails />
    </Layout>
  );
};

// HANDLING => protected routes in the server side
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }) => {
      const session = await getSession({ req });

      // RUN => there is no user in session
      if (!session) {
        return {
          redirect: {
            destination: "/login",
            permanent: false,
          },
        };
      }

      // SENDING COOKIE TO THE BACK-END => THERE IS NO SESSION AT THE MOMENT
      await store.dispatch(
        myBookingDetails(req.headers.cookie, req, params.id)
      );

      return {
        props: {
          session,
        },
      };
    }
);

export default MyBookingPage;
