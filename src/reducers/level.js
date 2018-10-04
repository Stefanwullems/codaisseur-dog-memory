export default function(state = 1, { type, payload }) {
  switch (type) {
    case "SET_LEVEL":
      return payload;
    default:
      return state;
  }
}
