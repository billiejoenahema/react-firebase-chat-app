import React, { useState } from 'react'
import SignIn from './SignIn'
import Main from './Main'
import config from '../config.json'

export default () => {
  const [name, setName] = useState('')

  return (
    (name === '' && config.signInEnabled) ?
      <SignIn setName={setName} />
      : <Main name={name} />
  )
}
