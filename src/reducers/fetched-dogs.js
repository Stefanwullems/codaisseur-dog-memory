import {GET_DOGS} from '../actions/getDogs'


const fetchedDogs = (state = [], {type,payload}) => {
  switch (type) {
    case GET_DOGS:
      return [...JSON.parse(JSON.stringify(payload))];
    default:
      return state;
  }
};

export default fetchedDogs