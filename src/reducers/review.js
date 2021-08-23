import { SET_REVIEWS } from "../actions/types";

const initialState = {};

export default function newsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_REVIEWS:
      return {
        ...state,
        items: payload,
      };

    default:
      return state;
  }
}
