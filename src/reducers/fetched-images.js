import { GET_IMAGES } from '../actions/getImages'


const fetchedImages = (state = '', { type, payload }) => {
  switch (type) {
    case GET_IMAGES:
      return payload;
    default:
      return state;
  }
};

export default fetchedImages