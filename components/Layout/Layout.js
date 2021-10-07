import React from "react";
import Head from "next/head";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({
  children,
  title = "Book the best hotels for your holiday! | Staycation.com",
  description = "Welcome to staycation!, where you can find the beauty of our world!",
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <ToastContainer position="top-right" autoClose={5000} />
      {children}
      <Footer />
    </div>
  );
};
