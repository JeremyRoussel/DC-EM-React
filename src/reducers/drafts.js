import * as draftTypes from '../actions/drafts/draftTypes'

const init_state = []

let drafts = (state = init_state, action) =>{

    switch (action.type){
        case draftTypes.getDrafts:
            return [
                ...state,
                ...action.drafts
            ]
        // NOT SURE THIS ONE IS CORRECT
        case draftTypes.addDrafts:
            return [
                ...state,
                action.drafts
            ]
        case draftTypes.updateDrafts:
            // DO THE FILTERING HERE??
            return [
                ...state
            ]
        default: 
            return state
    }
}

export default drafts;