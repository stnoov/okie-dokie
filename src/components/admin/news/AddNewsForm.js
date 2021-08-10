import React from "react";
import { makeStyles, Grid, TextField, Button } from "@material-ui/core";
import { Formik } from "formik";
import { theme } from "../../../utils/themeConfig";
import { toast } from "react-toastify";
import axios from "axios";

const useStyles = makeStyles({
  styledContainer: {
    marginTop: theme.spacing(2),
  },
});

export default function AddNewsForm() {
  const classes = useStyles();

  return (
    <>
      <Formik
        initialValues={{
          title: "",
          content: "",
        }}
        onSubmit={(values, { resetForm }) =>
          axios
            .post(
              "http://localhost:8080/api/news/add_news",
              {
                title: values.title,
                content: values.content,
              },
              {
                headers: {
                  "x-access-token": localStorage.getItem("user"),
                },
              }
            )
            .then((res) => {
              toast.success("News has been added", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
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
          <Grid container className={classes.styledContainer}>
            <Grid item xs={12}>
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
                onChange={handleChange}
                value={values.content}
                onBlur={handleBlur}
                touched={touched}
              />
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
