import { SET_REVIEWS } from "./types";
import axios from "axios";
import authHeader from "../services/auth.header";
import { toast } from "react-toastify";

const API_URL = "https://okiedokie-backend.herokuapp.com/";

export const fetchReviews = () => (dispatch) => {
  axios
    .get(API_URL + "api/reviews/get_reviews")
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
      API_URL + "api/reviews/add_review",
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

export const setReviews = (items) => ({
  type: SET_REVIEWS,
  payload: items,
});
