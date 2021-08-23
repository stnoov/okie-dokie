import React from "react";
import { makeStyles, Grid, TextField, Button } from "@material-ui/core";
import { Formik } from "formik";
import { theme } from "../../../utils/themeConfig";
import { addNews } from "../../../actions/news";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  styledContainer: {
    marginTop: theme.spacing(2),
  },
});

export default function AddNewsForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          title: "",
          content: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          await dispatch(addNews(values.title, values.content));
          resetForm();
        }}
      >
        {({ values, touched, handleChange, handleBlur, submitForm }) => (
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
