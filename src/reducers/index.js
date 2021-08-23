import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import lesson from "./lesson";
import news from "./news";

export default combineReducers({
  auth,
  message,
  lesson,
  news,
});
