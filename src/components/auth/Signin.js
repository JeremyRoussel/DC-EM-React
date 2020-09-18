
import React from 'react';
import {Row, Col, Container} from 'react-bootstrap'
import {reduxForm, Field} from 'redux-form' //reduxForm is our higher order component

import {connect} from 'react-redux'
import {compose} from 'redux'
import * as actions from '../../actions/auth/authDisptaches'

class Signin extends React.Component {

    onSubmit = (formProps) => {

        //dispatch action to check user credentials
        this.props.signin(formProps, ()=>{

            console.log('Sign In Success')
            this.props.history.push('/dashboard')
        })
    }

    render() {

        const {handleSubmit} = this.props  // coming from redux forms

        return (

            <Container>
            <Row className="d-flex justify-content-center m-5">
                
                <Col className="col-10 d-flex justify-content-center">
                <form onSubmit={handleSubmit(this.onSubmit)} className="m-5">

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

                    <button>Sign In</button>


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

export default  compose(connect(mapStateToProps, actions),reduxForm({form: 'signin'}))(Signin)



