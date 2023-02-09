import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cityListReducer(
  state = initialState.cities,
  action
) {
  switch (action.type) {
    case actionTypes.GET_CITY_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
