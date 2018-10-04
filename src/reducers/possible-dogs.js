export default function(state = [], { type, payload }) {
    switch (type) {
      case "SET_POSSIBLE_DOGS":
        return payload;
      default:
        return state;
    }
  }
  