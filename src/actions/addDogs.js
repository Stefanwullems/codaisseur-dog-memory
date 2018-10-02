export const ADD_DOGS="ADD_DOGS"

export function addDogs (id,breed,imgurl){
  return {
    type: 'ADD_DOGS',
    payload:{id:id,
            breed:breed,
            imgurl:imgurl
    }
  }
}