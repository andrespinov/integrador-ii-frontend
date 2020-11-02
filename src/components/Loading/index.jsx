import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { LoadingContainer } from './styles'

const Loading = (props) => {
  return (
    <LoadingContainer>
      <CircularProgress {...props} color='inherit' />
    </LoadingContainer>
  )
}

export default Loading
