import React, {useState, useEffect} from 'react'
import requireAuth from '../requireAuth'
import CKEditor from 'ckeditor4-react';
import {useDispatch, useSelector} from 'react-redux'
import {DropdownButton, Dropdown, Button, Form, Row, Col} from 'react-bootstrap'
import {addDraft} from '../actions/drafts/draftDispatches'
import {sendEmail} from '../actions/compose/composeDispatches' 
import { useHistory } from 'react-router-dom';
import {addSent}from '../actions/sent/sentDispatches'
import './style/Texteditor.css'

let parseEmails = (contacts, group) =>{
  
  let emailList = []
  for (let i of contacts) {
    if (i.group === group) {
      emailList.push(i.email)
    }
  }
  let emailString = emailList.join(',')
  console.log(emailString)
}

const Compose = () => {

  let [editorData, updateEditorData] = useState("Hello from MegaMail!")
  let [title, updateTitle] = useState("")
  let [group, updateGroup] = useState('none')
  let [emailAddresses, updateEmailAddresses] = useState([])
  let [trigger, updateTrigger] = useState(false)
  let dispatch = useDispatch()
  let response = useSelector(state => state.response)
  let contacts = useSelector(state => state.contacts.list)
  let history = useHistory()
  // console.log(contacts)
  parseEmails(contacts, 'coders')

  useEffect(()=>{
    updateEditorData("");
    updateTitle("")
  }, [trigger, response])

  let handleSend = () =>{
    //parseEmails(GET THE GROUP IN HERE SOMEHOW)
    if (emailAddresses.length === 0) {
      alert("Please choose a mailing list!")
      return
    }

    // let emailString = emailAddresses.join(", ")
    // console.log(emailString)
    let sendObj = {
      send: {
        title: title,
        body: editorData,
        group: emailAddresses
      }
    }
    dispatch(sendEmail(sendObj, ()=>{
      history.push('/dashboard')
    }))
}

  let handleSave = () =>{
    console.log("saving this email as a draft")
    let draftObj = {
      drafts: {
        title: title,
        body: editorData,
        group: group
      }
    }
    dispatch(addDraft(draftObj))
    updateTrigger(!trigger)
    document.getElementById('title').value = ""
  }

  let handleTitle = (e) =>{
    updateTitle(e.target.value)
  }

  let handleGroup = (e) =>{
    updateGroup(e.target.value)
    updateEmailAddresses(groupsList[e.target.value])

    // console.log("emailAddresses:")
    // console.log(emailAddresses)
  }

  let onEditorChange = (evt) =>{
    updateEditorData(evt.editor.getData())
  }

  let groupsList = {}
  for (let i of contacts) {
    if (groupsList[i.group]) {
      groupsList[i.group].push(i.email)
    }
    else {
      groupsList[i.group] = [i.email]
    }
  }

  // console.log("groupsList:")
  // console.log(groupsList)

  let myGroups;

  if (Object.keys(groupsList).length === 0) {
    myGroups = <option>Please add some Subscribers!</option>
  }
  else {
    myGroups = Object.keys(groupsList).map((r, index) =>{
    return <option key={index} value={r}>{r}</option>
    })
  } 


  return (
    <>
    <div className="App m-5">
      <input type="text" id="title" placeholder="Subject" onChange={handleTitle}></input>
      <CKEditor
          data={editorData} 
          onChange={onEditorChange}
      />

      <select name="grouplist" id="groups" onChange={handleGroup} value={group}>
        <option value="none">Please Select a Mailing Group</option>
        {myGroups}
      </select>
      <Row className="justify-content-center">
      <button type="button" className="myButton" onClick={handleSend}>Send</button>

      <button type="button" className="myButton" onClick={handleSave}>Save as Draft</button>
      </Row>
      <div>{response}</div>
    </div>
  </>
  )
}

export default requireAuth(Compose)
