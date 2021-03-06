import React from 'react';

import {connect} from 'react-redux'

import * as actions from '../../actions/auth/authDisptaches'


class Signout extends React.Component {

    componentDidMount(){

        this.props.signout()

        setTimeout(() => {
          this.props.history.push('/')
        }, 0
        )
    }

    render() {
        return (
            <div className="m-5">
            </div>
        );
    }
}


export default connect(null, actions)(Signout)