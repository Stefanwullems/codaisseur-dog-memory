import * as request from 'superagent'
export const GET_DOGS="GET_DOGS"

const addAllDogs =(payload)=>{
  return {
    type: 'GET_DOGS',
    payload:payload
   }
}

export function getDogs() {
  return function(dispatch) {
    request('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        dispatch(addAllDogs(Object.keys(response.body.message)))
      })
  }
}


