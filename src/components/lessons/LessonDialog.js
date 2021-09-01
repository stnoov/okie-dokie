import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@material-ui/core";
import { signUpForALesson } from "../../actions/lesson";
import { useDispatch } from "react-redux";

export default function LessonDialog({ open, handleClose, lesson }) {
  const dispatch = useDispatch();
  const handleSignUp = () => {
    dispatch(signUpForALesson(lesson?.id));
    handleClose();
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
                      <Typography variant="h5">Places left</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h4">
                        {lesson?.num_students > 0
                          ? lesson?.num_students
                          : "Filled"}
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
                disabled={lesson?.num_students === "0"}
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
