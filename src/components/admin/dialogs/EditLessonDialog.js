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
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { editLesson } from "../../../actions/lesson";

export default function EditLesson({ open, handleClose, lesson }) {
  const dispatch = useDispatch();
  const getInitialValues = () => {
    return {
      title: lesson?.title,
      description: lesson?.description,
      date: lesson?.date,
      time: lesson?.time,
      num_students: lesson?.num_students,
      link: lesson?.link,
      price: lesson?.price,
      group: lesson?.group,
      teacher: lesson?.teacher,
    };
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={getInitialValues()}
      onSubmit={async (values, { resetForm }) => {
        await dispatch(
          editLesson(
            lesson.id,
            values.title,
            values.description,
            values.date,
            values.time,
            values.num_students,
            values.link,
            values.price,
            values.teacher,
            values.group
          )
        );
        handleClose();
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
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="teacher"
                    label="Teacher"
                    type="text"
                    onChange={handleChange}
                    value={values.teacher}
                    onBlur={handleBlur}
                    touched={touched}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControl variant="outlined" fullWidth>
                    <Select
                      value={values.group}
                      name="group"
                      onChange={handleChange}
                    >
                      <MenuItem value="elementary">Elementary</MenuItem>
                      <MenuItem value="pre-intermediate">Intermediate</MenuItem>
                      <MenuItem value="intermediate">Pre-intermediate</MenuItem>
                    </Select>
                  </FormControl>
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
