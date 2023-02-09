import * as actionTypes from "./actionTypes";

export function getHomesSuccess(homes) {
  return { type: actionTypes.GET_HOMES_SUCCESS, payload: homes };
}

export function getHomes(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3001/homes";
    if (categoryId) {
      url = url + "?categoryId=" + categoryId;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getHomesSuccess(result)));
  };
}
