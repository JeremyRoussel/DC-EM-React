
import React from 'react';

import {reduxForm, Field} from 'redux-form' //reduxForm is our higher order component
import {Container, Row, Col, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {compose} from 'redux'

import * as actions from '../../actions/auth/authDisptaches'

class Signup extends React.Component {

    onSubmit = (formProps) => {
        console.log(formProps)
        //dispatch action to update global state
        this.props.signup(formProps, ()=>{
            console.log('Sign Up Success')

            this.props.history.push('/Dashboard')
        })
    }

    render() {

        const {handleSubmit} = this.props  // coming from redux forms

        return (

            <Container className="d-flex justify-content-center">
                <Col className="col-8 m-5">
            <form onSubmit={handleSubmit(this.onSubmit)} className="m-5">

                <fieldset>
                    <label className="w-25">User Name</label>
                    <Field
                        name="userName"
                        type="text"
                        component="input"
                        autoComplete="none"
                        className="w-75"
                    />
                </fieldset>

                <fieldset>
                    <label className="w-25">Email</label>
                    <Field
                        name="email"
                        type="text"
                        component="input"
                        autoComplete="none"
                        className="w-75"
                    />
                </fieldset>

                <fieldset>
                    <label className="w-25">Password</label>
                    <Field
                        name="password"
                        type="password"
                        component="input"
                        autoComplete="none"
                        className="w-75"
                    />
                    
                </fieldset>

                <div>{this.props.errorMessage}</div>
                <Row className="justify-content-center">
                    <button className="myButton">Sign Up</button>
                </Row>
                


            </form>
            </Col>
            </Container>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        errorMessage: state.auth.errorMessage
    }
}


export default compose(connect(mapStateToProps, actions), reduxForm({form: 'signup'}))(Signup)

