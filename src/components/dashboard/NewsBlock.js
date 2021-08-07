import React from "react";
import { makeStyles, Grid, Typography, withWidth } from "@material-ui/core";
import { useIntl } from "react-intl";

const useStyles = makeStyles((theme) => ({
  styledMainGrid: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1, 2),
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    borderRadius: 4,
    [theme.breakpoints.down("sm")]: {},
  },
  styledTitle: {},
  styledSubTitle: {
    color: "#0387B7",
  },
  styledInnerContainer: {
    backgroundColor: theme.palette.common.white,
    borderRadius: 4,
  },
  styledNewsBlock: {
    borderRadius: 4,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.dark,
  },
  newsContent: {
    padding: theme.spacing(2),
  },
}));

function ProfileInfo({ width }) {
  const classes = useStyles();
  const intl = useIntl();
  return (
    <Grid container className={classes.styledMainGrid} spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">
          {intl.formatMessage({
            id: "fields.latest_news",
            defaultMessage: "Latest news",
          })}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Grid container className={classes.styledNewsBlock}>
              <Grid item xs={12} className={classes.newsContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Grid>
              <Grid item className={classes.newsContent}>
                28 August, 2021
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container className={classes.styledNewsBlock}>
              <Grid item xs={12} className={classes.newsContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Grid>
              <Grid item className={classes.newsContent}>
                28 August, 2021
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container className={classes.styledNewsBlock}>
              <Grid item xs={12} className={classes.newsContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Grid>
              <Grid item className={classes.newsContent}>
                28 August, 2021
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default withWidth()(ProfileInfo);
