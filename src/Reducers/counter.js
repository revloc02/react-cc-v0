// Reducer
const counter = (state = 0, action) => {
  const count = state;
  switch (action.type) {
    case "increase":
      return count + 1;
    default:
      return state;
  }
};

export default counter;
