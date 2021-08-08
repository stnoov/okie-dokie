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
  LinearProgress,
} from "@material-ui/core";
import { useIntl } from "react-intl";
import { Add } from "@material-ui/icons";
import AddReviewDialog from "../../components/reviews/AddReviewDialog";
import axios from "axios";

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
  },
  styledToggleButton: {
    border: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    "&.Mui-selected": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
      margin: theme.spacing(0, 0.3),
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
      },
    },
  },
  senderTitle: {
    color: "#6A6F9E",
  },
  reviewText: {
    fontSize: 22,
  },
  nothingToShowText: {
    color: theme.palette.primary.dark,
  },
}));

function Reviews({ width }) {
  const classes = useStyles();
  const intl = useIntl();

  const [reviews, setReviews] = React.useState();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const fetchReviews = async () => {
    await axios
      .get("http://localhost:8080/api/reviews/get_reviews")
      .then((data) => {
        setReviews(data.data.reviews);
        setLoading(false);
      })
      .catch((err) => {
        setReviews([]);
        setLoading(false);
      });
  };
  React.useEffect(() => {
    console.log("updated");
    fetchReviews();
  }, []);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container className={classes.rootContainer}>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h3" color="secondary">
                {intl.formatMessage({
                  id: "routes.reviews",
                  defaultMessage: "Reviews",
                })}
              </Typography>
            </Grid>
            <Grid item>
              <Button
                color="secondary"
                fullWidth
                variant="outlined"
                onClick={handleClickOpen}
                startIcon={<Add />}
              >
                {intl.formatMessage({
                  id: "actions.add_review",
                  defaultMessage: "Add review",
                })}
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {!loading ? (
          <Grid item xs={12}>
            <List>
              {reviews?.map((review, index) => {
                return (
                  <ListItem className={classes.styledListItem} key={index}>
                    <Grid container justify="space-between" alignItems="center">
                      <Grid item>
                        <Grid container justify="flex-start">
                          <Grid item>
                            <Typography
                              variant="body2"
                              className={classes.senderTitle}
                            >
                              {review.user?.name}
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography
                              variant="h5"
                              className={classes.reviewText}
                            >
                              {review.message}
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
                                {review.time}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <Typography variant="body1">
                              {review.date}
                            </Typography>
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
            <LinearProgress color="secondary" />
          </Grid>
        )}
        {!loading && reviews.length < 1 && (
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
      <AddReviewDialog
        open={open}
        handleClose={handleClose}
        fetchReviews={fetchReviews}
      />
    </>
  );
}
export default withWidth()(Reviews);
