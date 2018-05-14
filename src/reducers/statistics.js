import initialState from "../data/InitialState";
import { combineReducers } from "redux";

// Reducer
const str = (
  state = initialState.creature.statistics.abilityScores.str,
  action
) => {
  const strength = state;
  switch (action.type) {
    case "INCREASE_ADVANCED":
      return strength + 4;
    case "DECREASE_ADVANCED":
      return strength - 4;
    default:
      return state;
  }
};
const dex = (
  state = initialState.creature.statistics.abilityScores.dex,
  action
) => {
  const dexterity = state;
  switch (action.type) {
    case "INCREASE_ADVANCED":
      return dexterity + 4;
    case "DECREASE_ADVANCED":
      return dexterity - 4;
    default:
      return state;
  }
};
const con = (
  state = initialState.creature.statistics.abilityScores.con,
  action
) => {
  const constitution = state;
  switch (action.type) {
    case "INCREASE_ADVANCED":
      return constitution + 4;
    case "DECREASE_ADVANCED":
      return constitution - 4;
    default:
      return state;
  }
};

const abilityScores = combineReducers({
  str,
  dex,
  con
});

const statistics = combineReducers({
  abilityScores
});

export default statistics;
