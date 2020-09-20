import * as sentTypes from '../actions/sent/sentTypes'

let init_state = []

let sent = (state = init_state, action) =>{
    switch (action.type) {

        case sentTypes.GET_SENT_SUCCESS:
            // console.log(action.sent)
            return [
                ...action.sent
            ]
        case sentTypes.updateSent:
            return [
                ...state,
                ...action.sent
            ]
        default:
            return state
    }
}

    
export default sent;
