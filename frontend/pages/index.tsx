import { Grid } from "@mui/material";
import { NextPage } from "next";
import Footer from "../components/footer/Footer";
import { AboutCompany } from "../components/section/main/about-company/AboutCompany";
import { Clients } from "../components/section/main/clients/Clients";
import { Welcome } from "../components/section/main/welcome/Welcome";
import React, { useState, Fragment } from "react";
import { ContactModal } from "../components/smart/contact-modal/ContactModal";
import MainLayout from "../layouts/MainLayout";

const Index: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <MainLayout title="АйТиХаб | Оптимизация бизнес-процессов">
      <Grid container direction="column" className="containerPage">
        <Welcome setOpen={() => setOpen(!open)} />
        <Clients />
        <AboutCompany />
      </Grid>
      <ContactModal open={open} handleOpen={() => setOpen(!open)} />
    </MainLayout>
  );
};
export default Index;
