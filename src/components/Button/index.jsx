import React from 'react'
import { Button as MaterialButton } from '@material-ui/core'

const Button = ({ title, ...props }) => {
  return (
    <div>
      <MaterialButton
        variant='contained'
        color='primary'
        {...props}
      >{title}</MaterialButton>
    </div>
  )
}

export default Button
