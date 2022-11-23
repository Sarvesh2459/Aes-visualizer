import * as React from 'react';
import './Dialog.css'

export default function Dialogg(prop) {
  const [open, setOpen] = React.useState(prop.val);
  


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    {
      (open) && <div class="popup">
        <div className='bacf'>
        <div  style={{float: "left", width: "17%",height:"45px",marginLeft:"40%",marginRight:"3%",marginTop:"-10px"}} >
          <h1 style={{color:"red"}}>Warning</h1>
        </div>
        <div  style={{float: "left", width: "7%",height:"6%",marginLeft:"",marginRight:"0%",marginTop:"4px"}} >
          <img src="https://svgshare.com/i/DkQ.svg" alt="" />
        </div>
        <div  style={{float: "left", width: "92%",height:"8%",marginLeft:"5%",marginRight:"5%",marginTop:"3%",textAlign:"center"}} >
          <h1 className='shado' style={{display:"inline"}}>"You take the blue pill... the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill... you stay in Wonderland, and I show you how deep the rabbit hole goes" – </h1>
          <h1 className='lineth' style={{display:"inline"}} >Morpheus (The Matrix)</h1>
          <h1 className='shado' style={{display:"inline"}} > AES</h1>  
        </div>
        <div  style={{float: "left", width: "60%",height:"50px",marginLeft:"20%",marginRight:"20%",marginTop:"3%"}} >
          <button className='btn1' onClick={handleClose}>I Understand</button>
        </div>
        </div>
        
    </div>

    }
    </>
  );
}