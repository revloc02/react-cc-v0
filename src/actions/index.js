import data from "../data/creatures.json";

export const increaseAction = { type: "INCREASE" };
export const decreaseAction = { type: "DECREASE" };
export const decountAction = { type: "DECOUNT" };

export const selectCreature = creature => ({
  type: "SELECT_CREATURE",
  creature
});

// template actions
export const addMighty = { type: "ADD_MIGHTY" };
export const removeMighty = { type: "REMOVE_MIGHTY" };

export const increaseAdvanced = { type: "INCREASE_ADVANCED" };
export const decreaseAdvanced = { type: "DECREASE_ADVANCED" };

export const increaseGiant = { type: "INCREASE_GIANT" };
export const decreaseGiant = { type: "DECREASE_GIANT" };

// creature data actions
export const requestCreatureData = () => ({ type: "FETCH_CREATURE_DATA_REQUEST" });
export const storeCreatureData = creatures => ({ type: "FETCH_CREATURE_DATA_SUCCESS", creatures });
export const errorCreatureData = creatures => ({ type: "FETCH_CREATURE_DATA_FAILURE", creatures });
export const fetchCreatureData = dispatch => {
  dispatch(requestCreatureData());
  if (data) {
    dispatch(storeCreatureData(data));
    return data;
  } else {
    dispatch(errorCreatureData("Error: no data"));
    return;
  }
};
