import React, { useState } from 'react'
import { Checkbox, Button, TextField, Dialog, DialogActions, 
    DialogContent, FormControlLabel, DialogTitle} from '@material-ui/core'

export default function AddNewRequestModal(props) {
    const [url, setUrl] = useState('');
    const [schedule, setSchedule] = useState(0);
    const [isValidUrl, setValidUrl] = useState(true);
    const [urlHelperText, setUrlHelperText] = useState('');
    const [validateOnBlur, setValidateOnBlur] = useState(false);

    const handleSubmit = (event) => {
        if(validateUrl(url)){
          props.onSubmit({ url: url, schedule: schedule });
        }
      }
        
      const validateUrl = (url) => {
        let res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        let isValid = (res !== null);
        
        setUrlHelperText(isValid? '': 'invalid URL');
        setValidUrl(isValid);
        setValidateOnBlur(true);
    
        return isValid;
      }
    
      //const classes = useStyles();

    return (
        <Dialog open={props.open} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">New Download Request</DialogTitle>
            <DialogContent>
                <TextField autoFocus margin="dense" id="url" label="URL" type="url" name="url"
                    fullWidth={true} value={url} error={!isValidUrl} helperText={urlHelperText} onChange={event => setUrl(event.target.value)} onBlur={(event) => { if (validateOnBlur) validateUrl(url) }} />
                <FormControlLabel label="Download during off peak hours"
                    control={<Checkbox id="schedule" name="schedule" checked={!schedule} onChange={(event) => setSchedule(!event.target.checked)} />} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSubmit} variant="contained" color="primary" autoFocus> Submit </Button>
                <Button onClick={() => props.onCancel()} variant="contained" color="secondary"> Cancel </Button>
            </DialogActions>
        </Dialog>
    )
}
