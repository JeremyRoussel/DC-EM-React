import * as draftTypes from '../actions/drafts/draftTypes'

const init_state = []

let drafts = (state = init_state, action) =>{

    switch (action.type){
        case draftTypes.getDrafts:
            return [
                ...action.drafts
            ]
        case draftTypes.addDrafts:
            return [
                ...state,
                action.drafts
            ]
        case draftTypes.updateDrafts:
            return [
                ...state.filter(r =>{
                    return (r.id !== action.drafts[0].id)
                }),
                action.drafts[0] 
            ]
        // SOMETHING WRONG WITH THIS?
        case draftTypes.deleteDraft:
            return [
                ...state.filter(r =>{
                    return (r.id != action.draftID)
                })
            ]
        default: 
            return state
    }
}

export default drafts;