export const increaseAction = { type: "INCREASE" };
export const decreaseAction = { type: "DECREASE" };
export const decountAction = { type: "DECOUNT" };

export const selectCreature = creature => ({ type: "SELECT_CREATURE", creature });

// template actions
export const addMighty = { type: "ADD_MIGHTY" };
export const removeMighty = { type: "REMOVE_MIGHTY" };

export const increaseAdvanced = { type: "INCREASE_ADVANCED" };
export const decreaseAdvanced = { type: "DECREASE_ADVANCED" };

export const increaseGiant = { type: "INCREASE_GIANT" };
export const decreaseGiant = { type: "DECREASE_GIANT" };

// creature data actions
export const requestCreatureData = () => ({ type: "FETCH_CREATURE_DATA_REQUEST" });
export const storeCreatureData = creature => ({ type: "FETCH_CREATURE_DATA_SUCCESS", creature });
export const errorCreatureData = creature => ({ type: "FETCH_CREATURE_DATA_FAILURE", creature });
export const fetchCreatureData = dispatch => {
    dispatch(requestCreatureData());
    return fetch(API, {
      headers: {
        Authorization:
          "Basic " + btoa("tqadmin:1f3001df-4ebe-4c23-b110-f84fbd4eaa0f")
      }
    })
      .then(res => (res.ok ? res.json() : Promise.reject(res)))
      .then(json => dispatch(receiveAddressList(json)))
      .catch(resErr => dispatch(errorAddressList(resErr)));
  };