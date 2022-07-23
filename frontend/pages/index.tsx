import { Grid } from "@mui/material";
import { NextPage } from "next";
import Footer from "../components/footer/Footer";
import { AboutCompany } from "../components/section/main/about-company/AboutCompany";
import { Clients } from "../components/section/main/clients/Clients";
import { Welcome } from "../components/section/main/welcome/Welcome";
import Header from "../components/basic/header/Header";
import classes from "../styles/landing/main.module.scss";

const Index: NextPage = () => {
  return (
    <>
      <Header />
      <Grid container direction="column" className={classes.container}>
        <Welcome />
        <Clients />
        <AboutCompany />
      </Grid>
      <Footer />
    </>
  );
};
export default Index;
