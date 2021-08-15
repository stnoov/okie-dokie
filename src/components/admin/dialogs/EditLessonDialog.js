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

export default function EditLesson({
  open,
  handleClose,
  lesson,
  fetchLessons,
}) {
  const getInitialValues = () => {
    return {
      title: lesson?.title,
      description: lesson?.description,
      date: lesson?.date,
      time: lesson?.time,
      num_students: lesson?.num_students,
      link: lesson?.link,
      price: lesson?.price,
    };
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={getInitialValues()}
      onSubmit={(values, { resetForm }) => {
        axios
          .post(
            "http://localhost:8080/api/lessons/edit_lesson",
            {
              id: lesson.id,
              title: values.title,
              content: values.content,
              description: values.description,
              date: values.date,
              time: values.time,
              num_students: values.num_students,
              link: values.link,
              price: values.price,
            },
            {
              headers: {
                "x-access-token": localStorage.getItem("user"),
              },
            }
          )
          .then((res) => {
            toast.success("Lesson was updated", {
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
            fetchLessons();
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
                Edit lesson
              </Typography>
            </DialogTitle>
            <DialogContent>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="title"
                    label="Title"
                    type="text"
                    onChange={handleChange}
                    value={values.title}
                    onBlur={handleBlur}
                    touched={touched}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="description"
                    label="Description"
                    type="text"
                    onChange={handleChange}
                    value={values.description}
                    onBlur={handleBlur}
                    touched={touched}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="date"
                    type="date"
                    onChange={handleChange}
                    value={values.date}
                    onBlur={handleBlur}
                    touched={touched}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="time"
                    type="time"
                    onChange={handleChange}
                    value={values.time}
                    onBlur={handleBlur}
                    touched={touched}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="num_students"
                    label="num_students"
                    type="text"
                    onChange={handleChange}
                    value={values.num_students}
                    onBlur={handleBlur}
                    touched={touched}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="link"
                    label="Link"
                    type="text"
                    onChange={handleChange}
                    value={values.link}
                    onBlur={handleBlur}
                    touched={touched}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="price"
                    label="Price"
                    type="text"
                    onChange={handleChange}
                    value={values.price}
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
