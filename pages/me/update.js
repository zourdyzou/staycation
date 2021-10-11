import React from "react";
import { getSession } from "next-auth/client";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "../../components/Layout/Layout";
// import { Profile } from "../../components/User/Profile";

const UpdateProfilePage = () => {
  return (
    <Layout title="Update Profile | staycation.com">
      {/* <Profile /> */}

      <main className="max-w-6xl mx-auto pt-24 pb-0 md:py-24">
        <div className="flex flex-col justify-center items-center transform translate-x-10 sm:translate-x-0">
          <div className="relative h-[400px] w-[500px] transform translate-x-5 sm:translate-x-0">
            <Image
              className="bg-cover bg-center"
              src="/animations/404.gif"
              alt="page is not found | staycation"
              layout="fill"
            />
          </div>

          <div className="flex flex-col justify-center items-center space-y-9 pt-5 transform translate-x-5 sm:translate-x-0">
            <h2 className="md:px-60 text-center text-xl">
              Ooops! The page that you are visited is either not found or
              currently in the development process.
            </h2>

            <Link passHref href="/">
              <button className="px-6 py-3 w-52 flex justify-center bg-indigo-600 text-white rounded-lg hover:bg-indigo-800 transition ease-in duration-150">
                Back To Home
              </button>
            </Link>
          </div>
        </div>
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
