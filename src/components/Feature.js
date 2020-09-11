import React from 'react';
import requireAuth from '../requireAuth'

import {connect} from 'react-redux'

class Feature extends React.Component {
    

    render() {
        return (
            <>
            <h1>Feature Page - Protected</h1>
            <p>UserID: {this.props.user}  </p>
            </>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.auth.user
    }
}




export default connect(mapStateToProps, null)(requireAuth(Feature))