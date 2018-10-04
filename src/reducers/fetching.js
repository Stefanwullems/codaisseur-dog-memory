export default function(state = false, { type }) {
  switch (type) {
    case "FETCH_COMPLETED":
      return false;
    case "FETCHING":
      return true;
    default:
      return state;
  }
}
