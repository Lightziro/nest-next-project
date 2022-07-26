import React from "react";
import { Grid } from "@mui/material";
import { HALF_GRID } from "../../../../items/ui";

export const WebSite: React.FC = () => {
  return (
    <Grid container direction="row">
      <Grid item {...HALF_GRID} direction="column">
        <div className="title-text">Веб-сайт</div>
        <p className="description">
          Мы специализируемся на разработке веб-сайтов, которые повысят продажи
          вашего бизнеса
        </p>
      </Grid>
      <Grid item {...HALF_GRID}>
        <img src="/images/picture/site-create.svg" />
      </Grid>
    </Grid>
  );
};
