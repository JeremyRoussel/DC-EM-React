import React, {useState, useEffect} from 'react'
import requireAuth from '../requireAuth'
import {Tab, Row, Col, ListGroup, Button} from 'react-bootstrap'
import CKEditor from 'ckeditor4-react';
import {useSelector, useDispatch} from 'react-redux'
import {getSent} from '../actions/sent/sentDispatches'
import {addDraft} from '../actions/drafts/draftDispatches'


const Sentmail = () =>{


  let [editorData, updateEditorData] = useState("")
  let [sentList, updateSentList] = useState("No Sent Mail to display!")
  let [show, updateShow] = useState(false)
  let [title, updateTitle] = useState("No Title")
  let [group, updateGroup] = useState('none')
  let [draftID, updateDraftID] = useState("")
  let [trigger, updateTrigger] = useState(false)
  let mySentMail = useSelector(state => state.sent)
  let dispatch = useDispatch()

  useEffect(()=>{

    async function instantiateSentList () {
      if (sentList.length === 0) {
        try {
          let sentAction = await getSent();
          dispatch(sentAction)
        }
        catch (err) {
          console.log(`Error trying to fetch Sentmail: ${err}`)
        }
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
    console.log(title)
    console.log(editorData)
    console.log(group)
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
        <option value="BeerList">BeerList</option>
        <option value="Car Lovers">Car Lovers</option>
        <option value="Home and Garden">Home and Garden</option>
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