import { combineReducers } from "redux";
import count from "./counter";
import decount from "./decount";
import creature from "./creature";

export default combineReducers({
  count,
  decount,
  creature
});
