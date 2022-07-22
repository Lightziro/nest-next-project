import { Container, Grid } from "@mui/material";
import { NextPage } from "next";
import { useEffect, useRef } from "react";
import { io } from "socket.io-client";
import classes from "../styles/landing/main.module.scss";
import { HEADER_ITEMS } from "../items/menu";
import { HALF_GRID, ONE_FOURTH } from "../items/ui";
import clsx from "clsx";
import { MainContainer } from "../components/ui/MainContainer";
import Footer from "../components/footer/Footer";

const Index: NextPage = () => {
  const socketRef = useRef(null);
  useEffect(() => {
    socketRef.current = io("http://localhost:6001");
  });
  return (
    <>
      <MainContainer>
        <Grid
          container
          sx={{ mt: 4 }}
          lg={12}
          xl={12}
          md={12}
          className={classes.wrapperHeader}
          alignContent="center"
        >
          <Grid xs={12} sm={4} md={4} lg={4} xl={4} item>
            <img src="/images/logo.svg" />
          </Grid>
          <Grid
            container
            spacing={8}
            xs={12}
            sm={8}
            md={8}
            lg={8}
            xl={8}
            item
            direction="row"
            alignContent="center"
          >
            {HEADER_ITEMS.map((item) => (
              <Grid item>
                <div className={classes.headerItem}>{item.label}</div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </MainContainer>

      <Grid container direction="column">
        <MainContainer>
          <Grid container direction="row">
            <Grid
              className={classes.wrapperMain}
              item
              direction="column"
              {...HALF_GRID}
            >
              <Grid item>
                <div className={classes.title}>Мы создаём лучшие продукты</div>
              </Grid>
              <Grid item>
                <p className={classes.description}>
                  Help find solutions with intitutive and in accordance with
                  client business goals. we provide a high-quality services.
                </p>
              </Grid>
              <Grid direction="row" container spacing={3}>
                <Grid item>
                  <button className={classes.buttonContact}>
                    Связаться с нами
                  </button>
                </Grid>
                <Grid
                  item
                  container
                  alignItems="center"
                  {...HALF_GRID}
                  spacing={2}
                >
                  <Grid item>
                    <img
                      className={clsx(classes.itemWatch, classes.watchIcon)}
                      src="/images/icons/video-button.svg"
                    />
                  </Grid>
                  <Grid item>
                    <span className={classes.itemWatch}>
                      Смотреть наши продукты
                    </span>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={6} sm={6} md={6} lg={6} xl={6} item>
              <img
                className={classes.pictureMain}
                src="/images/picture/programmer.svg"
              />
            </Grid>
          </Grid>
        </MainContainer>
        <div className={classes.cooperationWrapper}>
          <MainContainer>
            <span className={classes.title}>Наши клиенты</span>
            <Grid container spacing={4} justifyContent="center">
              <Grid {...ONE_FOURTH} item>
                <img
                  className={classes.logo}
                  src="/images/logos/beton-43-logo.svg"
                />
              </Grid>
            </Grid>
          </MainContainer>
        </div>
      </Grid>
      <Footer />
    </>
  );
};
export default Index;
// export const getStaticProps: GetStaticProps = async () => {
//   const data = await axios.get("/").then((res) => res.data);
//   console.log(data);
//   return {
//     props: {},
//     revalidate: 20,
//   };
// };
