import Head from "next/head";
import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

interface MainLayout {
  title: string;
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayout> = ({ title, children }) => {
  return (
    <div className="wrapper">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default MainLayout;
