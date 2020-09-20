import axios from 'axios'
import draftActions from './draftActions'
// DON'T THINK I NEED THESE ********************
// import * as draftTypes from './draftTypes'

export const getDrafts = async () =>{
    try {

        let token = localStorage.getItem('token')

        let response = await axios.get("http://localhost:3001/drafts", {headers: {'authorization': token}})
        // console.log(response);
        let drafts = response.data;

        return draftActions.getDrafts(drafts)
    }
    catch (error) {
        console.log("Couldn't get contacts")
    }
}

export const addDraft = (drafts) =>{

    return async (dispatch) =>{
        try{
            let token = localStorage.getItem('token')
            let response = await axios.post("http://localhost:3001/drafts", drafts, {headers: {'authorization': token}})
            let draftList = response.data

            dispatch(draftActions.addDrafts(draftList))
        }
        catch(err) {
            console.log("error adding draft")
        }
    }
}

export const updateDrafts = (drafts) =>{

    return async (dispatch) =>{
        try{
            let token = localStorage.getItem('token')
            // NOT SURE THIS IS RIGHT
            let response = await axios.put("http://localhost:3001/drafts", drafts, {headers: {'authorization': token}})
            let updatedDraft = response.data

            dispatch(draftActions.updateDrafts(updatedDraft))
        }
        catch (err) {
            console.log("error updating draft")
        }
    }
}

export const deleteDraft = (draftID) =>{

    return async (dispatch) =>{
        try{

            let token = localStorage.getItem('token')
            // console.log(token)
            // SOMETHING IS WRONG WITH THIS -- THIS IS WHERE IT STOPS
            let response = await axios.delete(`http://localhost:3001/drafts/${draftID}`, {headers: {'authorization': token}})
            // let updatedDrafts = response.data
            // console.log(response.data[0].id)
            
            dispatch(draftActions.deleteDraft(response.data[0].id))
        }
        catch (err) {
            console.log("error deleting draft")
        }
    }
}

