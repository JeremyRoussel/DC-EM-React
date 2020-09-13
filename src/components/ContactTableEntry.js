import React, {Component} from 'react'



class ContactTableEntry extends Component {

    render() {

        let contact = this.props.contact

        return (
                <tr key={contact.id}>
                    <th>{contact.first_Name}</th>
                    <th>{contact.last_Name}</th>
                    <th>{contact.email}</th>
                    <th>{contact.phone}</th>
                    <th>{contact.group}</th>
                    <th>{contact.hobbies}</th>
                </tr>
        )
    }
}

export default ContactTableEntry