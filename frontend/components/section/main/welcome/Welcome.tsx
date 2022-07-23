import React from "react";
import { MainContainer } from "../../../ui/MainContainer";
import { Grid } from "@mui/material";
import classes from "../../../../styles/landing/main.module.scss";
import { AUTO_GRID, HALF_GRID, ONE_FOURTH } from "../../../../items/ui";
import { useTransition, animated } from "react-spring";

export const Welcome: React.FC = () => {
  const transitionPicture = useTransition(null, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    delay: 50,
  });
  return (
    <MainContainer>
      <Grid container direction="row">
        <Grid
          className={classes.wrapperMain}
          item
          container
          direction="column"
          {...HALF_GRID}
          xs={12}
          sm={7}
        >
          <Grid item>
            <div className={classes.title}>Мы создаём лучшие продукты</div>
          </Grid>
          <Grid item>
            <p className={classes.description}>
              Help find solutions with intitutive and in accordance with client
              business goals. we provide a high-quality services.
            </p>
          </Grid>
          <Grid item>
            <button className={classes.buttonContact}>Связаться с нами</button>
          </Grid>
        </Grid>

        {transitionPicture((style, item) => (
          <Grid xs={false} sm={5} md={6} lg={6} xl={6} item>
            <animated.img
              style={{ ...style }}
              src="/images/picture/programmer.svg"
              className={classes.pictureMain}
            />
          </Grid>
        ))}
      </Grid>
    </MainContainer>
  );
};
