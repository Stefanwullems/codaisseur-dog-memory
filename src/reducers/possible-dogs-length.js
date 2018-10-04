export default function(state = 3, { type, payload }) {
  switch (type) {
    case "POSSIBLE_DOGS_LENGTH":
      return payload;
    default:
      return state;
  }
}
