let init_state = ""

const displayError = (state = init_state, action) => {

    switch (action.type) {
        case "SENT_FETCH_ERRROR":
            return action.payload
        default:
            return state
    }
}

export default displayError