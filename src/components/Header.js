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
    backgroundColor: theme.palette.secondary.light
  }
}));


export default function Header(props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [url, setUrl] = useState('');
  const [schedule, setSchedule] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSubmit = (event) => {
    props.onAdd({ url: url, schedule: schedule });
    setModalOpen(false);
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    console.log(event.target.value)
    setAnchorEl(null);
  };

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
            <MenuItem onClick={() => { props.onClearCompleted(); setAnchorEl(null); }}><ClearAllIcon />&nbsp;&nbsp;Clear Completed</MenuItem>
          </Menu>
          <Typography className={classes.title} variant="h6" > YouTube Downloader Daemon </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.toolBar}>
        <IconButton onClick={() => setModalOpen(true)} color="inherit" edge="start" ><AddIcon /></IconButton>
      </Toolbar>
      <Dialog open={isModalOpen} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Download Request</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" id="url" label="URL" type="url" name="url" fullWidth value={url} onChange={event => setUrl(event.target.value)} />
          <FormControlLabel label="Download during off peak hours" control={<Checkbox id="schedule" name="schedule" checked={!schedule} onChange={(event) => setSchedule(!event.target.checked)} />} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} variant="outlined" color="primary" autoFocus> Submit </Button>
          <Button onClick={() => setModalOpen(false)} variant="outlined" color="secondary"> Cancel </Button>
        </DialogActions>
      </Dialog>
    </header>
  )
}