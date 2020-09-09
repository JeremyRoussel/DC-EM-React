import axios from 'axios'

export const signup = (formProps, callback) => {


    // email, password
    // send to the server
    // server sends back jwt

    return async (dispatch) => {
        
        try {
            //api call
            let response = await axios.post('http://localhost:3001/signup', formProps)

            //token in response.data.token
            console.log(response)
            //dispatch to reducer, the action with reponse

            dispatch({type: "AUTH_USER", payload: response.data.token})

            localStorage.setItem('token', response.data.token)

            callback()

        } catch (error) {
            
            dispatch({type: "AUTH_ERROR", payload: 'Email in Use'})
        }
        
    }
}

export const signin = (formProps, callback) => {

    return async (dispatch) => {

        try {
            let response = await axios.post('http://localhost:3001/signin', formProps)

            dispatch({type: "AUTH_USER", payload: response.data.token})

            localStorage.setItem('token', response.data.token)
            callback()

        } catch (error) {
            console.log(error)
            dispatch({type: "AUTH_ERROR", payload: 'Incorrect Login'})
        }

    }
}

export const signout = () => {

    localStorage.removeItem('token');

    return {
        type: "LOGOUT_USER",
        payload: ''
    }
}

