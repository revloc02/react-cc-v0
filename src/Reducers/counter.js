// Reducer
const counter = (state = 0, action) => {
  const count = state;
  switch (action.type) {
    case "INCREASE":
      return count + 1;
    case "DECREASE":
      return count - 1;
    default:
      return state;
  }
};

export default counter;
