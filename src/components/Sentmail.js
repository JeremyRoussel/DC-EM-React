import React, {useState, useEffect} from 'react'
import requireAuth from '../requireAuth'
import {Tab, Row, Col, ListGroup, Button} from 'react-bootstrap'
import CKEditor from 'ckeditor4-react';
import {useSelector, useDispatch} from 'react-redux'
import {addSent, getSent} from '../actions/sent/sentDispatches'
import {addDraft} from '../actions/drafts/draftDispatches'
import {sendEmail} from '../actions/compose/composeDispatches'
import './style/Texteditor.css'


const Sentmail = () =>{


  let [editorData, updateEditorData] = useState("")
  let [sentList, updateSentList] = useState([])
  let [show, updateShow] = useState(true)
  let [title, updateTitle] = useState("No Title")
  let [group, updateGroup] = useState('none')
  let [draftID, updateDraftID] = useState("")
  let [trigger, updateTrigger] = useState(false)
  let [emailAddresses, updateEmailAddresses] = useState([])
  let mySentMail = useSelector(state => state.sent)
  let dispatch = useDispatch()
  let response = useSelector(state => state.response)
  let contacts = useSelector(state => state.contacts.list)

  useEffect(()=>{

    async function instantiateSentList() {

      try {
        let sentAction = await getSent()
        dispatch(sentAction)
      }
      catch (err) {
        console.log(`Error trying to fetch Sentmail: ${err}`)
      }
    }  
    if (sentList.length === 0){
      instantiateSentList();
    }
    

    if (mySentMail.length === 0) {
      updateSentList("No Sent Mail to report!")
    }  
    else {
      let newSentList = mySentMail.map((r, index) =>{
        return <ListGroup.Item key={index} onClick={()=>{handleShowMe(r.body, r.id, r.title)}} href={`#link${index}`}>
          {r.title}
          </ListGroup.Item>
      })
      updateSentList(newSentList)
    }

  }, [mySentMail, trigger])

  let handleSend = () =>{
    if (emailAddresses.length === 0) {
      alert("Please choose a mailing list!")
      return
    }

    let emailString = emailAddresses.join(",")
    // console.log(emailString)
    let sendObj = {
      send: {
        title: title,
        body: editorData,
        group: emailString
      }
    }
    dispatch(sendEmail(sendObj, async () => {
      try {
        let sentAction = await getSent()
        await (dispatch(sentAction))
      }
      catch (err) {
        console.log(`Error trying to fetch Sentmail: ${err}`)
      }
    }))
    updateTrigger(!trigger)
    // updateShow(false)
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
    dispatch(addDraft(draftObj))
    updateTrigger(!trigger)
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

  let handleShowMe = (text, id, title) =>{
    updateShow(true)
    // console.log(text)
    updateEditorData(text)
    updateDraftID(id)
    updateTitle(title)
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
    <Row>
    <Col className="col-3 m-5">
      <h2 className="m-5">Sent Mail</h2>
      <Tab.Container id="list-group-tabs-example">
        <Row>
          <Col>
            <ListGroup>
              {sentList}
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
          </Row>
        </div>
    </Col>
    </Row>
    

    </>
  )
}



export default requireAuth(Sentmail)


// // ********************** OLD STUFF *******************************************
// // import React from 'react'
// // import requireAuth from '../requireAuth'

// // const Sentmail = () => {
// //   return (
// //     <>
// //       I am Sentmail
// //     </>
// //   )
// // }

// // export default requireAuth(Sentmail)