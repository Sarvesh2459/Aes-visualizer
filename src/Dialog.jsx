import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Dialogg(prop) {
  const [open, setOpen] = React.useState(prop.val);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"You are about to use Edvanced Encrytion Standard"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          <br/>
            <br/>
            <br/>
            <br/>
           
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
            cfvfr
            vrr
            rbrb
            trbrb
            rbtrb
            rtbtrb
            btrbr
            <br/>
            <br/>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose} >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}