import { SET_USER_CLASSES } from "./types";
import axios from "axios";
import authHeader from "../services/auth.header";

const API_URL = "https://okiedokie-backend.herokuapp.com/";

export const fetchUserClasses = () => (dispatch) => {
  axios
    .get(API_URL + "api/lessons/get_user_classes", {
      headers: authHeader(),
    })
    .then(({ data }) => {
      dispatch(setUserClasses(data.user_lessons));
    });
};

export const setUserClasses = (items) => ({
  type: SET_USER_CLASSES,
  payload: items,
});
