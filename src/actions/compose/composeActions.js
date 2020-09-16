import * as composeTypes from './composeTypes'

class composeActions {

    static sentSuccess(response) {
        return {
            type: composeTypes.SENT_SUCCESS,
            response: response
        }
    }

}

export default composeActions