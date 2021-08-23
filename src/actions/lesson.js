import { SET_LESSONS } from "./types";
import axios from "axios";
import authHeader from "../services/auth.header";
import { toast } from "react-toastify";

export const fetchLessons = (groups) => (dispatch) => {
  axios
    .get("http://localhost:8080/api/lessons/get_lessons")
    .then(({ data }) => {
      if (groups) {
        const sortedLessons = [];
        data.lessons.map((el) => {
          if (groups.indexOf(el.group) !== -1) {
            sortedLessons.push(el);
          }
          return 0;
        });
        dispatch(setLessons(sortedLessons));
      } else {
        dispatch(setLessons(data.lessons));
      }
    });
};

export const addLesson =
  (title, description, date, time, num_students, link, price, teacher, group) =>
  (dispatch) => {
    axios
      .post(
        "http://localhost:8080/api/lessons/add_lesson",
        {
          title: title,
          description: description,
          date: date,
          time: time,
          num_students: num_students,
          teacher: teacher,
          price: price,
          link: link,
          group: group,
        },
        { headers: authHeader() }
      )
      .then(({ data }) => {
        dispatch(setLessons(data.lessons));
        toast.success("Lesson has been added", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
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

export const editLesson =
  (
    id,
    title,
    description,
    date,
    time,
    num_students,
    link,
    price,
    teacher,
    group
  ) =>
  (dispatch) => {
    axios
      .post(
        "http://localhost:8080/api/lessons/edit_lesson",
        {
          id: id,
          title: title,
          description: description,
          date: date,
          time: time,
          num_students: num_students,
          link: link,
          price: price,
          teacher: teacher,
          group: group,
        },
        { headers: authHeader() }
      )
      .then(({ data }) => {
        dispatch(setLessons(data.lessons));
        toast.success("Lesson was updated", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        fetchLessons();
      })
      .catch((err) => {
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

export const deleteLesson = (idToDelete) => (dispatch) => {
  axios
    .post(
      "http://localhost:8080/api/lessons/delete_lesson",
      {
        id: idToDelete,
      },
      { headers: authHeader() }
    )
    .then(({ data }) => {
      dispatch(setLessons(data.lessons));
      toast.success("Lesson was deleted", {
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

export const setLessons = (items) => ({
  type: SET_LESSONS,
  payload: items,
});
