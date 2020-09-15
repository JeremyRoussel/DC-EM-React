import * as draftTypes from './draftTypes'

class draftActions {

    static getDrafts(drafts) {
        return {
            type: draftTypes.getDrafts, 
            drafts: drafts
        }
    }

    static addDrafts(drafts) {
        return {
            type: draftTypes.addDrafts,
            drafts: drafts
        }
    }

    static updateDrafts(updatedDraft) {
        
        return {
            type: draftTypes.updateDrafts,
            drafts: updatedDraft
        }
    }
}

export default draftActions