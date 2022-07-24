import React from "react";
import { Grid } from "@mui/material";
import { HALF_GRID } from "../../../../items/ui";

export const WebSite: React.FC = () => {
  return (
    <Grid container direction="row">
      <Grid item {...HALF_GRID}>
        Test
      </Grid>
      <Grid item {...HALF_GRID}>
        Test
      </Grid>
    </Grid>
  );
};
