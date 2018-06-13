import initialState from "../data/InitialState";

// Reducer
const baseStats = (state = initialState.baseStats, action) => {
  console.log("baseStats:action", action)
  const abilities = getAbilityScores(action.AbilitiyScores);
  console.log("baseStats:abilities", abilities)
  switch (action.type) {
    case "SELECT_CREATURE":
      return {
        str: abilities.str,
        dex: abilities.dex,
        con: abilities.con,
        int: abilities.int,
        wis: abilities.wis,
        cha: abilities.cha
      };
    default:
      return state;
  }
};
export default baseStats;

const getAbilityScores = abilityScores => {

}