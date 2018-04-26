import initialState from "../data/InitialState";

// Reducer
const creature = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_MIGHTY":
        return { }
      case "REMOVE_MIGHTY":
        return count - 1;
      default:
        return state;
    }
  };
  
  export default creature;