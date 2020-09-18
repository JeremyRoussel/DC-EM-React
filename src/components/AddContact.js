import React from 'react'

// // Redux State connection
// import { useDispatch, useSelector } from 'react-redux'

// Redux Form
import {reduxForm, Field, reset} from 'redux-form' //reduxForm is our higher order component
import {Row, Button} from 'react-bootstrap'
// Connect and Compose Component
import {connect} from 'react-redux'
import {compose} from 'redux'

// Import Dispatch for form
import * as dispatches from '../actions/contacts/contactDispatches'

class AddContact extends React.Component {

    // const [formContents, setFormContents] = useState(initForm)

    // const updateForm = (e) => {
    //     // console.log(e.target)
    //     setFormContents(formContents[e.target.name] = e.target.value)
    // }

    // console.log(formContents)

    onSubmit = (formProps, dispatch) => {

        this.props.addContact(formProps, () => {

            dispatch(reset('addContact'))

        })

    }


    render() {

        const {handleSubmit} = this.props

        return (
            <>
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label htmlFor="first_Name" className="w-25">First Name</label>
                    <Field type="text" name="first_Name" className="w-75" component="input"/>
                </fieldset>
  
                <fieldset>
                    <label htmlFor="last_Name" className="w-25">Last Name</label>
                    <Field type="text" name="last_Name" className="w-75" component="input" />
                </fieldset>

                <fieldset>
                    <label htmlFor="email" className="w-25">Email</label>
                    <Field type="email" name="email" className="w-75" component="input" />
                </fieldset>

                <fieldset>
                    <label htmlFor="phone" className="w-25">Phone</label>
                    <Field type="text" name="phone" className="w-75" component="input" />
                </fieldset>

                <fieldset>
                    <label htmlFor="group" className="w-25">Group</label>
                    <Field type="text" name="group" className="w-75" component="input" />
                </fieldset>

                <fieldset>
                    <label htmlFor="hobbies" className="w-25">Hobbies</label>
                    <Field type="text" name="hobbies" className="w-75" component="input" />
                </fieldset>

                <div> {this.props.errorMessage} </div>
                <Row className="d-flex justify-content-center m-3">
                    <button type="submit" className="myButton" >Submit</button>
                </Row>
                
            </form>
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        errorMessage: state.contacts.errorMessage
    }
}


export default compose(connect(mapStateToProps, dispatches), reduxForm({form: 'addContact'}))(AddContact)
