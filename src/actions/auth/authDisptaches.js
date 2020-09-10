import axios from 'axios'
import authActions from './authActions'
import * as authTypes from './authTypes'

// imported into ./components/auth/ [Signin, Signup, Signout]

// import our post route
require('dotenv').config()

const AUTH_POST_ROUTE = process.env.AUTH_POST_ROUTE

export const signup = (formProps, callback) => {


    // email, password
    // send to the server
    // server sends back jwt

    return async (dispatch) => {
        
        try {
            //api call
            let url = AUTH_POST_ROUTE + 'signup'
            console.log(url)

            let response = await axios.post("http://localhost:3001/signup", formProps)

            let token = response.data.token
            console.log(response)
            //dispatch to reducer, the action with reponse

            // {type: "AUTH_USER", payload: token}
            dispatch(authActions.userLoginSuccess(token))

            localStorage.setItem('token', token)

            callback()

        } catch (error) {
            
            dispatch({type: authTypes.AUTH_ERROR, payload: 'Email in Use'})
        }
        
    }
}

export const signin = (formProps, callback) => {

    return async (dispatch) => {

        try {
            let url = AUTH_POST_ROUTE + 'signin'

            let response = await axios.post("http://localhost:3001/signin", formProps)

            let token = response.data.token

            dispatch(authActions.userLoginSuccess(token))

            localStorage.setItem('token', token)
            callback()

        } catch (error) {
            console.log(error)
            dispatch({type: authTypes.AUTH_ERROR, payload: 'Incorrect Login'})
        }

    }
}

export const signout =  () => {

    localStorage.removeItem('token');

    return (dispatch) => {
        dispatch(authActions.userLogout())

}
}
