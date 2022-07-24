import React from "react";
import { Grid } from "@mui/material";
import { HALF_GRID } from "../../../../items/ui";

export const Map: React.FC = () => {
  return (
    <Grid {...HALF_GRID} xs={12} sm={12} item>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A34fc7332ace5eb1e015d6c961835acde49a5d303b749424b10021c936dccfa93&amp;source=constructor"
        width="100%"
        height="400"
        frameBorder="0"
      />
    </Grid>
  );
};
