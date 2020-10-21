import React from 'react'
import TextField from '@material-ui/core/TextField'
import { InputContainer } from './styles'

const Input = (props) => {
  return (
    <InputContainer>
      <TextField
        className='input'
        variant='outlined'
        {...props}
      />
    </InputContainer>
  )
}

export default Input
