import React, {useState} from 'react'
import requireAuth from '../requireAuth'
import CKEditor from 'ckeditor4-react';


const Compose = () => {

  let [editorData, updateEditorData] = useState("Hello from CKeditor!")

  let handleSubmit = () =>{
      console.log(editorData)
  }

  let onEditorChange = (evt) =>{
    updateEditorData(evt.editor.getData())
  }

  return (
    <div className="App m-5">
      <CKEditor
          data={editorData} 
          onChange={onEditorChange}
      />
      <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default requireAuth(Compose)
