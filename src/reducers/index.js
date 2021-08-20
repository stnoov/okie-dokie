import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import lesson from "./lesson";

export default combineReducers({
  auth,
  message,
  lesson,
});
