import axios from "axios";

const API_URL = "http://localhost:8080/";

const fetchLessons = () => {
  return axios
    .get(API_URL + "api/lessons/get_lessons")
    .then((data) => {
      return data.data.lessons;
    })
    .catch((err) => {
      console.log(err);
    });
};

const lessonFunctions = {
  fetchLessons,
};

export default lessonFunctions;
