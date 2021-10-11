import { getSession } from "next-auth/client";
import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Profile } from "../../components/User/Profile";

const UpdateProfilePage = () => {
  return (
    <Layout title="Update Profile | staycation.com">
      <main className="max-w-6xl mx-auto pt-24 pb-0 md:py-24">
        <Profile />
      </main>
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
