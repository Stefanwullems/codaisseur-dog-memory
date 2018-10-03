export function showWarningNotification() {
  return {
    type: "SHOW_NOTIFICATION"
  };
}

export function dontShowWarningNotification() {
  return {
    type: "DONT_SHOW_NOTIFICATION"
  };
}
