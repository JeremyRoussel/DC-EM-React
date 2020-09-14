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
        // Why isn't there a useDispatch() earlier? It worked before...
        // Why does contactDispatches use return instead?
        return draftActions.getDrafts(drafts)
    }
    catch (error) {
        console.log("Couldn't get contacts")
    }
}

// ************************************************************************
// THIS IS THE OLD STUFF WRITTEN PRE-CONTACT FILES ************************


// require('dotenv').config()

// const AUTH_POST_ROUTE = process.env.AUTH_POST_ROUTE

// export const getDrafts = (formProps) =>{
    
//     return async (dispatch) =>{
//         try {
//             // let url = AUTH_POST_ROUT + "drafts"
//             // Do I need to set up a route on the server for this? 
//             let response = await axios.post("http://localhost:3001/drafts", formProps);
//             console.log(response)
//             // What will the response look like?
//             // How to dispatch? Currently it needs a userID.
//             dispatch(draftActions.getDrafts())

//         }
//         catch (e) {
//             console.log("didn't work")
//             dispatch({
//                 type: draftTypes.getDrafts,
//                 payload: "Couldn't get drafts"
//             })
//         }
//     }

// }

// export const updateDrafts = () =>{


// }