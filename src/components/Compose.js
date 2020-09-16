import React, {useState, useEffect} from 'react'
import requireAuth from '../requireAuth'
import CKEditor from 'ckeditor4-react';
import {useDispatch, useSelector} from 'react-redux'
import {DropdownButton, Dropdown, Button, Form} from 'react-bootstrap'
import {addDraft} from '../actions/drafts/draftDispatches'
import {sendEmail} from '../actions/compose/composeDispatches' 


const Compose = () => {

  let [editorData, updateEditorData] = useState("Hello from CKeditor!")
  let [title, updateTitle] = useState("No Title")
  let [group, updateGroup] = useState('none')
  let [trigger, updateTrigger] = useState(false)
  let dispatch = useDispatch()
  let response = useSelector(state => state.response)

  useEffect(()=>{
    updateEditorData("")
  }, [trigger, response])

  let handleSend = () =>{
      console.log(title)
      console.log(editorData)
      console.log(group)
      let sendObj = {
        send: {
          title: title,
          body: editorData,
          group: group
        }
      }
      dispatch(sendEmail(sendObj))
  }

  let handleSave = () =>{
    console.log("saving this email as a draft")
    // console.log(editorData)
    // console.log(title)
    // console.log(group)
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
      <div>{response}</div>
    </div>
  </>
  )
}

export default requireAuth(Compose)
