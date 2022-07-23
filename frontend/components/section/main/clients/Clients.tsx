import React from "react";
import classes from "../../../../styles/landing/main.module.scss";
import { Grid } from "@mui/material";
import { ONE_SIXTH } from "../../../../items/ui";

export const Clients: React.FC = () => {
  return (
    <Grid container direction="column" className={classes.cooperationWrapper}>
      <Grid item>
        <div className={classes.title}>Наши клиенты</div>
      </Grid>
      <Grid item container spacing={4} justifyContent="center">
        <Grid {...ONE_SIXTH} item>
          <img className={classes.logo} src="/images/logos/beton-43-logo.svg" />
        </Grid>
      </Grid>
    </Grid>
  );
};
