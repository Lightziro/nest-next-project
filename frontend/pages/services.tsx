import React from "react";
import { NextPage } from "next";
import MainLayout from "../layouts/MainLayout";
import { MainContainer } from "../components/ui/MainContainer";
import { Grid } from "@mui/material";
import { WebSite } from "../components/section/services/web-site/WebSite";
import { Support } from "../components/section/services/support/Support";
import { PriceServices } from "../components/section/services/price-services/PriceServices";

const Services: NextPage = () => {
  return (
    <MainLayout title="АйТиХаб | Услуги и наши решения">
      <Grid direction="column" container className={`containerPage`}>
        <MainContainer>
          <WebSite />
          <Support />
          <PriceServices />
        </MainContainer>
      </Grid>
    </MainLayout>
  );
};
export default Services;
