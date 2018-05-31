import initialState from "../data/InitialState";
import { combineReducers } from "redux";
import { MAX_STACKED_TEMPLATES } from "../data/constants";

// Reducers
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

const giant = (state = initialState.templates.giant, action) => {
  const giant = state;
  switch (action.type) {
    case "INCREASE_GIANT":
      if (giant >= MAX_STACKED_TEMPLATES) return MAX_STACKED_TEMPLATES;
      else return giant + 1;
    case "DECREASE_GIANT":
      if (giant <= 0) return 0;
      else return giant - 1;
    default:
      return 0;
  }
};

const templates = combineReducers({
  advanced, giant
});

export default templates;
