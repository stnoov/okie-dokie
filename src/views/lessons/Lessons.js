import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  withWidth,
  isWidthDown,
} from "@material-ui/core";
import { useIntl } from "react-intl";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { lessonData } from "../../templateData/lessonData";

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
}));

function Lessons({ width }) {
  const classes = useStyles();
  const intl = useIntl();
  const [groups, setGroups] = React.useState(() => [
    "senior_group",
    "junior_group",
  ]);
  const [lessons, setLessons] = React.useState(lessonData);
  const handleChangeGroups = (event, newFormats) => {
    setGroups(newFormats);
    console.log("groups:", newFormats);
    const newLessons = lessonData.filter((el) => {
      if (newFormats.indexOf(el.group) > -1) {
        console.log(el);
        return el;
      }
    });
    setLessons(newLessons);
  };
  return (
    <>
      <Grid container className={classes.rootContainer}>
        <Grid item xs={12}>
          <Typography variant="h3" color="secondary">
            {intl.formatMessage({
              id: "routes.lessons",
              defaultMessage: "Lessons",
            })}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.chooseGroupGrid}>
          <ToggleButtonGroup value={groups} onChange={handleChangeGroups}>
            <ToggleButton
              value="senior_group"
              className={classes.styledToggleButton}
            >
              {intl.formatMessage({
                id: "fields.senior_group",
                defaultMessage: "Senior group",
              })}
            </ToggleButton>
            <ToggleButton
              className={classes.styledToggleButton}
              value="junior_group"
            >
              {intl.formatMessage({
                id: "fields.junior_group",
                defaultMessage: "Junior group",
              })}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid item xs={12}>
          <List>
            {lessons.map((lesson) => {
              return (
                <ListItem className={classes.styledListItem}>
                  <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                      <Grid container justify="flex-start">
                        <Grid item xs={12}>
                          <Typography variant="h5">{lesson.title}</Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="body2"
                            className={classes.teacherSubtitle}
                          >
                            Учитель: {lesson.teacher}
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
                            <Typography variant="h4">{lesson.time}</Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Typography variant="body1">{lesson.date}</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </>
  );
}
export default withWidth()(Lessons);
