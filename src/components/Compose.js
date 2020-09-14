import React, {useState} from 'react'
import requireAuth from '../requireAuth'
import CKEditor from 'ckeditor4-react';
import {Button, Modal} from 'react-bootstrap'

const Compose = () => {

  let [editorData, updateEditorData] = useState("Hello from CKeditor!")
  const [show, setShow] = useState(false);
  const modalShow = () => setShow(true);
  const modalClose = () => setShow(false);

  let handleSubmit = () =>{
      modalShow()
      console.log(editorData)
  }

  let onEditorChange = (evt) =>{
    updateEditorData(evt.editor.getData())
  }

  return (
    <>
    <div className="App m-5">
      <CKEditor
          data={editorData} 
          onChange={onEditorChange}
      />
      <button type="button" onClick={handleSubmit}>Submit</button>
    </div>

    <Modal show={show} onHide={modalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Send Mail</Modal.Title>
      </Modal.Header>
      <Modal.Body>Which list would you like to send to?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={modalClose}>
          Send
        </Button>
        <Button variant="primary" onClick={modalClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default requireAuth(Compose)
