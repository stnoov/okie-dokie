import React from "react";
import {
  makeStyles,
  Grid,
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import { Formik } from "formik";
import { theme } from "../../../utils/themeConfig";
import { addLesson } from "../../../actions/lesson";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  styledContainer: {
    marginTop: theme.spacing(0),
  },
});

export default function AddLesson({ fetchLessons }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          title: "",
          description: "",
          date: "",
          time: "",
          num_students: "",
          price: "",
          teacher: "Antonina Sitnova",
          group: "elementary",
          link: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          await dispatch(
            addLesson(
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
          resetForm();
        }}
      >
        {({ values, touched, handleChange, handleBlur, submitForm }) => (
          <Grid container className={classes.styledContainer} spacing={1}>
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
            <Grid item xs={6}>
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
            <Grid item xs={12}>
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
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={submitForm}>
                Submit
              </Button>
            </Grid>
          </Grid>
        )}
      </Formik>
    </>
  );
}
