import axios from 'axios'
import composeActions from './composeActions'
import * as composeTypes from './composeTypes'

export const sendEmail = (sendObj) =>{

    return async (dispatch) =>{

    
        try {
            let token = localStorage.getItem('token');
            let serverResponse = await axios.post("http://localhost:3001/compose", sendObj, {headers: {'authorization': token}})
            
            let response = serverResponse.data;

            dispatch(composeActions.sentSuccess(response))
        }
        catch (err) {
            console.log("error sending email")
            dispatch(composeActions.sentSuccess("ERROR"))
        }
    }
    
}