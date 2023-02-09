import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function changeCityReducer(
  state = initialState.currentCity,
  action
) {
  switch (action.type) {
    case actionTypes.CHANGE_CITY:
      return action.payload;

    default:
      return state;
  }
}
