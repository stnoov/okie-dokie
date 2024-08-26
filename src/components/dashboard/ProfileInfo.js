import React from "react";
import {
  makeStyles,
  Grid,
  Paper,
  Typography,
  withWidth,
} from "@material-ui/core";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../actions/auth";

const useStyles = makeStyles((theme) => ({
  styledSubTitle: {
    color: "#0387B7",
  },
  styledPaper: {
    padding: theme.spacing(2),
    height: "100%",
    backgroundColor: theme.palette.primary.light,
  },
  categoryTitle: {
    fontSize: 26,
    color: theme.palette.primary.dark,
    [theme.breakpoints.down("md")]: {
      fontSize: 24,
    },
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
    <Paper className={classes.styledPaper} elevation={0}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "100%" }}
        spacing={1}
      >

        <Grid item xs={12} sm={6}>
          <Grid container direction="column" alignItems="center">
            <Grid item xs={12}>
              <Typography
                variant="h4"
                className={classes.categoryTitle}
                align="center"
              >
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

        <Grid item xs={12} sm={6}>
          <Grid container direction="column" alignItems="center">
            <Grid item xs={12}>
              <Typography
                variant="h4"
                className={classes.categoryTitle}
                align="center"
              >
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


      </Grid>
    </Paper>
  );
}
export default withWidth()(ProfileInfo);
