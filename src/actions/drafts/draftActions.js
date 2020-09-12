import * as draftTypes from './draftTypes'

class draftActions {

    static getDrafts(drafts) {
        return {
            type: draftTypes.getDrafts, 
            drafts: drafts
        }
    }

    static updateDrafts(drafts) {
        return {
            type: draftTypes.updateDrafts,
            drafts: drafts
        }
    }
}

export default draftActions