import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  FETCH_USER,
} from "./types";
import axios from "axios";
import authHeader from "../services/auth.header";
import AuthService from "../services/auth.service";

const API_URL = "https://okiedokie-backend.herokuapp.com/";

export const register = (email, name, age, password) => (dispatch) => {
  return AuthService.register(email, name, age, password).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: REGISTER_FAIL,
      });

      return Promise.reject();
    }
  );
};

export const login = (email, password) => (dispatch) => {
  return AuthService.login(email, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      console.log(error);

      dispatch({
        type: LOGIN_FAIL,
      });

      return Promise.reject();
    }
  );
};

export const fetchUser = () => (dispatch) => {
  axios
    .get(API_URL + "api/user/fetch_user", {
      headers: authHeader(),
    })
    .then((response) => {
      dispatch({
        type: FETCH_USER,
        payload: { user: response.data },
      });
    });
};
export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};
