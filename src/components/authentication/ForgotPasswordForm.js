import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  TextField,
  Button,
  Link,
} from "@material-ui/core";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { useIntl } from "react-intl";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import axios from "axios";
import { getForgotPasswordSchema } from "../../utils/validationSchemas/forgotPasswordSchema";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  errorMessage: {
    color: theme.palette.error.main,
    border: `1px solid ${theme.palette.error.light}`,
    backgroundColor: theme.palette.common.white,
    borderRadius: 4,
    padding: theme.spacing(1),
  },
}));

export default function ForgotPasswordForm() {
  const classes = useStyles();
  const intl = useIntl();
  const ForgotPasswordSchema = getForgotPasswordSchema(intl);
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={ForgotPasswordSchema}
      onSubmit={(values) => {
        axios
          .post(
            "https://okiedokie-backend.herokuapp.com/api/user/reset_password",
            {
              email: values.email,
            }
          )
          .then(() => {
            toast.success("Link was sent to your email", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          })
          .catch((err) => {
            toast.error("Something went wrong!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          });
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, submitForm }) => (
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
            touched={touched}
          />
          {errors.email && touched.email ? (
            <div className={classes.errorMessage}>
              <Grid container justifyContent="center" spacing={1}>
                <Grid item>
                  <ErrorOutlineOutlinedIcon fontSize="small" />
                </Grid>
                <Grid item>
                  <Typography variant="body2">{errors.email}</Typography>
                </Grid>
              </Grid>
            </div>
          ) : null}

          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={submitForm}
          >
            Send reset link
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Back to login"}
              </Link>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}
