import { SET_LESSONS } from "./types";
import axios from "axios";

export const fetchLessons = (sortBy, category) => (dispatch) => {
  axios
    .get("http://localhost:8080/api/lessons/get_lessons")
    .then(({ data }) => {
      dispatch(setLessons(data.lessons));
    });
};

export const setLessons = (items) => ({
  type: SET_LESSONS,
  payload: items,
});
