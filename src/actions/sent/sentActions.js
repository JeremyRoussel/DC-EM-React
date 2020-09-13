import * as sentTypes from './sentTypes'

class sentActions {

    static getSent(sent) {
        return {
            type: sentTypes.getSent,
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
