import * as request from 'superagent'
export const GET_IMAGES = "GET_IMAGES"

const addImages = (payload) => {
  return {
    type: 'GET_IMAGES',
    payload: payload
  }
}

const defaultDog='hound'

export function getImages(currentDog=defaultDog) {
  return function (dispatch) {
    request(`https://dog.ceo/api/breed/${currentDog}/images/random`)
      .then(response => {
        dispatch(addImages(response.body.message))        
      });
  };
};