import React, {useState} from 'react'
import requireAuth from '../requireAuth'
import CKEditor from 'ckeditor4-react';
import {DropdownButton, Dropdown, Button, Form} from 'react-bootstrap'

const Compose = () => {

  let [editorData, updateEditorData] = useState("Hello from CKeditor!")
  let [title, updateTitle] = useState("No Title")
  let [group, updateGroup] = useState('none')

  let handleSend = () =>{
      console.log(title)
      console.log(editorData)
      console.log(group)
  }

  let handleSave = () =>{
    console.log("saving this email as a draft")
    console.log(editorData)
    console.log(title)
    console.log(group)
  }

  let handleTitle = (e) =>{
    updateTitle(e.target.value)
  }

  let handleGroup = (e) =>{
    updateGroup(e.target.value)
  }

  let onEditorChange = (evt) =>{
    updateEditorData(evt.editor.getData())
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
        <option value="BeerList">BeerList</option>
        <option value="Car Lovers">Car Lovers</option>
        <option value="Home and Garden">Home and Garden</option>
      </select>
      <Button type="button" className="m-2" onClick={handleSend}>Send</Button>
      <Button type="button" className="m-2" onClick={handleSave}>Save as Draft</Button>
    </div>
  </>
  )
}

export default requireAuth(Compose)
