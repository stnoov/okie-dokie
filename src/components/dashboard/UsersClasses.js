import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  List,
  ListItem,
  withWidth,
  isWidthDown,
  Button,
  capitalize,
} from "@material-ui/core";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";
import { fetchUserClasses } from "../../actions/user_classes";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    padding: theme.spacing(2, 0),
  },
  chooseGroupGrid: {
    margin: theme.spacing(1, 0),
  },
  styledListItem: {
    border: "none",
    borderRadius: 4,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.dark,
    minHeight: 80,
    marginBottom: theme.spacing(1),
    cursor: "pointer",
  },
  styledToggleButton: {
    border: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    "&.Mui-selected": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
      },
    },
  },
  teacherSubtitle: {
    color: "#6A6F9E",
    paddingLeft: 2,
  },
  nothingToShowText: {
    color: theme.palette.primary.dark,
  },
  linkToClasses: {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
}));

function UsersClasses({ width }) {
  const classes = useStyles();
  const intl = useIntl();
  const dispatch = useDispatch();
  const { user_classes: userClasses } = useSelector((state) => state);
  React.useEffect(() => {
    dispatch(fetchUserClasses());
  }, [dispatch]);
  return (
    <>
      <Grid container className={classes.rootContainer}>
        <Grid item xs={12}>
          <Typography variant="h4" color="secondary">
            {intl.formatMessage({
              id: "routes.your_upcoming_lessons",
              defaultMessage: "Ваши следующие занятия",
            })}
          </Typography>
        </Grid>
        {userClasses.items?.length > 0 ? (
          <Grid item xs={12}>
            <List>
              {userClasses.items?.map((lesson, index) => {
                let lessonDate = new Date(
                  lesson.date + "T" + lesson.time + ":00"
                );
                let expiredDate = new Date(lessonDate);
                expiredDate.setHours(lessonDate.getHours() + 1);
                let fifteenMinutesBefore = new Date(lessonDate);
                fifteenMinutesBefore.setMinutes(
                  fifteenMinutesBefore.getMinutes() - 15
                );
                let dateNow = new Date();
                if (dateNow < expiredDate) {
                  return (
                    <ListItem className={classes.styledListItem} key={index}>
                      <Grid
                        container
                        justify="space-between"
                        alignItems="center"
                      >
                        <Grid item>
                          <Grid container justify="flex-start">
                            <Grid item xs={12}>
                              <Typography variant="h5">
                                {lesson.title}
                              </Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <Typography
                                variant="body2"
                                className={classes.teacherSubtitle}
                              >
                                {capitalize(lesson.group).replace("_", "-")}
                              </Typography>
                            </Grid>

                            <Grid item>
                              <Typography
                                variant="body2"
                                className={classes.teacherSubtitle}
                              >
                                {intl.formatMessage({
                                  id: "fields.teacher",
                                  defaultMessage: "Teacher",
                                })}
                                : {lesson.teacher}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Grid container alignItems="center" spacing={1}>
                            {fifteenMinutesBefore < dateNow &&
                            dateNow < expiredDate ? (
                              <Grid item>
                                <Button
                                  variant="outlined"
                                  color="secondary"
                                  onClick={() =>
                                    window.open(lesson.link, "_blank")
                                  }
                                >
                                  Присоедениться
                                </Button>
                              </Grid>
                            ) : (
                              <Grid item>
                                <Grid
                                  container
                                  justify="center"
                                  direction="column"
                                >
                                  <Grid item>
                                    <Grid
                                      container
                                      justify={
                                        isWidthDown("sm", width)
                                          ? "flex-start"
                                          : "flex-end"
                                      }
                                    >
                                      <Typography variant="h4">
                                        {lesson.time}
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                  <Grid item>
                                    <Typography variant="body1">
                                      {capitalize(
                                        new Date(
                                          lesson.date
                                        ).toLocaleDateString("ru", {
                                          month: "long",
                                          day: "numeric",
                                        })
                                      )}
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            )}
                          </Grid>
                        </Grid>
                      </Grid>
                    </ListItem>
                  );
                }
                return null;
              })}
            </List>
          </Grid>
        ) : (
          <Grid item xs={12}>
            <Grid container justify="center">
              <Typography variant="h5" className={classes.nothingToShowText}>
                Вы ещё не записаны на ближайшие занятия.{" "}
                <Link to="/lessons" className={classes.linkToClasses}>
                  Записаться
                </Link>
              </Typography>
            </Grid>
          </Grid>
        )}
      </Grid>
    </>
  );
}
export default withWidth()(UsersClasses);
