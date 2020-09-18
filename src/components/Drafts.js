import React, {useEffect, useState} from 'react'
import requireAuth from '../requireAuth'
import {Tab, Row, Col, ListGroup, Button} from 'react-bootstrap'
import CKEditor from 'ckeditor4-react';
import {useSelector, useDispatch} from 'react-redux'
// CHANGE THIS TO UPDATE DRAFTS, NOT ADD DRAFT
import {getDrafts, updateDrafts, deleteDraft} from '../actions/drafts/draftDispatches'
import {sendEmail} from '../actions/compose/composeDispatches'


const Drafts = () => {
  
  
  let [editorData, updateEditorData] = useState("Hello from Mega Mail!")
  let [draftList, updateDraftList] = useState("No Drafts to report!")
  let [show, updateShow] = useState(false)
  let [trigger, updateTrigger] = useState(false)
  let myDrafts = useSelector(state => state.drafts)
  let dispatch = useDispatch()
  let [title, updateTitle] = useState("No Title")
  let [group, updateGroup] = useState('none')
  let [draftID, updateDraftID] = useState("")
  let contacts = useSelector(state => state.contacts.list)
  let [emailAddresses, updateEmailAddresses] = useState([])

  useEffect(() => {

    async function instantiateDrafts() {
      if (myDrafts.length === 0){
        try{
          let draftsAction = await getDrafts()
          dispatch(draftsAction)
        } 
        catch (error) {
          console.log(`Couldn't fetch Drafts. Error: ${error}`)
        }
      }}

    instantiateDrafts()

    if (myDrafts.length === 0) {
      updateDraftList("No Drafts to report!")
    } 
    else {
      let newDraftList = myDrafts.map((r, index) =>{
          return <ListGroup.Item key={index} onClick={(e)=>{handleShowMe(e, r.body, r.id, r.title)}} href={`#link${index}`}>
            {r.title}
          </ListGroup.Item>
      })
      updateDraftList(newDraftList)
    }
  }, [myDrafts, trigger, show])


  let handleSend = () =>{
    if (emailAddresses.length === 0) {
      alert("Please choose a mailing list!")
      return
    }

    let emailString = emailAddresses.join(",")
    console.log(emailString)
    let sendObj = {
      send: {
        title: title,
        body: editorData,
        group: emailString
      }
    }
    dispatch(sendEmail(sendObj))
    dispatch(deleteDraft(draftID))
    updateTrigger(!trigger)
    updateShow(false)
  }

  let handleSave = () =>{
    console.log("saving this email as a draft")
    // console.log(editorData)
    // console.log(title)
    // console.log(group)
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
  }

  let handleDelete = () =>{
    console.log("deleting the CRAP out of this email...")
    console.log(draftID)
    dispatch(deleteDraft(draftID))
    updateTrigger(!trigger)
    updateShow(false)

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
  }
  
  let visibility = show ? "visible" : "hidden"

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
    <Row>
    <Col className="col-3 m-5">
      <h2 className="m-5">Drafts</h2>
      <Tab.Container id="list-group-tabs-example">
        <Row>
          <Col>
            <ListGroup>
              {draftList}
            </ListGroup>
          </Col>
        </Row>
      </Tab.Container>
    </Col>
    <Col style={{visibility: visibility}}>
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