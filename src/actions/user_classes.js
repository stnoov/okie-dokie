import { SET_USER_CLASSES } from "./types";
import axios from "axios";
import authHeader from "../services/auth.header";

export const fetchUserClasses = (groups) => (dispatch) => {
  axios
    .get("http://localhost:8080/api/lessons/get_user_classes", {
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
