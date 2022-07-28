import React from "react";
import "../styles/main.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
export default MyApp;
