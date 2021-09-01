import React from "react";
import {
  makeStyles,
  Grid,
  Paper,
  Typography,
  withWidth,
  isWidthDown,
} from "@material-ui/core";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../actions/auth";

const useStyles = makeStyles((theme) => ({
  styledTitle: {
    color: theme.palette.primary.dark,
  },
  styledSubTitle: {
    color: "#0387B7",
  },
  styledPaper: {
    padding: theme.spacing(2),
    height: "100%",
    backgroundColor: theme.palette.primary.light,
  },
}));

function ProfileInfo({ width }) {
  const classes = useStyles();
  const intl = useIntl();
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);
  React.useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  return (
    <Paper className={classes.styledPaper}>
      <Grid container className={classes.styledMainGrid}>
        <Grid item xs={12}>
          <Grid
            container
            alignItems="center"
            justify={isWidthDown("md", width) ? "flex-start" : "center"}
            spacing={2}
            className={classes.styledTitle}
          >
            <Grid item xs={12} sm={4}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h4" classN>
                    {intl.formatMessage({
                      id: "fields.account_balance",
                      defaultMessage: "Account balance",
                    })}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h3" className={classes.styledSubTitle}>
                    {currentUser.balance}₽
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
                    {currentUser.okie_dokie_points}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={11} sm={3}>
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
                    {currentUser.classes_completed}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default withWidth()(ProfileInfo);
