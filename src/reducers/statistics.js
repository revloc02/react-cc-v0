import initialState from "../data/InitialState";
// Reducer
const statistics = (state = initialState.statistics, action) => {
  switch (action.type) {
    case "ADD_MIGHTY":
      return { ...state, cmd: state.cmd + 15 };
    case "INCREASE_ADVANCED":
      return { ...state.abilityScores, str: state.abilityScores.str + 4 };
    case "DECREASE_ADVANCED":
      return { ...state.abilityScores, str: state.abilityScores.str - 4 };
    default:
      return state;
  }
};

export default statistics;
