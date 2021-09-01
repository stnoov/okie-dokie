import { combineReducers } from "redux";
import auth from "./auth";
import lesson from "./lesson";
import news from "./news";
import review from "./review";
import user_classes from "./user_classes";
import sidebar from "./sidebar";

export default combineReducers({
  auth,
  lesson,
  news,
  review,
  user_classes,
  sidebar,
});
