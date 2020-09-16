
let init_state = ""

const sendEmail = (state = init_state, action) => {
  
    switch (action.type) {

        case "SENT_SUCCESS":
            return action.response
        default :
            return state
    }
}

export default sendEmail


