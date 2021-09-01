import axios from "axios";
import authHeader from "./auth.header";

const API_URL = "https://okiedokie-backend.herokuapp.com/";

const register = (email, name, age, password) => {
  return axios
    .post(API_URL + "api/auth/signup", {
      email: email,
      name: name,
      age: age,
      password: password,
    })
    .then((res) => {
      return res;
    });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "api/auth/signin", {
      email: email,
      password: password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const fetchUser = () => {
  return axios
    .get(API_URL + "api/user/fetch_user", {
      headers: authHeader(),
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const authFunctions = {
  register,
  login,
  fetchUser,
  logout,
};

export default authFunctions;
