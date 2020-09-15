import React, {useEffect, useState} from 'react'
import requireAuth from '../requireAuth'
import {Tab, Row, Col, ListGroup, Button} from 'react-bootstrap'
import CKEditor from 'ckeditor4-react';
import {useSelector, useDispatch} from 'react-redux'
import {getDrafts, addDraft} from '../actions/drafts/draftDispatches'


const Drafts = () => {
  
  
  let [editorData, updateEditorData] = useState("Hello from Mega Mail!")
  let [draftList, updateDraftList] = useState("No Drafts to report!")
  let [show, updateShow] = useState(false)
  let [trigger, updateTrigger] = useState(false)
  let myDrafts = useSelector(state => state.drafts)
  let dispatch = useDispatch()
  let [title, updateTitle] = useState("No Title")
  let [group, updateGroup] = useState('none')

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
          return <ListGroup.Item key={index} onClick={()=>{handleShowMe(r.body)}} href={`#link${index}`}>
            {r.title}
          </ListGroup.Item>
      })
      updateDraftList(newDraftList)
    }
  }, [myDrafts, trigger])


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
  
  let handleShowMe = (text) =>{
    updateShow(true)
    console.log(text)
    updateEditorData(text)

  }
  
  let visibility = show ? "visible" : "hidden"

  return (
    <>
      <Tab.Container id="list-group-tabs-example">
        <Row>
          <Col>
            <ListGroup>
              {draftList}
            </ListGroup>
          </Col>
        </Row>
      </Tab.Container>

    <Row>
      <Col style={{visibility: visibility}}>
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
      </Col>
    </Row>
    

    </>
  )
}

export default requireAuth(Drafts)