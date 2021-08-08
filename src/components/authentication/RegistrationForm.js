import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import { Typography } from "@material-ui/core";
import { getRegistrationFormSchema } from "../../utils/validationSchemas/registrationValidationSchema";
import { useIntl } from "react-intl";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
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

export default function RegistrationForm() {
  const classes = useStyles();
  const intl = useIntl();
  const history = useHistory();
  const RegistrationFormSchema = getRegistrationFormSchema(intl);
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          name: "",
          age: "",
          password: "",
          confirm_password: "",
        }}
        validationSchema={RegistrationFormSchema}
        onSubmit={(values) => {
          axios
            .post("http://localhost:8080/api/auth/signup", {
              name: values.name,
              email: values.email,
              password: values.password,
              age: values.age,
            })
            .then((res) => {
              toast.success("You have been successfully registered!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              history.push("/login");
            })
            .catch((err) => {
              toast.error("Email is already in use!", {
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
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          submitForm,
        }) => (
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email address"
              name="email"
              autoFocus
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
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              onChange={handleChange}
              touched={touched}
              onBlur={handleBlur}
              errors={errors && errors.name}
              value={values.name}
            />
            {errors.name && touched.name ? (
              <div className={classes.errorMessage}>
                <Grid container justifyContent="center" spacing={1}>
                  <Grid item>
                    <ErrorOutlineOutlinedIcon fontSize="small" />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">{errors.name}</Typography>
                  </Grid>
                </Grid>
              </div>
            ) : null}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="age"
              label="Age"
              name="age"
              autoComplete="age"
              onChange={handleChange}
              touched={touched}
              onBlur={handleBlur}
              errors={errors && errors.age}
              value={values.age}
            />
            {errors.age && touched.age ? (
              <div className={classes.errorMessage}>
                <Grid container justifyContent="center" spacing={1}>
                  <Grid item>
                    <ErrorOutlineOutlinedIcon fontSize="small" />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">{errors.age}</Typography>
                  </Grid>
                </Grid>
              </div>
            ) : null}

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handleChange}
              touched={touched}
              value={values.password}
              errors={errors && errors.password}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <div className={classes.errorMessage}>
                <Grid container justifyContent="center" spacing={1}>
                  <Grid item>
                    <ErrorOutlineOutlinedIcon fontSize="small" />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">{errors.password}</Typography>
                  </Grid>
                </Grid>
              </div>
            ) : null}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirm_password"
              label="Confirm password"
              type="password"
              id="confirm_password"
              onChange={handleChange}
              touched={touched}
              errors={errors && errors.confirm_password}
              value={values.confirm_password}
              onBlur={handleBlur}
            />
            {errors.confirm_password && touched.confirm_password ? (
              <div className={classes.errorMessage}>
                <Grid container justifyContent="center" spacing={1}>
                  <Grid item>
                    <ErrorOutlineOutlinedIcon fontSize="small" />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      {errors.confirm_password}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            ) : null}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={submitForm}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
}
