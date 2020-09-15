import axios from 'axios'
import draftActions from './draftActions'
// DON'T THINK I NEED THESE ********************
// import * as draftTypes from './draftTypes'

export const getDrafts = async () =>{
    try {

        let token = localStorage.getItem('token')

        let response = await axios.get("http://localhost:30001/drafts", {headers: {'authentication': token}})
        console.log(response);
        let drafts = response.drafts;

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
            let draftList = response.data

            dispatch(draftActions.updateDrafts(draftList))
        }
        catch (err) {
            console.log("error updating draft")
        }
    }
}

