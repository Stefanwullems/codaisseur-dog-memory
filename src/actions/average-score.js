export function incrementCorrect() {
  return { type: "INCREMENT_CORRECT" };
}

export function incrementIncorrect() {
  return { type: "INCREMENT_INCORRECT" };
}

export function resetScore() {
  return { type: "RESET_SCORE" };
}
