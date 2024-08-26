import React from "react";
import { Paper, Button, makeStyles, Grid, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useIntl } from "react-intl";

const useStyles = makeStyles((theme) => ({
  styledPaper: {
    padding: theme.spacing(1, 2),
    backgroundColor: theme.palette.primary.light,
    [theme.breakpoints.down("sm")]: {
      width: "inherit",
    },
  },
  styledTitle: {
    fontWeight: 800,
  },
}));

export default function NewsCarousel() {
  const classes = useStyles();
  const history = useHistory();
  const intl = useIntl();
  const transferToPromotions = () => {
    history.push("/about_us");
  };
  return (
    <Grid item xs={12}>
      <Paper className={classes.styledPaper} elevation={0}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              сlassName={classes.styledTitle}
              color="primary"
            >
              {intl.formatMessage({
                id: "fields.welcome",
                defaultMessage: "Welcome to OkieDokie!",
              })}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              {intl.formatMessage({
                id: "fields.welcome_description",
                defaultMessage: `Do you want to speak English fluently? Are you looking for a cozy and friendly atmosphere to practice? Do you like playing games? Join our events to chat with like-minded people!`,
              })}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              color="secondary"
              variant="contained"
              onClick={transferToPromotions}
            >
              {intl.formatMessage({
                id: "fields.learn_more",
                defaultMessage: `Learn more`,
              })}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
