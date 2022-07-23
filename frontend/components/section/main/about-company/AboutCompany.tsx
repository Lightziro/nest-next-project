import { MainContainer } from "../../../ui/MainContainer";
import { Grid } from "@mui/material";
import classes from "../../../../styles/landing/main.module.scss";
import { AUTO_GRID, HALF_GRID } from "../../../../items/ui";
import React from "react";
import { AdvantageItem } from "./children/AdvantageItem";
import { ADVANTAGE_ITEMS } from "../../../../items/menu";

export const AboutCompany: React.FC = () => {
  return (
    <MainContainer>
      <Grid spacing={5} container className={classes.aboutWrapper}>
        <Grid {...HALF_GRID} xs={12} item direction="column">
          <span className={classes.title}>Мы упростим вашу работу</span>
          <p className={classes.description}>
            Благодаря нашим современным решениям мы упростим ваши
            бизнес-процессы и сделаем вашу работу проще и лучше
          </p>
        </Grid>
        <Grid {...AUTO_GRID} item container spacing={3}>
          {ADVANTAGE_ITEMS.map((item) => (
            <AdvantageItem item={item} />
          ))}
        </Grid>
      </Grid>
    </MainContainer>
  );
};
