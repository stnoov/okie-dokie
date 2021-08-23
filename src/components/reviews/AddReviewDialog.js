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
import { addReview } from "../../actions/review";
import { useDispatch } from "react-redux";

export default function AddReviewDialog({ open, handleClose }) {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        message: "",
      }}
      onSubmit={async (values, { resetForm }) => {
        await dispatch(addReview(values.message));
        resetForm();
        handleClose();
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
