import { combineReducers } from "redux";
import count from "./counter";
import decount from "./decount";
import statistics from "./statistics";

export default combineReducers({
  count,
  decount,
  statistics
});
