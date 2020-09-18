import * as sentTypes from './sentTypes'

class sentActions {

    static getSentSuccess(sent) {
        return {
            type: sentTypes.GET_SENT_SUCCESS,
            sent: sent
        }
    }

    static updateSent(sent) {
        return {
            type: sentTypes.updateSent,
            sent: sent
        }
    }

}

export default sentActions
