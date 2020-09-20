import React, { useEffect, useState } from 'react'
// Authentication HOC
import requireAuth from '../requireAuth'

// Redux State connection
import { useDispatch, useSelector } from 'react-redux'
import {Row} from 'react-bootstrap'
// Dispatch Import
import {fetchContacts} from '../actions/contacts/contactDispatches'

// Bootstrap Table
import { Table } from 'react-bootstrap';
import ContactTableEntry from './ContactTableEntry';

// Input Form
import AddContact from './AddContact'
import './style/Texteditor.css'


const Subscribers = () => {

  const [contactEntries, setContactEntries] = useState([])
  const contactList = useSelector(state => state.contacts.list)
  const dispatch = useDispatch()

  // upon loading Subscribers, fetch contacts if empty and dispatch
  
  useEffect(() => {

    async function instantiateContacts() {
      if (contactList.length === 0){
        
        try {

          let contactAction = await fetchContacts()
          dispatch(contactAction)

        } catch (error) {

          console.log(`Failed to fetch Contacts:`, error)
        }

      }}

    instantiateContacts()

    if (contactList.length > 0){
      
      setContactEntries(contactList.map(contact => {
        
        return <ContactTableEntry contact={contact} key={contact.id} />
        
      }))

    }
    // eslint-disable-next-line
  }, [contactList])

  return (
    <>
    <div className="m-5 overflow2">
      <Table responsive hover className="">
        <thead>
          <tr>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Group</th>
            <th>Hobbies</th>
          </tr>
        </thead>
        <tbody>

          {contactEntries}

        </tbody>
      </Table>
      </div>
      <Row className="d-flex justify-content-center m-5">
        <h3>Add a Contact</h3>  
      </Row>
      
      <AddContact />
    </>
  )
}

export default requireAuth(Subscribers)