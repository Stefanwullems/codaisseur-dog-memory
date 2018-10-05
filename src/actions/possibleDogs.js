export const SET_POSSIBLE_DOGS = "SET_POSSIBLE_DOGS";

export function setPossibleDogs(props, n) {
  if (props.length !== 0) {
    return {
      type: "SET_POSSIBLE_DOGS",
      payload: props.slice(0, n)
    };
  } else {
    return {
      type: "SET_POSSIBLE_DOGS",
      payload: []
    };
  }
}
