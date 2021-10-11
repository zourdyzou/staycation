import { getSession } from "next-auth/client";
import { Layout } from "../components/Layout/Layout";
import { Login } from "../components/Auth/Login";

export default function LoginPage() {
  return (
    <Layout title="Login User | staycation.com">
      <main className="max-w-6xl mx-auto pt-24 pb-0 md:py-24">
        <Login />
      </main>
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
