import * as authTypes from './authTypes'

class authActions {

    static userLoginSuccess(token) {
        return {type: authTypes.AUTH_USER, payload: token}
    }

    static userLogout(){
        return {type: authTypes.AUTH_LOGOUT, payload: '' } 
    }

    

}

export default authActions