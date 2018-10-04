import * as request from "superagent";

const setDogData = payload => {
  return {
    type: "SET_DOGS",
    payload: payload
  };
};

export function getDogs() {
  return function(dispatch) {
    request("https://dog.ceo/api/breeds/list/all")
    .then(response => {
      const dogData = Object.keys(response.body.message);
      dispatch(setDogData(dogData));
    });
  };
}
