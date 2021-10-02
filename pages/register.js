import { getSession } from "next-auth/client";
import { Register } from "../components/Auth/Register";
import { Layout } from "../components/Layout/Layout";

export default function Index() {
  return (
    <Layout>
      <Register />
    </Layout>
  );
}

// HANDLING => protected routes in the server side
export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  // RUN => there is no user in session
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      doom: "protected routes",
    },
  };
};
