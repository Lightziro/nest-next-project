import { NextPage } from "next";
import { HEADER_ITEMS } from "../../../items/menu";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { useTransition, animated } from "react-spring";
import { MainContainer } from "../../ui/MainContainer";
import { Grid } from "@mui/material";
import classes from "../../../styles/landing/header.module.scss";
import clsx from "clsx";

const Header: NextPage = () => {
  const router = useRouter();
  const transitions = useTransition(HEADER_ITEMS, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    delay: 50,
  });

  return (
    <div className={classes.wrapperHeader}>
      <MainContainer>
        <Grid container alignContent="center">
          <Grid
            justifyContent={{ sm: "center", xs: "center" }}
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            item
          >
            <img
              className={classes.logo}
              alt="Company logo"
              src="/images/logo.svg"
            />
          </Grid>
          <Grid
            container
            spacing={4}
            xs={12}
            sm={12}
            md={8}
            lg={8}
            xl={8}
            item
            justifyContent={{ sm: "center", xs: "center" }}
            direction="row"
            alignContent="center"
          >
            {transitions((style, item) => (
              <Grid item>
                <Link href={item.value}>
                  <animated.a
                    className={clsx(
                      classes.headerItem,
                      item.value === router.asPath ? classes.active : ""
                    )}
                    style={{ ...style }}
                  >
                    {item.label}
                  </animated.a>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </MainContainer>
    </div>
  );
};
export default Header;
