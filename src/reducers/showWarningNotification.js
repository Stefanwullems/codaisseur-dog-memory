export default function(state = false, { type }) {
  switch (type) {
    case "SHOW_NOTIFICATION":
      return true;
    case "DONT_SHOW_NOTIFICATION":
      return false;
    default:
      return state;
  }
}
