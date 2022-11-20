import './App.css';
import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import Table6 from './Table6';
import Table7 from './Table7';
import Table8 from './Table8';
import {UserContext} from './UserContext'

function AddRoundKey() {
  const {plaintext,setplaintext,key,setkey,arko,setarko,sb1,setsb1,mat,setmat,final,setfinal}=React.useContext(UserContext)

  return (
    <div className='Backgd'>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <h1  style={{color:"rgb(27, 191, 32)",backgroundColor:"black",borderRadius:"16px",marginTop:"4%"}}>Mix Column</h1>
      </div>
      <div style={{marginTop:"4%"}}>
      <div  style={{float: "left", width: "26%",height:"26%",marginLeft:"3%",marginRight:"0%"}} >
      <Table6  name={plaintext}/>
      </div>
      <div  style={{float: "left",width:"3%",marginRight:"3%",marginLeft:"1%",marginTop:"9%"}} >
      <CloseIcon sx={{fontSize:"60px"}}/>
      </div>
      <div  style={{float: "left", width: "26%",height:"26%",marginLeft:"0%",marginRight:"0%"}} >
      <Table7  name={key}/>
      </div>
      <div  style={{float: "left",width:"3%",marginRight:"3%",marginLeft:"1%",marginTop:"9%"}} >
      <DragHandleIcon sx={{fontSize:"60px"}}/>
      </div>
      <div  style={{float: "left", width: "26%",height:"26%",marginLeft:"0%",marginRight:"1%"}} >
      <Table8  name={arko}/>
      </div>
      </div>
      
    </div>
    
  );
}

export default AddRoundKey;
