import React, {useState, useEffect} from 'react'
import requireAuth from '../requireAuth'
import CKEditor from 'ckeditor4-react';
import {useDispatch, useSelector} from 'react-redux'
import {DropdownButton, Dropdown, Button, Form} from 'react-bootstrap'
import {addDraft} from '../actions/drafts/draftDispatches'
import {sendEmail} from '../actions/compose/composeDispatches' 
import { useHistory } from 'react-router-dom';


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

  let [editorData, updateEditorData] = useState("Hello from CKeditor!")
  let [title, updateTitle] = useState("No Title")
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
    // if (contacts) && (emailAddresses ){

    // }
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
      history.push('/sentmail')
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
      <input type="text" id="title" onChange={handleTitle}></input>
      <CKEditor
          data={editorData} 
          onChange={onEditorChange}
      />
      <label>Choose an email list:</label><br></br>
      <select name="grouplist" id="groups" onChange={handleGroup} value={group}>
        <option value="none">Please Select a Mailing Group</option>
        {myGroups}
      </select>
      <Button type="button" className="m-2" onClick={handleSend}>Send</Button>
      <Button type="button" className="m-2" onClick={handleSave}>Save as Draft</Button>
      <div>{response}</div>
    </div>
  </>
  )
}

export default requireAuth(Compose)
