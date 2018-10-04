import * as request from "superagent";

const setCurrentDog = (img, currentDog) => {
  return {
    type: "SET_CURRENT_DOG",
    payload: {
      currentDog,
      img
    }
  };
};

export function getCurrentDog(currentDog) {
  return function(dispatch) {
    request(`https://dog.ceo/api/breed/${currentDog}/images/random`).then(
      response => {
        dispatch(setCurrentDog(response.body.message, currentDog[0]));
      }
    );
  };
}
