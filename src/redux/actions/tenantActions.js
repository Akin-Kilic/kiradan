import * as actionTypes from "./actionTypes";

export function getTenantSuccess(tenant) {
  return { type: actionTypes.GET_TENANT_SUCCESS, payload: tenant };
}

export function getTenants() {
  return function (dispatch) {
    let url = "http://localhost:3001/tenants";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getTenantSuccess(result)));
  };
}
