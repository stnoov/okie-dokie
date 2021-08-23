import { SET_USER_CLASSES } from "../actions/types";

const initialState = {};

export default function lessonssReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_USER_CLASSES:
      return {
        ...state,
        items: payload,
      };

    default:
      return state;
  }
}
