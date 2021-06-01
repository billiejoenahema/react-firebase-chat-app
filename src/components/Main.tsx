import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NavigationBar from './NavigationBar'
import MessageList from './MessageList'
import MessageInputField from './MessageInputField'

const useStyles = makeStyles({
  root: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: '1fr auto'
  },
})

type Props = {
  name: string
}

const Main: React.VFC<Props> = ({ name }) => {
  const classes = useStyles()

  return (
    <div className={classes.root} >
      <NavigationBar />
      < MessageList />
      <MessageInputField name={name} />
    </div>
  )
}

export default Main
