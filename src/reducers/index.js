import { combineReducers } from "redux";
import count from "./counter";
import decount from "./decount";
import templates from "./templates";
import creature from "./creature";

export default combineReducers({
  count,
  decount,
  templates,
  creature
});
