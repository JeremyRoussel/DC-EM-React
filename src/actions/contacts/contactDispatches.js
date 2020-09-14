import axios from 'axios'
import contactActions from './contactActions'
import * as contactTypes from './contactTypes'


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

export const addContact = (formProps, callback) => {

    return async (dispatch) => {

        try {

            let token = localStorage.getItem('token')

            let response = await axios.post("http://localhost:3001/contacts", formProps, {headers: {'authorization': token}})

            // response.data should be the object of the added contact
            // console.log(response.data)
            let contacts = response.data

            dispatch(contactActions.addContactsSuccess(contacts))

            callback()

        } catch (error) {

            console.log(error)
            dispatch({type: contactTypes.ADD_CONTACTS_ERROR, payload: 'Failed to Add Contact'})
        }

    }


}