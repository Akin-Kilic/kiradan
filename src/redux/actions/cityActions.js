import * as actionTypes from "./actionTypes";

export function changeCity(city) {
  return { type: actionTypes.CHANGE_CITY, payload: city };
}

export function getCitySuccess(cities) {
  return { type: actionTypes.GET_CITY_SUCCESS, payload: cities };
}


export function getCities() {
  return function (dispatch) {
    let url = "http://localhost:3001/cities";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getCitySuccess(result)));
  };
}
