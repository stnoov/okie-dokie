import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import { Delete } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import authHeader from "../../services/auth.header";
const useStyles = makeStyles({
  table: {
    borderRadius: 0,
  },
});

export default function ManageReviews() {
  const classes = useStyles();
  const [reviews, setReviews] = React.useState();
  const fetchReviews = async () => {
    await axios
      .get("https://okiedokie-backend.herokuapp.com/api/reviews/get_reviews")
      .then((data) => {
        setReviews(data.data.reviews);
      })
      .catch((err) => {
        console.log(err);
        setReviews([]);
      });
  };
  React.useEffect(() => {
    fetchReviews();
  }, []);
  const deleteReview = async (id) => {
    await axios
      .post(
        "https://okiedokie-backend.herokuapp.com/api/reviews/delete_review",
        {
          id: id,
        },
        {
          headers: authHeader(),
        }
      )
      .then((response) => {
        fetchReviews();
      });
  };
  return (
    <>
      <TableContainer component={Paper} className={classes.table}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell align="right">Created at</TableCell>
              <TableCell align="right">Message</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reviews?.map((review, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {review.user.name}
                </TableCell>
                <TableCell align="right">{review.createdAt}</TableCell>
                <TableCell align="right">
                  {review.message.length > 140
                    ? review.message.substring(0, 140) + "..."
                    : review.message}
                </TableCell>
                <TableCell align="right">
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <IconButton onClick={() => deleteReview(review.id)}>
                        <Delete />
                      </IconButton>
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
