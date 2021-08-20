import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { getLoginFormSchema } from "../../utils/validationSchemas/loginValidationSchema";
import { useIntl } from "react-intl";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import { useDispatch } from "react-redux";
import { login } from "../../actions/auth";

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

export default function LoginForm({ setUser }) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const intl = useIntl();
  const LoginFormSchema = getLoginFormSchema(intl);
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginFormSchema}
      onSubmit={(values) => {
        dispatch(login(values.email, values.password))
          .then((res) => {
            history.push("/dashboard");
          })
          .catch((err) => {
            console.log(err);
            toast.error("Wrong email or password", {
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
            value={values.password}
            onBlur={handleBlur}
            touched={touched}
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={submitForm}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}
