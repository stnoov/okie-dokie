import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { Formik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
export default function EditStudentDialog({
  open,
  handleClose,
  fetchStudents,
  userToEdit,
}) {
  const getInitialValues = () => {
    return {
      okie_dokie_points: userToEdit?.okie_dokie_points,
      balance: userToEdit?.balance,
    };
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={getInitialValues()}
      onSubmit={(values, { resetForm }) => {
        axios
          .post(
            "http://localhost:8080/api/users/edit_user",
            {
              email: userToEdit.email,
              okie_dokie_points: values.okie_dokie_points,
              balance: values.balance,
            },
            {
              headers: {
                "x-access-token": localStorage.getItem("user"),
              },
            }
          )
          .then((res) => {
            toast.success("User has been edited", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            fetchStudents();
            handleClose();
            resetForm();
          })
          .catch((err) => {
            toast.error("Something went wrong, please try again later", {
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
        <div>
          <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
            <DialogTitle id="alert-dialog-title">
              <Typography variant="h4" style={{ letterSpacing: 0.75 }}>
                Edit student: {userToEdit?.email}
              </Typography>
            </DialogTitle>
            <DialogContent>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="okie_dokie_points"
                    label="OkieDokie Points"
                    type="text"
                    id="okie_dokie_points"
                    onChange={handleChange}
                    value={values.okie_dokie_points}
                    onBlur={handleBlur}
                    touched={touched}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="balance"
                    label="Balance"
                    type="text"
                    id="balance"
                    onChange={handleChange}
                    value={values.balance}
                    onBlur={handleBlur}
                    touched={touched}
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={submitForm} color="primary" autoFocus>
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </Formik>
  );
}
