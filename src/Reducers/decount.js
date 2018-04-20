// Reducer
const decount = (state = 10, action) => {
  const decount = state;
  switch (action.type) {
    case "DECOUNT":
      return decount - 1;
    default:
      return state;
  }
};

export default decount;
