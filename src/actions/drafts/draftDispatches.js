import axios from 'axios'
import draftActions from './draftActions'
import * as draftTypes from './draftTypes'

require('dotenv').config()

const AUTH_POST_ROUTE = process.env.AUTH_POST_ROUTE


export const getDrafts = (formProps) =>{
    
    return async (dispatch) =>{
        try {
            // let url = AUTH_POST_ROUT + "drafts"
            // Do I need to set up a route on the server for this? 
            let response = await axios.post("http://localhost:3001/drafts", formProps);
            console.log(response)
            // What will the response look like?
            // How to dispatch? Currently it needs a userID.
            dispatch(draftActions.getDrafts())

        }
        catch (e) {
            console.log("didn't work")
            dispatch({
                type: draftTypes.getDrafts,
                payload: "Couldn't get drafts"
            })
        }
    }

}

export const updateDrafts = () =>{


}