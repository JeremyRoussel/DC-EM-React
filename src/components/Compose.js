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
      <input type="button" onClick={handleSubmit}/>
    </div>
  )
}

export default requireAuth(Compose)
