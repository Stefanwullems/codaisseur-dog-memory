import randomizeArray from "../scripts/randomizeArray";

export function setCurrentDogs(props) {
  if (props.length !== 0) {
    return {
      type: "SET_CURRENT_DOGS",
      payload: randomizeArray(props, 3)
    };
  } else
    return {
      type: "SET_CURRENT_DOGS",
      payload: []
    };
}
