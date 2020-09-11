import * as draftTypes from './draftTypes'

class draftActions {

    static getDrafts(userID) {
        return {
            type: draftTypes.getDrafts, 
            userID: userID
        }
    }

    static updateDrafts(userID) {
        return {
            type: draftTypes.updateDrafts,
            userID: userID
        }
    }


}

export default draftActions