//Dummy data
const initialState = [
  { key: "correct", value: 0 },
  { key: "incorrect", value: 0 }
];

export default function(state = initialState, { type }) {
  switch (type) {
    case "INCREMENT_INCORRECT":
      return [state[0], { ...state[1], value: state[1].value + 1 }];
    case "INCREMENT_CORRECT":
      return [{ ...state[0], value: state[0].value + 1 }, state[1]];
    default:
      return state;
  }
}
