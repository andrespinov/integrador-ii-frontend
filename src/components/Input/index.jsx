import React from 'react'
import TextField from '@material-ui/core/TextField'
import { InputContainer } from './styles'

const Input = ({ error, errorMessage, ...props}) => {
  return (
    <InputContainer>
      <TextField
        className='input'
        variant='outlined'
        helperText={error ? errorMessage : null}
        error={error}
        {...props}
      />
    </InputContainer>
  )
}

export default Input
