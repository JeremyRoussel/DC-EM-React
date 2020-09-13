import React, {useState} from 'react'
import requireAuth from '../requireAuth'
import {Tab, Row, Col, ListGroup} from 'react-bootstrap'
import CKEditor from 'ckeditor4-react';
import {useSelector} from 'react-redux'



const Drafts = () => {
  
  
  let [editorData, updateEditorData] = useState("Hello from Mega Mail!")
  let [show, updateShow] = useState(false)

  let handleSubmit = () =>{
    console.log(editorData)
  }

  let onEditorChange = (evt) =>{
    updateEditorData(evt.editor.getData())
  }
  

  let handleShowMe = (text) =>{
    updateShow(true)
    console.log(text)
    updateEditorData(text)

  }

  let myDrafts = useSelector(state => state.drafts)

  // let myDrafts = [
  //   {
  //     title: "first email",
  //     body: "<p>yabba dabba doo</p>"
  //   },
  //   {
  //     title: "SECOND email",
  //     body: "<h1>BIG TEXT HERE</h1><p>yabba dabba doo</p><div>whooo</div>"
  //   },
  //   {
  //     title: "ThIRd EmAiL hErE",
  //     body: "<p>THIS IS MY THIRD email with stuff and things</p>"
  //   },
  // ]
  
  console.log(myDrafts)
  
  let draftList;
  if (myDrafts.length === 0) {
    draftList = "No Drafts to report!"
  } 
  else {
    draftList = myDrafts[0].map((r, index) =>{
        return <ListGroup.Item key={index} onClick={()=>{handleShowMe(r.body)}} href={`#link${index}`}>
          {r.title}
        </ListGroup.Item>
    })
  }



  
  
  let visibility = show ? "visible" : "hidden"

  

  return (
    <>
      <Tab.Container id="list-group-tabs-example">
        <Row>
          <Col>
            <ListGroup>
              {draftList}
              {/* <ListGroup.Item action onClick={handleShowMe} href="#link1">
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
              </ListGroup.Item> */}

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