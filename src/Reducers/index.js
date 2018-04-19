import { combineReducers } from "redux";
import count from "./counter";
import decount from "./decount";

export default combineReducers({
  count,
  decount
});
