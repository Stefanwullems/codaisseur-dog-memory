export default function(state = [],{type, payload}) {
  switch(type){
    case "SET_CURRENT_DOGS":
    console.log(payload)
      return [...JSON.parse(JSON.stringify(payload))]
    default: 
    return state
  }
}
