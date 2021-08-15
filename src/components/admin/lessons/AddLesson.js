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
import { toast } from "react-toastify";
import axios from "axios";

const useStyles = makeStyles({
  styledContainer: {
    marginTop: theme.spacing(0),
  },
});

export default function AddLesson({ fetchLessons }) {
  const classes = useStyles();
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
          group: "junior_group",
          link: "",
        }}
        onSubmit={(values, { resetForm }) =>
          axios
            .post(
              "http://localhost:8080/api/lessons/add_lesson",
              {
                title: values.title,
                description: values.description,
                date: values.date,
                time: values.time,
                num_students: values.num_students,
                teacher: values.teacher,
                price: values.price,
                link: values.link,
              },
              {
                headers: {
                  "x-access-token": localStorage.getItem("user"),
                },
              }
            )
            .then((res) => {
              toast.success("Lesson has been added", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
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
            })
        }
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          submitForm,
        }) => (
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
                <Select value={values.group} onChange={handleChange}>
                  <MenuItem value="junior_group">Junior Group</MenuItem>
                  <MenuItem value="senior_group">Senior Group</MenuItem>
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
