import React, { Fragment } from "react";
import { Grid } from "@mui/material";
import { HALF_GRID } from "../../../../items/ui";
import classes from "../../../../styles/landing/services.module.scss";
import { useTransition, animated } from "react-spring";
import { WEBSITE_ITEMS } from "../../../../items/menu";

export const WebSite: React.FC = () => {
  const transition = useTransition(null, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    delay: 100,
  });
  return (
    <Grid container direction="row">
      {transition((style) => (
        <Fragment>
          <Grid item {...HALF_GRID} direction="column" xs={12} sm={12}>
            <animated.div style={{ ...style }} className="title-text">
              Веб-сайт
            </animated.div>
            <animated.p style={{ ...style }} className="description">
              Мы специализируемся на разработке веб-сайтов, которые повысят
              продажи вашего бизнеса
            </animated.p>
            <animated.p
              style={{ ...style }}
              className="description none-margin"
            >
              Наши приемущества в разработке:
            </animated.p>
            <animated.ul style={{ ...style }} className={classes.list}>
              {WEBSITE_ITEMS.map((item) => (
                <li className={classes.type}>{item}</li>
              ))}
            </animated.ul>
          </Grid>
          <Grid item {...HALF_GRID} sm={12} xs={12}>
            <animated.img
              style={{ ...style }}
              className={classes.picture}
              src="/images/picture/site-create.svg"
            />
          </Grid>
        </Fragment>
      ))}
    </Grid>
  );
};
