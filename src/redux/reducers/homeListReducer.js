import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function homeListReducer(
  state = initialState.homes,
  action
) {
  switch (action.type) {
    case actionTypes.GET_HOMES_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
