import React, { useEffect, useState } from 'react'
// Authentication HOC
import requireAuth from '../requireAuth'

// Redux State connection
import { useDispatch, useSelector } from 'react-redux'

// Dispatch Import
import {fetchContacts} from '../actions/contacts/contactDispatches'

// Bootstrap Table
import { Table } from 'react-bootstrap';
import ContactTableEntry from './ContactTableEntry';

const Subscribers = () => {

  const [contactEntries, setContactEntries] = useState([])
  const contactList = useSelector(state => state.contacts)
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
      I am Subscribers <br />

      <Table responsive hover>
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
          {/* <tr>
            <th>Demo </th>
            <th>Row</th>
            <th>demo@demo.com</th>
            <th>555-555-5555</th>
            <th>Coders</th>
            <th>React Apps</th>
          </tr> */}

          {contactEntries}

        </tbody>
      </Table>
    </>
  )
}

export default requireAuth(Subscribers)