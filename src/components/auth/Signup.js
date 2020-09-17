
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

            this.props.history.push('/feature')
        })
    }

    render() {

        const {handleSubmit} = this.props  // coming from redux forms

        return (

            <Container>
            <Row className="d-flex justify-content-center m-5">
                
                <Col className="col-10 d-flex justify-content-center">
            <form onSubmit={handleSubmit(this.onSubmit)} className="mt-5" style={{width:100}}>

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

                <Button >Sign Up</Button>


            </form>
            </Col>
            </Row>
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

