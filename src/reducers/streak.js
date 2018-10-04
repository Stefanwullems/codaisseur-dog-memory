export default function(state = 0, { type }) {
  switch (type) {
    case "INCREMENT_STREAK":
      return state+1
    case "RESET_STREAK":
      return 0
    default:
      return state;
  }
}