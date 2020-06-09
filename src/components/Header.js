import React, { useState } from 'react'
import { Typography, IconButton, Checkbox, Button, TextField, Dialog, DialogActions, DialogContent, FormControlLabel, DialogTitle, Toolbar, AppBar, makeStyles, Menu, MenuItem } from '@material-ui/core'
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
  const [isModalOpen, setModalOpen] = useState(false);
  const [url, setUrl] = useState('');
  const [schedule, setSchedule] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isValidUrl, setValidUrl] = useState(true);
  const [urlHelperText, setUrlHelperText] = useState('');
  const [validateOnBlur, setValidateOnBlur] = useState(false);

  const handleSubmit = (event) => {
    if(validateUrl(url)){
      props.onAdd({ url: url, schedule: schedule });
      setModalOpen(false);
    }
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    console.log(event.target.value)
    setAnchorEl(null);
  };

  const validateUrl = (url) => {
    let res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    let isValid = (res !== null);
    
    setUrlHelperText(isValid? '': 'invalid URL');
    setValidUrl(isValid);
    setValidateOnBlur(true);

    return isValid;
  }

  const classes = useStyles();
  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} >
            <MenuItem onClick={event => { setModalOpen(true); setAnchorEl(null); }}><AddIcon />&nbsp;&nbsp;Add</MenuItem>
            <MenuItem onClick={() => { props.onClear(); setAnchorEl(null); }}><ClearAllIcon />&nbsp;&nbsp;Clear Completed</MenuItem>
          </Menu>
          <Typography className={classes.title} variant="h6" > YouTube Downloader Daemon </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.toolBar}>
        <IconButton onClick={() => setModalOpen(true)} color="inherit" edge="start" ><AddIcon /></IconButton>
        <IconButton onClick={() => props.onClear()}><ClearAllIcon/></IconButton>
      </Toolbar>
      <Dialog open={isModalOpen} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Download Request</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" id="url" label="URL" type="url" name="url" 
            fullWidth={true} value={url} error={!isValidUrl} helperText={urlHelperText} onChange={event => setUrl(event.target.value)} onBlur={(event)=> {if (validateOnBlur) validateUrl(url)}}/>
          <FormControlLabel label="Download during off peak hours" 
            control={<Checkbox id="schedule" name="schedule" checked={!schedule} onChange={(event) => setSchedule(!event.target.checked)} />} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} variant="contained" color="primary" autoFocus> Submit </Button>
          <Button onClick={() => setModalOpen(false)} variant="contained" color="secondary"> Cancel </Button>
        </DialogActions>
      </Dialog>
    </header>
  )
}