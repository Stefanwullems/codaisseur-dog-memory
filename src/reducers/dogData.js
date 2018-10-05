import randomizeArray from "../scripts/randomizeArray"


const dogData = (state = [], { type, payload }) => {
  switch (type) {
    case "SET_DOGS":
      return randomizeArray([...JSON.parse(JSON.stringify(payload))],payload.length);
    default:
      return state;
  }
};

export default dogData;
