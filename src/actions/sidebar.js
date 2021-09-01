import { SHOW_SIDEBAR, HIDE_SIDEBAR } from "./types";

export const showSidebar = () => (dispatch) => {
  dispatch({
    type: SHOW_SIDEBAR,
  });
};

export const hideSidebar = () => (dispatch) => {
  dispatch({
    type: HIDE_SIDEBAR,
  });
};
