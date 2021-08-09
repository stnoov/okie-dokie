import React from "react";
import {
  makeStyles,
  Grid,
  Typography,
  withWidth,
  isWidthDown,
} from "@material-ui/core";
import { useIntl } from "react-intl";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  styledMainGrid: {
    padding: theme.spacing(1, 2),
    backgroundColor: theme.palette.primary.light,
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
  const [userData, setUserData] = React.useState();
  const fetchUserData = () => {
    axios
      .get("http://localhost:8080/api/users/get_user_data", {
        headers: {
          "x-access-token": localStorage.getItem("user"),
        },
      })
      .then((response) => {
        setUserData(response.data.userData);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  React.useEffect(() => {
    console.log("updated");
    fetchUserData();
  }, []);
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
                  {userData?.balance}₽
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
                  {userData?.okie_dokie_points}
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
                  {userData?.classes_completed}
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
