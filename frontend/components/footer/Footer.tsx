import { NextPage } from "next";
import React, { Fragment } from "react";
import { useRouter } from "next/router";
import classes from "../../styles/landing/main.module.scss";
import { MainContainer } from "../ui/MainContainer";
import { Divider, Grid } from "@mui/material";
import { FOOTER_ITEMS } from "../../items/menu";

const Footer: NextPage = () => {
  const router = useRouter();

  return (
    <footer className={classes.footer}>
      <MainContainer>
        <Grid direction="column">
          <Grid item>
            <img src="/images/logo.svg" />
          </Grid>
          <Grid
            item
            justifyContent="space-between"
            alignItems="center"
            container
          >
            <Grid item>
              {FOOTER_ITEMS.map((item) => (
                <span className={classes.itemPage}>{item.label}</span>
              ))}
            </Grid>
            <Grid item>
              <span></span>
            </Grid>
          </Grid>
          <Grid item className={classes.copyright}>
            © 2022 «АйТиХаб» - Все права защищены
          </Grid>
        </Grid>
      </MainContainer>
    </footer>
  );
};
export default Footer;
