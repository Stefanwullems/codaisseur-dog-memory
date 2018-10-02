const showPL = (state = false, action) => {
    switch (action.type) {
        case "SHOW_PLAYGROUND":
        return true 
    case "HIDE_PLAYGROUND":
    return false
    default:
    return state
    }
}

export default showPL