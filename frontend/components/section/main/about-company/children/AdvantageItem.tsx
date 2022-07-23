import { Grid } from "@mui/material";
import { HALF_GRID } from "../../../../../items/ui";
import classes from "../../../../../styles/landing/main.module.scss";
import { UIItem } from "../../../../../ts/types/additional";
import React from "react";

interface AdvantageItem {
  item: UIItem;
}
export const AdvantageItem: React.FC<AdvantageItem> = ({ item }) => {
  return (
    <Grid
      {...HALF_GRID}
      item
      direction="column"
      container
      className={classes.priorityItem}
    >
      <img className={classes.icon} src={item.img} alt="Calendar icon" />
      <span className={classes.text}>{item.title}</span>
      <p className={classes.explanation}>{item.description}</p>
    </Grid>
  );
};
