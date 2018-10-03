export default function(state = [],{type, payload}) {
  switch(type){
    case "SET_CURRENT_DOGS":
      return [...JSON.parse(JSON.stringify(payload))]
    default: 
    return state
  }
}
