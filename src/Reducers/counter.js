import initialState from "../Data/InitialState";

// Reducer
function counter(state = 0, action) {
  console.log("state:",state)
  const count = state;
  console.log("count:",count)
  switch (action.type) {
    case "increase":
      return count + 1 
    default:
      return state;
  }
}

export default counter;
