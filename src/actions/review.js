import { SET_REVIEWS } from "./types";
import axios from "axios";
import authHeader from "../services/auth.header";
import { toast } from "react-toastify";

export const fetchReviews = () => (dispatch) => {
  axios
    .get("http://localhost:8080/api/reviews/get_reviews")
    .then(({ data }) => {
      dispatch(setReviews(data.reviews));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addReview = (message) => (dispatch) => {
  axios
    .post(
      "http://localhost:8080/api/reviews/add_review",
      {
        message: message,
      },
      { headers: authHeader() }
    )
    .then(({ data }) => {
      dispatch(setReviews(data.reviews));
      toast.success("Review has been added", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
    .catch(() => {
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

// export const deleteNews = (idToDelete) => (dispatch) => {
//   axios
//     .post(
//       "http://localhost:8080/api/news/delete_news",
//       {
//         id: idToDelete,
//       },
//       { headers: authHeader() }
//     )
//     .then(({ data }) => {
//       dispatch(setNews(data.news));
//       toast.success("Deleted!", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//     });
// };

export const setReviews = (items) => ({
  type: SET_REVIEWS,
  payload: items,
});
