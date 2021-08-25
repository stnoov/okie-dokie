import React from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { logout } from "../actions/auth";

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

const AuthVerify = (props) => {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };

  props.history.listen(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      const decodedJwt = parseJwt(user.accessToken);

      if (decodedJwt.exp * 1000 < Date.now()) {
        logOut();
      }
    }
  });

  return <div></div>;
};

export default withRouter(AuthVerify);
