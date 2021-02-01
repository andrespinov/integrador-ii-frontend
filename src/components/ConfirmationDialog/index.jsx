import React from 'react'
import Dialog from '../Dialog'

const ConfirmationDialog = ({ open, handleClose,title, loading, description }) => {
  return (
    <Dialog
      open={open}
      handleClose={() => handleClose(false)}
      handleAction={() => handleClose(true)}
      title={title}
      actionText='Aceptar'
      actionLoading={loading}
    >
      <div className='form'>
        {description}
      </div>
    </Dialog>
  )
}

export default ConfirmationDialog
