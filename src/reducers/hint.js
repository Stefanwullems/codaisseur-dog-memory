export default function (
  state = {
    show: false,
  },
  { type }
) {
  switch (type) {
    case "SHOW_HINT":
      return { ...state, show: true };
    case "DONT_SHOW_HINT":
      return { ...state, show: false };
    default:
      return state
  }
}