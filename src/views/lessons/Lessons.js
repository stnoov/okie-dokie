import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import { useIntl } from "react-intl";

const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

export default function Lessons() {
  const classes = useStyles();
  const intl = useIntl();
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h1" color="primary">
            {intl.formatMessage({
              id: "routes.lessons",
              defaultMessage: "Lessons",
            })}
          </Typography>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </React.Fragment>
  );
}
