import React from 'react'
import requireAuth from '../requireAuth'

const Sentmail = () => {
  return (
    <>
      I am Sentmail
    </>
  )
}

export default requireAuth(Sentmail)