import React from 'react'
import requireAuth from '../requireAuth'
import CKEditor from 'ckeditor4-react';

const Compose = () => {
  return (
    <div className="App m-5">
      <CKEditor
          data="<p>Hello from CKEditor 4!</p>"
      />
    </div>
  )
}

export default requireAuth(Compose)
