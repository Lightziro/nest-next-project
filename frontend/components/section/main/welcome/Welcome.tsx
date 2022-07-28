import React from "react";
import { MainContainer } from "../../../ui/MainContainer";
import { Grid } from "@mui/material";
import classes from "../../../../styles/landing/main.module.scss";
import { HALF_GRID } from "../../../../items/ui";
import { animated, useTransition } from "react-spring";

interface Welcome {
  setOpen: () => void;
}
export const Welcome: React.FC<Welcome> = ({ setOpen }) => {
  const transitionPicture = useTransition(null, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    delay: 50,
  });
  const transitionBlock = useTransition(null, {
    from: { opacity: 0, transform: "translate3d(-100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    delay: 50,
  });

  return (
    <MainContainer>
      <Grid container direction="row">
        {transitionBlock((style, item) => (
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
              <animated.div style={{ ...style }} className="title-text">
                Мы создаём лучшие продукты
              </animated.div>
            </Grid>
            <Grid item>
              <animated.p style={{ ...style }} className="description">
                Компания "АйТиХаб" занимается разработкой веб-приложений,
                сервисов и оптимизацией бизнес-процессов для улучшения бизнеса
                клиентов.
              </animated.p>
            </Grid>
            <Grid item>
              <animated.button
                className="button-contact"
                style={{ ...style }}
                onClick={setOpen}
              >
                Связаться с нами
              </animated.button>
            </Grid>
          </Grid>
        ))}

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
