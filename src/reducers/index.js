import { combineReducers } from "redux";
import count from "./counter";
import decount from "./decount";
import templates from "./templates";
import baseStats from "./baseStats";

export default combineReducers({
  count,
  decount,
  templates,
  baseStats
});
