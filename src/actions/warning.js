export function showWarning() {
  return {
    type: "SHOW_WARNING"
  };
}

export function dontShowWarning() {
  return {
    type: "DONT_SHOW_WARNING"
  };
}

export function shouldShowWarning() {
  return {
    type: "SHOULD_SHOW_WARNING"
  };
}
export function shouldntShowWarning() {
  return {
    type: "SHOULDNT_SHOW_WARNING"
  };
}

export function neverShowWarningAgain() {
  return {
    type: "NEVER_SHOW_WARNING"
  };
}

export function showWarningAgain() {
  return {
    type: "SHOW_WARNING_NEXT_TIME"
  };
}
