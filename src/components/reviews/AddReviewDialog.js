import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@material-ui/core";
import { Formik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
export default function AddReviewDialog({ open, handleClose, fetchReviews }) {
  return (
    <Formik
      initialValues={{
        message: "",
      }}
      onSubmit={(values, { resetForm }) => {
        axios
          .post(
            "http://localhost:8080/api/reviews/add_review",
            {
              message: values.message,
            },
            {
              headers: {
                "x-access-token": localStorage.getItem("user"),
              },
            }
          )
          .then((res) => {
            toast.success("Review has been added", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            handleClose();
            resetForm();
            fetchReviews();
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
                Add review
              </Typography>
            </DialogTitle>
            <DialogContent>
              <TextField
                multiline
                variant="outlined"
                margin="normal"
                required
                rows={4}
                fullWidth
                name="message"
                label="Message"
                type="message"
                id="message"
                onChange={handleChange}
                value={values.message}
                onBlur={handleBlur}
                touched={touched}
              />
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
