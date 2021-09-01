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
    padding: theme.spacing(1, 0, 2, 0),
    fontSize: 20,
    paddingLeft: 3,
  },
}));

function Payments({ width }) {
  const classes = useStyles();
  const intl = useIntl();
  return (
    <>
      <Grid container className={classes.rootContainer}>
        <Grid item xs={12}>
          <Typography variant="h3" color="secondary">
            {intl.formatMessage({
              id: "routes.payments",
              defaultMessage: "Payments",
            })}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="body2"
                color="primary"
                className={classes.paymentText}
              >
                Оплачивая занятия в OkieDokie! club, вы приобретаете отличную
                возможность попрактиковаться в разговорном английском, а также
                помогаете нашей команде!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <PaymentForm />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" color="textSecondary">
            Платежи осуществляются через сторонний сервис электронных платежей
            ЮMoney.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
export default withWidth()(Payments);
