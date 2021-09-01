import React from "react";
import { Grid, makeStyles, TextField, Button } from "@material-ui/core";
import { Formik } from "formik";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  submit: {
    height: "100%",
  },
  errorMessage: {
    color: theme.palette.error.main,
    border: `1px solid ${theme.palette.error.light}`,
    backgroundColor: theme.palette.common.white,
    borderRadius: 4,
    padding: theme.spacing(1),
  },
}));

export default function PaymentForm() {
  const classes = useStyles();
  const { user: currentUser } = useSelector((state) => state.auth);
  return (
    <Formik
      initialValues={{
        amount: 0,
      }}
      onSubmit={{}}
    >
      {({
        values,
        setFieldValue,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <Grid container spacing={1}>
          <Grid item>
            <TextField
              variant="outlined"
              required
              id="amount"
              label="Amount"
              name="amount"
              onChange={handleChange}
              value={values.amount}
              onBlur={handleBlur}
              touched={touched}
              size="small"
            />
          </Grid>
          <Grid item>
            <iframe
              src={`https://yoomoney.ru/quickpay/button-widget?targets=%D0%9E%D0%BF%D0%BB%D0%B0%D1%82%D0%B0%20%D0%B7%D0%B0%D0%BD%D1%8F%D1%82%D0%B8%D1%8F&default-sum=${values.amount}&button-text=11&any-card-payment-type=on&button-size=m&button-color=orange&&successURL=http%3A%2F%2Flocalhost%3A3000%2Fpayment_success&quickpay=small&account=4100115666126622&label=${currentUser.id}`}
              width="184"
              height="36"
              frameborder="0"
              scrolling="no"
              title="payment"
            ></iframe>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item>
                <Button
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  className={classes.submit}
                  onClick={() => setFieldValue("amount", 300)}
                >
                  300
                </Button>
              </Grid>
              <Grid item>
                <Button
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  className={classes.submit}
                  onClick={() => setFieldValue("amount", 1500)}
                >
                  1500
                </Button>
              </Grid>
              <Grid item>
                <Button
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  className={classes.submit}
                  onClick={() => setFieldValue("amount", 3000)}
                >
                  3000
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Formik>
  );
}
