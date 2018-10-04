import randomizeArray from "../scripts/randomizeArray";

export function setCurrentDogs(props) {
  return {
    type: "SET_CURRENT_DOGS",
    payload: randomizeArray(props, 3)
  };
}
