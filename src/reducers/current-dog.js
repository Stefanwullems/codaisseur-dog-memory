export default function(state = '', { type, payload }) {
    switch (type) {
      case "SET_CURRENT_DOG":
        return payload;
      default:
        return state;
    }
  }
  