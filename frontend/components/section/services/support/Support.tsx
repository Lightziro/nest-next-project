import React, { Fragment } from "react";
import { Grid } from "@mui/material";
import { HALF_GRID } from "../../../../items/ui";
import classes from "../../../../styles/landing/services.module.scss";
import { SUPPORT_ITEMS } from "../../../../items/menu";
import { animated, useTransition } from "react-spring";

export const Support: React.FC = () => {
  const transition = useTransition(null, {
    from: { opacity: 0, transform: "translate3d(-100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    delay: 200,
  });

  return (
    <Grid container spacing={2} className={classes.containerSupport}>
      {transition((style) => (
        <Fragment>
          <Grid item {...HALF_GRID} sm={12} xs={12}>
            <animated.img
              style={{ ...style }}
              className={classes.picture}
              src="/images/picture/support.svg"
            />
          </Grid>
          <Grid item {...HALF_GRID} sm={12} xs={12} direction="column">
            <animated.div style={{ ...style }} className="title-text">
              Техническая поддержка
            </animated.div>
            <animated.p style={{ ...style }} className="description">
              Вам требуется доработка вашего веб-проекта? Мы готовы без проблем
              доработать ваш проект вне зависимости от того, кто его создал
            </animated.p>
            <animated.p
              style={{ ...style }}
              className="description none-margin"
            >
              Техническая поддержка включает в себя:
            </animated.p>
            <animated.ul style={{ ...style }} className={classes.list}>
              {SUPPORT_ITEMS.map((item) => (
                <li className={classes.type}>{item}</li>
              ))}
            </animated.ul>
          </Grid>
        </Fragment>
      ))}
    </Grid>
  );
};
