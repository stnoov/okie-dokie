import { HIDE_SIDEBAR, SHOW_SIDEBAR } from "../actions/types";

const initialState = { visible: true };

export default function lessonssReducer(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case HIDE_SIDEBAR:
      return {
        ...state,
        visible: false,
      };
    case SHOW_SIDEBAR:
      return {
        ...state,
        visible: true,
      };

    default:
      return state;
  }
}
