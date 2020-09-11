import * as contactTypes from './contactTypes'

class contactActions {

    // contacts should be a list of objects
    static fetchContactsSuccess(contacts) {
        return {type: contactTypes.FETCH_CONTACTS_SUCCESS, contacts}
    }

    // contacts should be a list of objects
    static addContactsSuccess(contacts) {
        return {type: contactTypes.ADD_CONTACTS_SUCCESS, contacts}
    }
}

export default contactActions