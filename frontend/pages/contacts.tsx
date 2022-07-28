import { NextPage } from "next";
import MainLayout from "../layouts/MainLayout";
import { Divider, Grid } from "@mui/material";
import { MainContainer } from "../components/ui/MainContainer";
import { Information } from "../components/section/contacts/information/Information";
import { Map } from "../components/section/contacts/map/Map";
import classes from "../styles/landing/contacts.module.scss";

const Contacts: NextPage = () => {
  return (
    <MainLayout title="АйТиХаб | Контакты">
      <MainContainer className={`containerPage`}>
        <Grid spacing={3} container direction="row">
          <Information />
          <Map />
        </Grid>
        <Divider sx={{ my: 3 }} />
        <div className="help-text">
          Мы всегда готовы помочь с решением и оптимизацией ваших
          бизнес-процессов для ускорения работы вашего бизнеса
        </div>
      </MainContainer>
    </MainLayout>
  );
};
export default Contacts;
