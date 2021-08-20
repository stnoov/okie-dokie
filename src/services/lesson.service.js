import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const fetchLessons = () => {
  return axios
    .get(API_URL + "lessons/get_lessons")
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
