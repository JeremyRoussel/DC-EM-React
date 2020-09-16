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

    static deleteDraft(draftID) {
        return {
            type: draftTypes.deleteDraft,
            draftID: draftID
        }
    }
}

export default draftActions