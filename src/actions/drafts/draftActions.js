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

    static updateDrafts(drafts) {
        // FILTER IT HERE?
        return {
            type: draftTypes.updateDrafts,
            drafts: drafts
        }
    }
}

export default draftActions