import * as React from 'react';
import './Dialog.css'

export default function Dialogg(prop) {
  const [open, setOpen] = React.useState(prop.val);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    {
      (open) && <div class="popup"> 
     <h1>Welcome!</h1>

    <p>You've successfully signed into iAnswer 2.0!</p>
    <button onClick={handleClose}>START</button>

    </div>

    }
    </>
  );
}