export default function(
  state = {
    show: false,
    shouldShow: false,
    dontShowAgain: false
  },
  { type }
) {
  if (!state.dontShowAgain) {
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
      default:
        return state;
    }
  }
}
