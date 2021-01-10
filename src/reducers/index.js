import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productsReducer from "./productsReducer";

const allReducers = combineReducers({
  user: userReducer,
  products: productsReducer
});

export default allReducers;