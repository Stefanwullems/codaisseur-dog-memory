const dogData = (state = [], { type, payload }) => {
  switch (type) {
    case "SET_DOGS":
      return [...JSON.parse(JSON.stringify(payload))];
    default:
      return state;
  }
};

export default dogData;
