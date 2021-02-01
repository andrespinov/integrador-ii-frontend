import { AppBar, Avatar, Button, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Menu } from '..'
import { logout } from '../../redux/login/loginActions'
import { MonetizationOn, ListAlt, Business } from '@material-ui/icons'

const Topbar = ({ showMenu, title, projectId }) => {
  const styles = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const [openDrawer, setOpenDrawer] = useState(false)
 
  const handleLogout = useCallback(() => {
    dispatch(logout())
  }, [dispatch])

  const menuOptions = [{
    name: 'Cerrar sesión',
    action: handleLogout
  }]

  const drawerOptions = [
    { name: 'Transacciones', action: () => history.push(`/proyecto/${projectId}/transacciones`), icon: <MonetizationOn fontSize='small' /> },
    { name: 'Materiales', action: () => history.push(`/proyecto/${projectId}/materiales`), icon: <Business fontSize='small' /> }
  ]

  return (
    <AppBar position='static'>
      <Toolbar>
        {Boolean(showMenu) && (
          <>
            <IconButton edge='start' className={styles.menuButton} color='inherit' aria-label='menu' onClick={() =>setOpenDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor='left' open={openDrawer} onClose={() => setOpenDrawer(false)}>
              <div
                role="presentation"
                onClick={() => setOpenDrawer(false)}
                onKeyDown={() => setOpenDrawer(false)}
              >
                <List>
                  <ListItem button onClick={() => history.push('/proyectos')}>
                    <ListItemIcon><ListAlt fontSize='small' /></ListItemIcon>
                    <ListItemText primary='Projects' />
                  </ListItem>
                  <Divider />
                  {drawerOptions.map((option, key) => (
                    <ListItem key={key} button onClick={option.action}>
                      <ListItemIcon>{option.icon}</ListItemIcon>
                      <ListItemText primary={option.name} />
                    </ListItem>
                  ))}
                </List>
              </div>
            </Drawer>
          </>
        )}
        <Typography variant='h6' className={styles.title}>
          {title}
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
