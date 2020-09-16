import axios from 'axios'
import sentActions from './sentActions'

export const getSent = async () =>{

    try {
        let token = localStorage.getItem('token')
        let response = await axios.get("http://localhost:3001/sent", {headers: {'authentication': token}})
        let sent = response.data
        
        return sentActions.getSent(sent)
    }
    catch {
        console.log("error in fetching sent mail")
    }
}

export const addSent = async (sent, callback) =>{

    return async (dispatch) =>{
        try{
            let token = localStorage.getItem("token")
            let response = await axios.post("http://localhost:3001/drafts", sent, {headers: {'authorization': token}})
            let sentList = response.data;

            dispatch(sentActions.updateSent(sentList))

            callback()
        }  
        catch (err) {
            console.log("Couldn't update sent mail")
        }
    }
}

