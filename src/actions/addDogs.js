export function addDogs (id,breed,imgurl){
  return {
    type: 'ADD_DOGS',
    payload:{
      id,
      breed,
      imgurl
    }
   }
}