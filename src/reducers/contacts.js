import * as contactTypes from '../actions/contacts/contactTypes'


const init_state = []

let contacts = (state = init_state, action) => {

    // action should have key of contacts, contacts is a list of objects
    switch (action.type){
        
        case contactTypes.FETCH_CONTACTS_SUCCESS:
            return [...state, ...action.contacts]

        case contactTypes.ADD_CONTACTS_SUCCESS:
            return [...state, action.contacts[0] ]

        default:
            return state
            
    }
}
    


export default contacts;
