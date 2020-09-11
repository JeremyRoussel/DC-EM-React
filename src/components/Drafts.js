import React, {useState} from 'react'
import requireAuth from '../requireAuth'
import {Tab, Row, Col, ListGroup} from 'react-bootstrap'
import CKEditor from 'ckeditor4-react';
import {useSelector} from 'react-redux'



const Drafts = () => {

  let myDrafts = useSelector(state => state.auth.drafts)
  console.log(myDrafts)
  let [editorData, updateEditorData] = useState("Hello from CKeditor!")
  let [show, updateShow] = useState(false)
  let visibility = show ? "visible" : "hidden"

  let handleSubmit = () =>{
      console.log(editorData)
  }

  let onEditorChange = (evt) =>{
    updateEditorData(evt.editor.getData())
  }
  
  let handleShowMe = () =>{
    updateShow(true)
  }

  return (
    <>
      <Tab.Container id="list-group-tabs-example">
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item action onClick={handleShowMe} href="#link1">
                First email
              </ListGroup.Item>
              <ListGroup.Item action onClick={handleShowMe} href="#link2">
                Second email
              </ListGroup.Item>
              <ListGroup.Item action onClick={handleShowMe} href="#link3">
                Third email
              </ListGroup.Item>
              <ListGroup.Item action onClick={handleShowMe} href="#link4">
                Fourth email
              </ListGroup.Item>

            </ListGroup>
          </Col>
          
        </Row>
      </Tab.Container>

    <Row>
      <Col style={{visibility: visibility}}>
        <div className="App m-5">
          <CKEditor
              data={editorData} 
              onChange={onEditorChange}
          />
          <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
      </Col>
    </Row>
    

    </>
  )
}

export default requireAuth(Drafts)