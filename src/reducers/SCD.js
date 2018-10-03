export default function(state = [],{type, payload}) {
  switch(type){
    case "SET_CURRENT_DOGS":
    console.log("this is the payload",payload)
      return [...JSON.parse(JSON.stringify(payload))]
    default: 
    return state
  }
}
