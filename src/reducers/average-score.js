//Dummy data
const initialState = [
  { key: "correct", value: 2 },
  { key: "incorrect", value: 5 }
];

export default function(state = initialState, { type, payload }) {
  return state;
}
