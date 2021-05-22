import React from 'react'
import {Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Button} from '@material-ui/core';

export default function DeleteItemModal(props) {
    return (
        <Dialog
        open={props.open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure to delete the item <b>'{props.item.title}'</b>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.onDelete(props.item.id)} color="primary" variant="contained" autoFocus> Yes </Button>
          <Button onClick={() => props.onCancel()} color="secondary" variant="contained">No</Button>
        </DialogActions>
      </Dialog>
    )
}
