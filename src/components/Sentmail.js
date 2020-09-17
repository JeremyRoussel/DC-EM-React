import React, {useState, useEffect} from 'react'
import requireAuth from '../requireAuth'
import {Tab, Row, Col, ListGroup, Button} from 'react-bootstrap'
import CKEditor from 'ckeditor4-react';
import {useSelector, useDispatch} from 'react-redux'
import {getSent} from '../actions/sent/sentDispatches'
import {addDraft} from '../actions/drafts/draftDispatches'
import {sendEmail} from '../actions/compose/composeDispatches'

const Sentmail = () =>{


  let [editorData, updateEditorData] = useState("")
  let [sentList, updateSentList] = useState("No Sent Mail to display!")
  let [show, updateShow] = useState(false)
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

    function instantiateSentList () {
        try {
          let sentAction = getSent()
          .then(dispatch(sentAction))
        }
        catch (err) {
          console.log(`Error trying to fetch Sentmail: ${err}`)
        }
      }  

    instantiateSentList();

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
    console.log(emailString)
    let sendObj = {
      send: {
        title: title,
        body: editorData,
        group: emailString
      }
    }
    dispatch(sendEmail(sendObj))
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
    console.log(text)
    updateEditorData(text)
    updateDraftID(id)
    updateTitle(title)
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
      <Tab.Container id="list-group-tabs-example">
        <Row>
          <Col>
            <ListGroup>
              {sentList}
            </ListGroup>
          </Col>
        </Row>
      </Tab.Container>

    <Row>
      <Col style={{visibility: visibility}}>
        <div className="App m-5">
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
      <Button type="button" className="m-2" onClick={handleSave}>Save as Draft</Button>        </div>
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