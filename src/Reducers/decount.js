// Reducer
const decount = (state = 10, action) => {
  const decount = state;
  switch (action.type) {
    case "decrease":
      return decount - 1;
    default:
      return state;
  }
};

export default decount;
