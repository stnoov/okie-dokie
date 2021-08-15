import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@material-ui/core";
import { Formik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";

export default function LessonDialog({
  open,
  handleClose,
  lesson,
  fetchLessons,
}) {
  const handleSignUp = (id) => {
    axios
      .post(
        "http://localhost:8080/api/lessons/sign_up_for_a_lesson",
        {
          lesson_id: id,
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
        handleClose();
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
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle id="alert-dialog-title">
          <Typography variant="h4" style={{ letterSpacing: 0 }}>
            {lesson?.title}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>{lesson?.description}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={3}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="h5">Price</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h4">{lesson?.price}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="h5">Date</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h4">{lesson?.date}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="h5">Time</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h4">{lesson?.time}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="h5">
                        Number of participants
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h4">
                        {lesson?.num_students}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={() => handleSignUp(lesson?.id)}
              >
                Sign up
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
