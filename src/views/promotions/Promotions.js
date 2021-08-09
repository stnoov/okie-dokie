import React from "react";
import { Grid, Typography, makeStyles, withWidth } from "@material-ui/core";
import { useIntl } from "react-intl";
import PaymentForm from "../../components/payments/PaymentForm";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    padding: theme.spacing(3),
  },
  chooseGroupGrid: {
    margin: theme.spacing(1, 0),
  },
  paymentText: {
    fontSize: 20,
    paddingLeft: 3,
  },
}));

function Promotions({ width }) {
  const classes = useStyles();
  const intl = useIntl();
  return (
    <>
      <Grid container className={classes.rootContainer}>
        <Grid item xs={12}>
          <Typography variant="h3" color="secondary">
            {intl.formatMessage({
              id: "routes.promotions",
              defaultMessage: "Promotions",
            })}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            color="primary"
            className={classes.paymentText}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <PaymentForm />
        </Grid>
      </Grid>
    </>
  );
}
export default withWidth()(Promotions);
