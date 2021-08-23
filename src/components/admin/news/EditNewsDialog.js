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
import { editNews } from "../../../actions/news";
import { useDispatch } from "react-redux";

export default function EditNewsDialog({ open, handleClose, news }) {
  const dispatch = useDispatch();
  const getInitialValues = () => {
    return {
      title: news?.title,
      content: news?.content,
    };
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={getInitialValues()}
      onSubmit={async (values) => {
        await dispatch(editNews(news?.id, values.title, values.content));
        handleClose();
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, submitForm }) => (
        <div>
          <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
            <DialogTitle id="alert-dialog-title">
              <Typography variant="h4" style={{ letterSpacing: 0.75 }}>
                Edit news
              </Typography>
            </DialogTitle>
            <DialogContent>
              <Grid container>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="title"
                    label="Title"
                    type="text"
                    id="title"
                    onChange={handleChange}
                    value={values.title}
                    onBlur={handleBlur}
                    touched={touched}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    multiline
                    variant="outlined"
                    margin="normal"
                    rows={4}
                    fullWidth
                    name="content"
                    label="Content"
                    type="text"
                    id="content"
                    onChange={handleChange}
                    value={values.content}
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
