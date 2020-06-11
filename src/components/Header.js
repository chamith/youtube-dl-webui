import React, { useState } from 'react'
import { Typography, IconButton, Toolbar, AppBar, makeStyles, Menu, MenuItem } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/Menu';
import ClearAllIcon from '@material-ui/icons/ClearAll';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
  },
  toolBar: {
    //backgroundColor: theme.palette.secondary.dark,
    borderBottom: 'solid 1px'
  }
}));


export default function Header(props) {

  const [anchorEl, setAnchorEl] = useState(null);


  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    console.log(event.target.value)
    setAnchorEl(null);
  };


  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick}>
            <MenuIcon />
          </IconButton>
          <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} >
            <MenuItem onClick={event => { props.onAdd(); setAnchorEl(null); }}><AddIcon />&nbsp;&nbsp;Add</MenuItem>
            <MenuItem onClick={() => { props.onClear(); setAnchorEl(null); }}><ClearAllIcon />&nbsp;&nbsp;Clear Completed</MenuItem>
          </Menu>
          <Typography className={classes.title} variant="h6" > YouTube Download Daemon </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.toolBar}>
        <IconButton onClick={() => props.onAdd()} color="inherit" edge="start" ><AddIcon /></IconButton>
        <IconButton onClick={() => props.onClear()}><ClearAllIcon/></IconButton>
      </Toolbar>
</>
  )
}