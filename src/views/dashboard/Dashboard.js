import React from "react";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NewsCarousel from "../../components/dashboard/Carousel";
import ProfileInfo from "../../components/dashboard/ProfileInfo";
import NewsBlock from "../../components/dashboard/NewsBlock";
const useStyles = makeStyles((theme) => ({
  rootContainer: {
    padding: theme.spacing(5, 3),
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  return (
    <Grid container className={classes.rootContainer}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} lg={7}>
            <NewsCarousel />
          </Grid>
          <Grid item xs={12} sm={12} lg={5}>
            <ProfileInfo />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <NewsBlock />
      </Grid>
    </Grid>
  );
}
