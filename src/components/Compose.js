import React from 'react'
import requireAuth from '../requireAuth'

const Compose = () => {
  return (
    <>
      I am Compose
    </>
  )
}

export default requireAuth(Compose)
