export default function(
  state = {
    show: false,
    shouldShow: false,
    dontShowAgain: false
  },
  { type }
) {
  switch (type) {
    case "SHOW_WARNING":
      return { ...state, show: true };
    case "DONT_SHOW_WARNING":
      return { ...state, show: false };
    case "SHOULD_SHOW_WARNING":
      return { ...state, shouldShow: true };
    case "SHOULDNT_SHOW_WARNING":
      return { ...state, shouldShow: false };
    case "NEVER_SHOW_WARNING":
      return { ...state, dontShowAgain: true };
    case "SHOW_WARNING_NEXT_TIME":
      return { ...state, dontShowAgain: false };
    default:
      return state;
  }
}
