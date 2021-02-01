import React, { useState } from 'react'
import { Menu as MaterialMenu, MenuItem } from '@material-ui/core'

const Menu = ({ children, menuOptions }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <div aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{ cursor: 'pointer' }}>
        {children}
      </div>
      <MaterialMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuOptions.map(({ name, action}, key) => (
          <MenuItem key={key} onClick={action}>{name}</MenuItem>
        ))}
      </MaterialMenu>
    </div>
  )
}

export default Menu
