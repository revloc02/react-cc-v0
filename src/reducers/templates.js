import initialState from "../data/InitialState";
import { combineReducers } from "redux";
import { MAX_STACKED_TEMPLATES } from "../data/constants";

// Reducer
const advanced = (state = initialState.templates.advanced, action) => {
  const adv = state;
  switch (action.type) {
    case "INCREASE_ADVANCED":
      if (adv >= MAX_STACKED_TEMPLATES) return MAX_STACKED_TEMPLATES;
      else return adv + 1;
    case "DECREASE_ADVANCED":
      if (adv <= 0) return 0;
      else return adv - 1;
    default:
      return 0;
  }
};

const templates = combineReducers({
  advanced
});

export default templates;
