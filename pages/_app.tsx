import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}

export default MyApp;
