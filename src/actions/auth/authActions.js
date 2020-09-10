import * as authTypes from './authTypes'

class authActions {

    static userLoginSuccess(token, userID) {
        return {type: authTypes.AUTH_USER, payload: {token: token, userID: userID}}
    }

    static userLogout(){
        return {type: authTypes.AUTH_LOGOUT, payload: {token: '', userID: ''}} 
    }

    

}

export default authActions