import Head from "next/head";
import React from "react";
import Header from "../components/basic/header/Header";
import Footer from "../components/basic/footer/Footer";
import { SpeedDial, SpeedDialIcon } from "@mui/material";

interface MainLayout {
  title: string;
  children?: React.ReactNode;
  description?: string;
}

const MainLayout: React.FC<MainLayout> = ({
  title,
  children,
  description = "",
}) => {
  return (
    <div className="wrapper">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
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
