import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  List,
  ListItem,
  withWidth,
  isWidthDown,
  capitalize,
} from "@material-ui/core";
import { useIntl } from "react-intl";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import LessonDialog from "../../components/lessons/LessonDialog";
import { fetchLessons } from "../../actions/lesson";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    padding: theme.spacing(3),
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
  registeredItem: {
    border: "none",
    borderRadius: 4,
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.common.white,
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
    paddingLeft: 2,
  },
  nothingToShowText: {
    color: theme.palette.primary.dark,
  },
}));

function Lessons({ width }) {
  const classes = useStyles();
  const intl = useIntl();
  const dispatch = useDispatch();

  const [groups, setGroups] = React.useState(
    JSON.parse(localStorage.getItem("lesson_groups"))
  );
  React.useEffect(() => {
    dispatch(fetchLessons(groups));
  }, [groups, dispatch]);
  const { lesson: lessonItems } = useSelector((state) => state);
  const { user: currentUser } = useSelector((state) => state.auth);
  const [selectedLesson, setSelectedLesson] = React.useState();
  const [isLessonDialogOpen, setIsLessonDialogOpen] = React.useState(false);
  const handleChangeGroups = (event, newFormats) => {
    localStorage.setItem("lesson_groups", JSON.stringify(newFormats));
    setGroups(newFormats);
  };
  const handleOpenLessonDialog = (lesson) => {
    setSelectedLesson(lesson);
    setIsLessonDialogOpen(true);
  };
  const handleCloseLessonDialog = () => {
    setSelectedLesson();
    setIsLessonDialogOpen(false);
  };

  return (
    <>
      <Grid container className={classes.rootContainer}>
        <Grid item xs={12}>
          <Typography variant="h3" color="secondary">
            {intl.formatMessage({
              id: "routes.meetings",
              defaultMessage: "Meetings",
            })}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.chooseGroupGrid}>
          <ToggleButtonGroup value={groups} onChange={handleChangeGroups}>
            <ToggleButton
              value="elementary"
              className={classes.styledToggleButton}
            >
              {intl.formatMessage({
                id: "fields.elementary",
                defaultMessage: "Elementary",
              })}
            </ToggleButton>
            <ToggleButton
              className={classes.styledToggleButton}
              value="pre_intermediate"
            >
              {intl.formatMessage({
                id: "fields.pre_intermediate",
                defaultMessage: "Pre-intermediate",
              })}
            </ToggleButton>
            <ToggleButton
              className={classes.styledToggleButton}
              value="intermediate"
            >
              {intl.formatMessage({
                id: "fields.intermediate",
                defaultMessage: "Intermediate",
              })}
            </ToggleButton>
            <ToggleButton className={classes.styledToggleButton} value="adults">
              {intl.formatMessage({
                id: "fields.adults",
                defaultMessage: "Adults",
              })}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        {lessonItems.items?.length > 0 ? (
          <Grid item xs={12}>
            <List>
              {lessonItems.items?.map((lesson, index) => {
                let lessonDate = new Date(
                  lesson.date + "T" + lesson.time + ":00"
                );
                lessonDate.setHours(lessonDate.getHours() + 1);
                let alreadyRegistered = lesson.user.find(
                  (el) => el.id === currentUser.id
                );
                console.log("alreadyRegistered: ", alreadyRegistered);
                if (Date.now() < lessonDate) {
                  return (
                    <ListItem
                      key={index}
                      className={
                        !alreadyRegistered
                          ? classes.styledListItem
                          : classes.registeredItem
                      }
                      onClick={() => handleOpenLessonDialog(lesson)}
                    >
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
                          <Grid container justify="center" direction="column">
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
                                {lesson.date}
                              </Typography>
                            </Grid>
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
              <Typography variant="h3" className={classes.nothingToShowText}>
                {intl.formatMessage({
                  id: "text.nothing_to_show",
                  defaultMessage: "Nothing to show ",
                })}
                :(
              </Typography>
            </Grid>
          </Grid>
        )}
      </Grid>
      <LessonDialog
        open={isLessonDialogOpen}
        handleClose={handleCloseLessonDialog}
        lesson={selectedLesson}
      />
    </>
  );
}
export default withWidth()(Lessons);
