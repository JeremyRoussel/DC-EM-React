import React from 'react'

// // Redux State connection
// import { useDispatch, useSelector } from 'react-redux'

// Redux Form
import {reduxForm, Field, reset} from 'redux-form' //reduxForm is our higher order component

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
                    <label htmlFor="first_Name">First Name</label>
                    <Field type="text" name="first_Name" component="input"/>
                </fieldset>
  
                <fieldset>
                    <label htmlFor="last_Name">Last Name</label>
                    <Field type="text" name="last_Name" component="input" />
                </fieldset>

                <fieldset>
                    <label htmlFor="email">Email</label>
                    <Field type="email" name="email" component="input" />
                </fieldset>

                <fieldset>
                    <label htmlFor="phone">Phone</label>
                    <Field type="text" name="phone" component="input" />
                </fieldset>

                <fieldset>
                    <label htmlFor="group">Group</label>
                    <Field type="text" name="group" component="input" />
                </fieldset>

                <fieldset>
                    <label htmlFor="hobbies">Hobbies</label>
                    <Field type="text" name="hobbies" component="input" />
                </fieldset>

                <div> {this.props.errorMessage} </div>

                <button type="submit" >Submit</button>
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
