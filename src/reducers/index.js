import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import lesson from "./lesson";
import news from "./news";
import review from "./review";
import user_classes from "./user_classes";

export default combineReducers({
  auth,
  message,
  lesson,
  news,
  review,
  user_classes,
});
