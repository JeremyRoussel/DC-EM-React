import * as sentTypes from '../actions/sent/sentTypes'

let init_state = []

let sent = (state = init_state, action) =>{
    switch (action.type) {

        case sentTypes.getSent:
            return [
                ...state,
                ...action.sent
            ]
        case sentTypes.updateSent:
            return [
                ...state,
                ...action.sent[0]
            ]
        default:
            return state
    }
}

    
export default sent;