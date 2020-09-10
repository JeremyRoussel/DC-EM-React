import React from 'react'
import requireAuth from '../requireAuth'

const Drafts = () => {
  return (
    <>
      I am Drafts
    </>
  )
}

export default requireAuth(Drafts)