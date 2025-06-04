import React from "react";
import { Grid, makeStyles, withWidth } from "@material-ui/core";
import PaymentForm from "../../components/payments/PaymentForm";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    padding: theme.spacing(3),
  },
  chooseGroupGrid: {
    margin: theme.spacing(1, 0),
  },
  paymentText: {
    padding: theme.spacing(1, 0, 2, 0),
    fontSize: 20,
    paddingLeft: 3,
  },
}));

function Payments({ width }) {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.rootContainer}>
        <Grid item xs={12}>
          <PaymentForm />
        </Grid>

      </Grid>
    </>
  );
}
export default withWidth()(Payments);
