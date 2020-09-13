import React, {useState} from 'react'
import requireAuth from '../requireAuth'
import {Tab, Row, Col, ListGroup} from 'react-bootstrap'
import CKEditor from 'ckeditor4-react';
import {useSelector} from 'react-redux'


const Sentmail = () =>{
  let [editorData, updateEditorData] = useState("")
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

  let mySentMail = useSelector(state => state.sent)
  // console.log(mySentMail)

  let sentList;
  if (mySentMail.length === 0) {
    sentList = "No Sent Mail to report!"
  }  
  else {
    sentList = mySentMail.map((r, index) =>{
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
              {sentList}
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