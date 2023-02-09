import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";
import homeListReducer from "./homeListReducer";
import tenantListReducer from "./tenantListReducer";
import cityListReducer from "./cityListReducer";

const rootReducer = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
  homeListReducer,
  tenantListReducer,
  cityListReducer,
});

export default rootReducer;
