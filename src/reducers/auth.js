

const init_state = {
    authenticated: '',
    userID: '',
    errorMessage: ''
}

let auth = (state = init_state, action) => {

    switch (action.type){
        
        case "AUTH_USER":
            return {
                ...state,
                authenticated: action.payload
            }

        case "AUTH_ERROR":
            return {
                ...state,
                errorMessage: action.payload
            }

        case "LOGOUT_USER":
            return {
                ...state,
                authenticated: "",
                userID: ""
            }

        default:
        return state
            
    }
}
    


export default auth;
