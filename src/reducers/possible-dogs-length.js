export default function(state = 3, { type }) {
  switch (type) {
    case "INCREASE_DIFFICULTY":
      return state + 3;
    default:
      return state;
  }
}
