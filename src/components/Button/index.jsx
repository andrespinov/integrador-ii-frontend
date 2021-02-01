import React from 'react'
import {Button as MaterialButton} from '@material-ui/core'
import Loading from '../Loading'

const Button = ({title, loading, ...props}) => {
  return (
    <div>
      <MaterialButton variant="contained" color="primary" style={{ height: 40 }} {...props}>
        {loading ? (
          <Loading size={15} />
        ) : title}
      </MaterialButton>
    </div>
  )
}

export default Button
