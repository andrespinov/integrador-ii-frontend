import React from 'react'
import { Checkbox as MaterialCheckbox, FormControlLabel } from '@material-ui/core'

const Checkbox = (props) => {
  return (
    <FormControlLabel
      control={
        <MaterialCheckbox
          color="primary"
        />}
      {...props}
    />
  )
}

export default Checkbox
