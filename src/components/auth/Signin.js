
import React from 'react';

import {reduxForm, Field} from 'redux-form' //reduxForm is our higher order component

import {connect} from 'react-redux'
import {compose} from 'redux'
import * as actions from '../../actions'

class Signin extends React.Component {

    onSubmit = (formProps) => {

        //dispatch action to check user credentials
        this.props.signin(formProps, ()=>{

            console.log('Sign In Success')
            this.props.history.push('/feature')
        })
    }

    render() {

        const {handleSubmit} = this.props  // coming from redux forms

        return (

            <form onSubmit={handleSubmit(this.onSubmit)}>

                <fieldset>
                    <label>Email</label>
                    <Field
                        name="email"
                        type="text"
                        component="input"
                        autoComplete="none"
                    
                    />
                </fieldset>

                <fieldset>
                    <label>Password</label>
                    <Field
                        name="password"
                        type="password"
                        component="input"
                        autoComplete="none"
                    
                    />
                    
                </fieldset>

                <div>{this.props.errorMessage}</div>

                <button>Sign In</button>


            </form>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        errorMessage: state.auth.errorMessage
    }
}

export default  compose(connect(mapStateToProps, actions),reduxForm({form: 'signin'}))(Signin)



