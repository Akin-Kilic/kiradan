import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function tenantListReducer(
  state = initialState.tenants,
  action
) {
  switch (action.type) {
    case actionTypes.GET_TENANT_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
