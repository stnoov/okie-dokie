import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import { theme } from "../../../utils/themeConfig";
import AddLesson from "./AddLesson";
import LessonsTable from "./LessonsTable";
import axios from "axios";

const useStyles = makeStyles({
  styledContainer: {
    marginTop: theme.spacing(2),
  },
});

export default function ManageLessons() {
  const classes = useStyles();
  const [lessons, setLessons] = React.useState();

  const fetchLessons = () => {
    axios
      .get("http://localhost:8080/api/lessons/get_lessons")
      .then((data) => {
        setLessons(data.data.lessons);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Grid container className={classes.styledContainer} spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <AddLesson fetchLessons={fetchLessons} />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <LessonsTable lessons={lessons} fetchLessons={fetchLessons} />
        </Grid>
      </Grid>
    </>
  );
}
