
import React from 'react';

import {reduxForm, Field} from 'redux-form' //reduxForm is our higher order component

import {connect} from 'react-redux'
import {compose} from 'redux'
import * as actions from '../../actions'

class Signup extends React.Component {

    onSubmit = (formProps) => {
        console.log(formProps)
        //dispatch action to update global state
        this.props.signup(formProps, ()=>{
            console.log('Sign Up Success')

            this.props.history.push('/feature')
        })
    }

    render() {

        const {handleSubmit} = this.props  // coming from redux forms

        return (

            <form onSubmit={handleSubmit(this.onSubmit)} className="m-5">

                <fieldset>
                    <label>User Name</label>
                    <Field
                        name="userName"
                        type="text"
                        component="input"
                        autoComplete="none"
                    
                    />
                </fieldset>

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

                <button>Sign Up</button>


            </form>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        errorMessage: state.auth.errorMessage
    }
}


export default compose(connect(mapStateToProps, actions), reduxForm({form: 'signup'}))(Signup)

