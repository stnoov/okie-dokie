import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";
const register = (email, name, age, password) => {
  return axios
    .post(API_URL + "signup", {
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
    .post(API_URL + "signin", {
      email: email,
      password: password,
    })
    .then((response) => {
      console.log("response: ", response);
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authFunctions = {
  register,
  login,
  logout,
};

export default authFunctions;
