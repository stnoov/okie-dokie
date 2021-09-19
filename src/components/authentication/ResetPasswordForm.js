import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import { Typography } from "@material-ui/core";
import { useIntl } from "react-intl";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
import { getResetPasswordSchema } from "../../utils/validationSchemas/resetPasswordSchema";

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

export default function ResetPasswordForm() {
  let { id, token } = useParams();
  const classes = useStyles();
  const intl = useIntl();
  const history = useHistory();
  const ResetPasswordSchema = getResetPasswordSchema(intl);
  return (
    <>
      <Formik
        initialValues={{
          password: "",
          confirm_password: "",
        }}
        validationSchema={ResetPasswordSchema}
        onSubmit={(values) => {
          axios
            .post(
              "https://okiedokie-backend.herokuapp.com/api/user/update_password",
              {
                id: id,
                token: token,
                password: values.password,
              }
            )
            .then(() => {
              toast.success("Password was updated", {
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
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          submitForm,
        }) => (
          <form className={classes.form} noValidate>
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
              type="submit"
              onClick={handleSubmit}
            >
              Reset password
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
}
