import React from "react";
import { getSession } from "next-auth/client";
import { Profile } from "../../components/User/Profile";
import { Layout } from "../../components/Layout/Layout";

const UpdateProfilePage = () => {
  return (
    <Layout title="Update Profile | staycation.com">
      <Profile />
    </Layout>
  );
};

// HANDLING => protected routes in the server side
export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  // RUN => there is no user in session
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

export default UpdateProfilePage;
