import React from 'react'
import { DatePicker as MaterialDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import Input from '../Input'

const DatePicker = ({ name, label, value, onChange, placeholder, error, ...props }) => {

  return (
    <div>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <MaterialDatePicker
          autoOk
          disableToolbar
          variant='inline'
          inputVariant='outlined'
          format='DD/MM/YYYY'
          value={value || null}
          TextFieldComponent={Input}
          letfIcon='Calendar'
          {...props}
        />
      </MuiPickersUtilsProvider>
    </div>
  )
}

export default DatePicker
