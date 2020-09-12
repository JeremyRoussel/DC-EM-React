import * as draftTypes from '../actions/drafts/draftTypes'

const init_state = []

let drafts = (state = init_state, action) =>{

    switch (action.type){
        case draftTypes.addContacts:
        // WHY IS STATE AN ARRAY INSTEAD OF AN OBJECT (AS IN PREVIOUS PROJECTS?)
            return [
                ...state,
                action.drafts
            ]
        // NOT SURE THIS ONE IS CORRECT
        case draftTypes.updateDrafts:
            return [
                ...state,
                action.drafts[0]
            ]
        default: 
            return state
    }
}

export default drafts;