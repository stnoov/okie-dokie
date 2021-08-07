import React from "react";
import Carousel from "react-material-ui-carousel";
import {
  Paper,
  Button,
  makeStyles,
  Grid,
  Typography,
  withWidth,
  isWidthDown,
} from "@material-ui/core";
import classNames from "classnames";
import { useIntl } from "react-intl";

const useStyles = makeStyles((theme) => ({
  styledMainGrid: {
    padding: theme.spacing(1, 2),
    backgroundColor: theme.palette.primary.main,
    height: "85%",
    borderRadius: 4,
    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
  },
  styledTitle: {
    color: theme.palette.primary.dark,
  },
  styledSubTitle: {
    color: "#0387B7",
  },
}));

function ProfileInfo({ width }) {
  const classes = useStyles();
  const intl = useIntl();
  return (
    <Grid container className={classes.styledMainGrid}>
      <Grid item xs={12}>
        <Grid
          container
          alignItems="center"
          justify={isWidthDown("sm", width) ? "flex-start" : "center"}
          spacing={2}
          className={classes.styledTitle}
        >
          <Grid item xs={12} sm={4}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h4">
                  {intl.formatMessage({
                    id: "fields.account_balance",
                    defaultMessage: "Account balance",
                  })}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h3" className={classes.styledSubTitle}>
                  1000₽
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h4">OkieDokie Points</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h3" className={classes.styledSubTitle}>
                  22
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h4">
                  {intl.formatMessage({
                    id: "fields.completed_lessons",
                    defaultMessage: "Completed lessons",
                  })}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h3" className={classes.styledSubTitle}>
                  8
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default withWidth()(ProfileInfo);
