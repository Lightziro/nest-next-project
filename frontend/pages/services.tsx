import React from "react";
import { NextPage } from "next";
import MainLayout from "../layouts/MainLayout";
import { MainContainer } from "../components/ui/MainContainer";
import { Grid } from "@mui/material";
import { WebSite } from "../components/section/services/web-site/WebSite";

const Services: NextPage = () => {
  return (
    <MainLayout title="АйТиХаб | Услуги и наши решения">
      <MainContainer className={`containerPage`}>
        <Grid direction="column" container spacing={3}>
          <WebSite />
        </Grid>
      </MainContainer>
    </MainLayout>
  );
};
export default Services;
