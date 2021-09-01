import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  FETCH_USER,
} from "./types";
import AuthService from "../services/auth.service";

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
  return AuthService.fetchUser().then(
    (data) => {
      dispatch({
        type: FETCH_USER,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      console.log(error);

      return Promise.reject();
    }
  );
};
export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};
