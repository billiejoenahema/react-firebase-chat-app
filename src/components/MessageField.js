import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'


const MessageField = ({ name, setText, text }) => {
  const [isComposed, setIsComposed] = useState(false)
  console.log({ text })

  return (
    <TextField
      fullWidth={true}
      onChange={(e) => { setText(e.target.value) }}
      onKeyDown={(e) => {
        const text = e.target.value
        // 空文字もしくは文字変換中でなければEnterを押した時に実行
        if (e.key === 'Enter' && !isComposed && text !== '') {
          console.log('push message to firebase')
          setText('')
          e.preventDefault()
        }
      }}
      onCompositionStart={() => setIsComposed(true)}
      onCompositionEnd={() => setIsComposed(false)}
      value={text}
    />
  )
}

export default MessageField
