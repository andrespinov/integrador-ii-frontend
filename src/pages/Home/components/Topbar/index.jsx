import { AppBar, Avatar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react'

const Topbar = () => {
  const styles = useStyles()
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton edge='start' className={styles.menuButton} color='inherit' aria-label='menu'>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' className={styles.title}>
          News
        </Typography>
        <Button color='inherit'>
          <Avatar alt='Remy Sharp' src='../../../assets/images/no-avatar.png' />
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
