import * as authTypes from '../actions/auth/authTypes'


const init_state = {
    authenticated: '',
    errorMessage: ''
}


let auth = (state = init_state, action) => {

    switch (action.type){
        
        case authTypes.AUTH_USER:
            return {
                ...state,
                authenticated: action.payload
            }

        case authTypes.AUTH_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }
        case authTypes.AUTH_LOGOUT:
            return {
                ...state,
                authenticated: action.payload
            }

            default:
            return state
            
    }
}
    


export default auth;
