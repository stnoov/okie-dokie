import { SET_LESSONS } from "../actions/types";

const initialState = {};

export default function lessonssReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_LESSONS:
      return {
        ...state,
        items: payload,
      };

    default:
      return state;
  }
}
