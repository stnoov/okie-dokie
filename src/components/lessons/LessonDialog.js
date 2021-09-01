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
import SuccessfulSignup from "./SuccessfulSignup";
import { useIntl } from "react-intl";

export default function LessonDialog({ open, handleClose, lesson }) {
  const intl = useIntl();
  const [isOpenSuccessDialog, setIsOpenSuccessDialog] = React.useState(false);
  const handleCloseSuccessDialog = () => {
    setIsOpenSuccessDialog(false);
  };
  const dispatch = useDispatch();
  const handleSignUp = () => {
    dispatch(signUpForALesson(lesson?.id, setIsOpenSuccessDialog));
    handleClose();
  };
  return (
    <>
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
                  <Grid item xs={6} sm={3}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant="h5">
                          {intl.formatMessage({
                            id: "fields.price",
                            defaultMessage: "Price",
                          })}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h4">{lesson?.price}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant="h5">
                          {intl.formatMessage({
                            id: "fields.date",
                            defaultMessage: "Date",
                          })}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h4">
                          {new Date(lesson?.date).toLocaleDateString(
                            localStorage.getItem("locale"),
                            {
                              day: "numeric",
                              month: "short",
                            }
                          )}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant="h5">
                          {intl.formatMessage({
                            id: "fields.time",
                            defaultMessage: "Time",
                          })}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h4">{lesson?.time}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant="h5">
                          {intl.formatMessage({
                            id: "fields.places_left",
                            defaultMessage: "Places left",
                          })}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h4">
                          {lesson?.num_students > 0
                            ? lesson?.num_students
                            : intl.formatMessage({
                                id: "fields.filled",
                                defaultMessage: "Filled",
                              })}
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
                  {intl.formatMessage({
                    id: "actions.sign_up",
                    defaultMessage: "Sign up",
                  })}
                </Button>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </div>
      <SuccessfulSignup
        open={isOpenSuccessDialog}
        handleClose={handleCloseSuccessDialog}
      />
    </>
  );
}
