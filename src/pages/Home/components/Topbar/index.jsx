import { AppBar, Avatar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Menu } from '../../../../components'
import { logout } from '../../../../redux/login/loginActions'

const Topbar = () => {
  const styles = useStyles()
  const dispatch = useDispatch()
 
  const handleLogout = useCallback(() => {
    dispatch(logout())
  }, [])

  const menuOptions = [{
    name: 'Cerrar sesión',
    action: handleLogout
  }]

  return (
    <AppBar position='static'>
      <Toolbar>
        {/* <IconButton edge='start' className={styles.menuButton} color='inherit' aria-label='menu'>
          <MenuIcon />
        </IconButton> */}
        <Typography variant='h6' className={styles.title}>
          BuildingApp
        </Typography>
        <Button color='inherit'>
          <Menu menuOptions={menuOptions}>
            <Avatar src='../../assets/images/no-avatar.png' />
          </Menu>
        </Button>
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export default Topbar
