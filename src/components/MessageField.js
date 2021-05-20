import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { pushMessage } from '../firebase'

const MessageField = ({ inputEl, name, setText, text }) => {
  const [isComposed, setIsComposed] = useState(false)

  return (
    <TextField
      autoFocus
      fullWidth={true}
      inputRef={inputEl}
      onChange={(e) => { setText(e.target.value) }}
      onKeyDown={(e) => {
        const text = e.target.value
        // 空文字もしくは文字変換中でなければEnterを押した時に実行
        if (e.key === 'Enter' && !isComposed && text !== '') {
          pushMessage({ name, text })
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
