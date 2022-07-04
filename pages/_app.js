import React from "react";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import AuthContextProvider from "../store/auth-context";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lyful Med</title>
        <meta
          name="description"
          content="The best website for your health tips!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
