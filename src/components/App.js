import React, { useState } from 'react'
import SignIn from './SignIn'
import Main from './Main'

export default () => {
  const [name, setName] = useState('')
  console.log({ name })

  return (
    name ? <Main name={name} /> : <SignIn setName={setName} />
  )
}
