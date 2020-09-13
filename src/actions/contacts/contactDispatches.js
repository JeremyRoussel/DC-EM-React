import axios from 'axios'
import contactActions from './contactActions'
// import contactActions from './contactActions'
// import * as contactTypes from './contactTypes'


export const fetchContacts = async () => {

    

    try {
    
        let token = localStorage.getItem('token')

        let response = await axios.get("http://localhost:3001/contacts", {headers: {'authorization': token}})
        
        // console.log(response)

        let contacts = response.data

        return contactActions.fetchContactsSuccess(contacts)

    } catch (error) {
        
        console.log(`error in fetching contacts`)
        
    }
    
}