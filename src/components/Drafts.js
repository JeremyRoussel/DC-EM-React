import React, {useEffect, useState} from 'react'
import requireAuth from '../requireAuth'
import {Tab, Row, Col, ListGroup} from 'react-bootstrap'
import CKEditor from 'ckeditor4-react';
import {useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
// CHANGE THIS TO UPDATE DRAFTS, NOT ADD DRAFT
import {getDrafts, updateDrafts, deleteDraft} from '../actions/drafts/draftDispatches'
import {addDraft} from '../actions/drafts/draftDispatches'
import {sendEmail} from '../actions/compose/composeDispatches'
import './style/Texteditor.css'


const Drafts = () => {
  
  
  let [editorData, updateEditorData] = useState("")
  let [draftList, updateDraftList] = useState("No Drafts to report!")
  let [show, updateShow] = useState(true)
  let [trigger, updateTrigger] = useState(false)
  let myDrafts = useSelector(state => state.drafts)
  let dispatch = useDispatch()
  let history = useHistory()
  let [title, updateTitle] = useState("No Title")
  let [group, updateGroup] = useState('none')
  let [draftID, updateDraftID] = useState("")
  let contacts = useSelector(state => state.contacts.list)
  let [emailAddresses, updateEmailAddresses] = useState([])

  useEffect(() => {

    async function instantiateDrafts() {
      
      try{
        let draftsAction = await getDrafts()
        dispatch(draftsAction)
      } 
      catch (error) {
        console.log(`Couldn't fetch Drafts. Error: ${error}`)
      }
    }
    
    if (myDrafts.length === 0){
      instantiateDrafts()
    }

    if (myDrafts.length === 0) {
      updateDraftList("No Drafts to report!")
    } 
    else {
      let newDraftList = myDrafts.map((r, index) =>{
          return <ListGroup.Item key={index} onClick={(e)=>{handleShowMe(e, r.body, r.id, r.title)}} href={`#link${index}`} data-id2 = {r.id}>
            {r.title}
          </ListGroup.Item>
      })
      updateDraftList(newDraftList)
    }
    // eslint-disable-next-line
  }, [myDrafts, trigger, show])


  let handleSend = () =>{
    if (emailAddresses.length === 0) {
      alert("Please choose a mailing list!")
      return
    }
    if (editorData === "") {
      alert("Nothing in email body to send!")
      return 
    } 

    // let emailString = emailAddresses.join(",")
    // console.log(emailString)
    let sendObj = {
      send: {
        title: title,
        body: editorData,
        group: emailAddresses
      }
    }
    dispatch(sendEmail(sendObj))
    dispatch(deleteDraft(draftID))
    updateTrigger(!trigger)
    history.push('/dashboard')
    // updateShow(false)
  }

  let handleSave = () =>{
    // console.log("saving this email as a draft")
    // console.log(editorData)
    // console.log(title)
    // console.log(group)
    
    if (title === "") {
      title = "No Subject"
    }

    if (draftID === '') {
      let draftObj = {
        drafts: {
          title: title,
          body: editorData,
          group: group
        }
      }
      
      dispatch(addDraft(draftObj))
      updateTrigger(!trigger)
      return

    } else {
      let draftObj = {
        drafts: {
          postID: draftID,
          title: title,
          body: editorData,
          group: group
        }
      }
      
      dispatch(updateDrafts(draftObj))
      updateTrigger(!trigger)
      return

    }
  }

  let handleDelete = () =>{
    // console.log("deleting the CRAP out of this email...")
    // console.log(draftID)
    dispatch(deleteDraft(draftID))
    updateEditorData("")
    document.getElementById('title').value = ""
    updateTitle("")
    updateTrigger(!trigger)
    // updateShow(false)
    let listItemToToggle = document.getElementsByClassName('active');
    listItemToToggle.forEach((eachItem) => {
      console.log(eachItem)
      eachItem.classList.toggle('active');
    })
  }

  let handleTitle = (e) =>{
    updateTitle(e.target.value)
  }

  let handleGroup = (e) =>{
    updateGroup(e.target.value)
    updateEmailAddresses(groupsList[e.target.value])
  }

  let onEditorChange = (evt) =>{
    updateEditorData(evt.editor.getData())
  }
  
  let handleShowMe = (e, text, id, title) =>{
    updateShow(true)
    // console.log(text)
    updateEditorData(text)
    updateDraftID(id)
    updateTitle(title)
    // console.log(title)
    // console.log(e)
    // titleInput.current = title
    let draftListActiveToggle = document.querySelector(`[data-id2= "${id}"]`);
    console.log(draftListActiveToggle);
    if(!draftListActiveToggle.classList.contains('active')) {
      draftListActiveToggle.classList.toggle('active');
    }
  }
  
  // let visibility = show ? "visible" : "hidden"
  let visibility = "visible" 

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
    <Row className="d-flex justify-content-center">
      <h2 className="m-5">Drafts</h2>
    </Row>
    <Row>
    <Col className="col-3 m-5 overflow">
      <Tab.Container id="list-group-tabs-example" >
        <Row>
          <Col>
            <ListGroup id="list-group" >
              {draftList}
            </ListGroup>
          </Col>
        </Row>
      </Tab.Container>
    </Col>
    <Col style={{visibility: visibility}}>
    {/* <Col> */}
          <div className="App m-5">
            <input type="text" id="title" value={title} onChange={handleTitle}></input>
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
            <button type="button" className="myButton" onClick={handleDelete}>Delete</button>
            </Row>
          </div>

          {/* <div className="App m-5">
          <input type="text" value={title} onChange={handleTitle}></input>
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
        <Button type="button" className="m-2" onClick={handleDelete}>Delete</Button> */}
          {/* </div> */}
        </Col>
        </Row>

    </>
  )
}

export default requireAuth(Drafts)