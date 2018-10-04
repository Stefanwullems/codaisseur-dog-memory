const showPL = (state = true, action) => {
  switch (action.type) {
    case "SHOW_PL":
      return true;
    case "HIDE_PL":
      return false;
    default:
      return state;
  }
};

export default showPL;
