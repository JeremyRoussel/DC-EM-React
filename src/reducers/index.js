
//combine reducer 
import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import auth from './auth'
import contacts from './contacts'

export default combineReducers({
    auth: auth,
    form: formReducer,
    contacts: contacts
})