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
} from "@material-ui/core";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";
import { fetchUserClasses } from "../../actions/user_classes";
import { useDispatch } from "react-redux";

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
              defaultMessage: "Ваши следующие уроки",
            })}
          </Typography>
        </Grid>
        {userClasses.items?.length > 0 ? (
          <Grid item xs={12}>
            <List>
              {userClasses.items?.map((lesson, index) => {
                return (
                  <ListItem className={classes.styledListItem} key={index}>
                    <Grid container justify="space-between" alignItems="center">
                      <Grid item>
                        <Grid container justify="flex-start">
                          <Grid item xs={12}>
                            <Typography variant="h5">{lesson.title}</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography
                              variant="body2"
                              className={classes.teacherSubtitle}
                            >
                              {lesson.group === "junior_group"
                                ? intl.formatMessage({
                                    id: "fields.junior_group",
                                    defaultMessage: "Junior group",
                                  })
                                : intl.formatMessage({
                                    id: "fields.senior_group",
                                    defaultMessage: "Senior group",
                                  })}
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
                          <Grid item>
                            <Button variant="outlined" color="secondary">
                              Присоедениться
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </ListItem>
                );
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
    </>
  );
}
export default withWidth()(UsersClasses);
