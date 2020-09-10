import * as authTypes from '../actions/auth/authTypes'


const init_state = {
    authenticated: '',
    errorMessage: '',
    user: ''
}


let auth = (state = init_state, action) => {

    switch (action.type){
        
        case authTypes.AUTH_USER:
            return {
                ...state,
                authenticated: action.payload.token,
                errorMessage: '',
                user: action.payload.userID
            }

        case authTypes.AUTH_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }
        case authTypes.AUTH_LOGOUT:
            return {
                ...state,
                authenticated: action.payload.token,
                errorMessage: '',
                user: action.payload.userID
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
