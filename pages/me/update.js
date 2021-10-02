import React from "react";
import { getSession } from "next-auth/client";

const UpdateProfilePage = () => {
  return (
    <div>
      <h1>User Profile</h1>
    </div>
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
