import React from "react";
import { Grid, Stack } from "@mui/material";
import { HALF_GRID, ONE_SIXTH } from "../../../../items/ui";
import classes from "../../../../styles/landing/contacts.module.scss";
import { CONTACT_ITEMS } from "../../../../items/menu";

export const Information: React.FC = () => {
  return (
    <Grid {...HALF_GRID} xs={12} sm={12} item container direction="column">
      <span className={classes.titleContact}>Контакты</span>
      <Grid container direction="column" spacing={2}>
        {CONTACT_ITEMS.map((item) => (
          <Grid
            className={classes.contactItemWrapper}
            container
            item
            direction="row"
            spacing={{ xs: 2, sm: 4 }}
          >
            <Grid {...ONE_SIXTH} xs={12} item>
              <span className={classes.title}>{item.title}</span>
            </Grid>
            <Grid item>
              <span>{item.description}</span>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
