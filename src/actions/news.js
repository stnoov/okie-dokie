import { SET_NEWS } from "./types";
import axios from "axios";
import authHeader from "../services/auth.header";
import { toast } from "react-toastify";

const API_URL = "https://okiedokie-backend.herokuapp.com/";

export const fetchNews = () => (dispatch) => {
  axios
    .get(API_URL + "api/news/get_news")
    .then(({ data }) => {
      dispatch(setNews(data.news));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addNews = (title, content) => (dispatch) => {
  axios
    .post(
      API_URL + "api/news/add_news",
      {
        title: title,
        content: content,
      },
      { headers: authHeader() }
    )
    .then(({ data }) => {
      dispatch(setNews(data.news));
      toast.success("News has been added", {
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

export const editNews = (id, title, content) => (dispatch) => {
  axios
    .post(
      API_URL + "api/news/edit_news",
      {
        id: id,
        title: title,
        content: content,
      },
      { headers: authHeader() }
    )
    .then(({ data }) => {
      dispatch(setNews(data.news));
      toast.success("News were updated", {
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

export const deleteNews = (idToDelete) => (dispatch) => {
  axios
    .post(
      API_URL + "api/news/delete_news",
      {
        id: idToDelete,
      },
      { headers: authHeader() }
    )
    .then(({ data }) => {
      dispatch(setNews(data.news));
      toast.success("Deleted!", {
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

export const setNews = (items) => ({
  type: SET_NEWS,
  payload: items,
});
