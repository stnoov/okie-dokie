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
    history.push("/promotions");
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
                id: "fields.loyalty_program",
                defaultMessage: "Loyalty program",
              })}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              {intl.formatMessage({
                id: "fields.loyalty_program_description",
                defaultMessage: `Earn OkieDokie points and get free lessons! You can get OkieDokie
              points for reposting the latest news of our club, winning quizzes
              and inviting friends to our meetings!`,
              })}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              color="secondary"
              variant="contained"
              onClick={transferToPromotions}
            >
              Check it out!
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
