import axios from 'axios'
import sentActions from './sentActions'

export const getSent = async () =>{

    try {
        let token = localStorage.getItem('token')
        let response = await axios.get("http://localhost:3001/sent", {headers: {'authentication': token}})
        let sent = response.data
        dispatch(sentActions.getSent(sent))
    }
    catch {
        console.log("error in fetching sent mail")
    }
}

