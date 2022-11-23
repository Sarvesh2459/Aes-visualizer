import './App.css';
import * as React from 'react';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DragHandleIcon from '@mui/icons-material/DragHandle';


import Table10 from './Table10';
import Table11 from './Table11';
import {UserContext} from './UserContext'
import {Link} from 'react-router-dom'

function AddRoundKey() {
  const {plaintext,key,arko}=React.useContext(UserContext)
//   useEffect(() => {
//     setarko(JSON.parse(window.sessionStorage.getItem("arko")));
//   }, []);

//   useEffect(() => {
//     window.sessionStorage.setItem("arko", arko);
//   }, [arko]);

  return (
    <div className='Backgd'>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <h1  style={{color:"rgb(27, 191, 32)",backgroundColor:"black",borderRadius:"16px",marginTop:"4%"}}>Add Round Key</h1>
      </div>
      <div style={{marginTop:"4%"}}>
      <div  style={{float: "left", width: "26%",height:"26%",marginLeft:"3%",marginRight:"0%"}} >
      <Table11  name={plaintext}/>
      </div>
      <div  style={{float: "left",width:"3%",marginRight:"3%",marginLeft:"1%",marginTop:"9%"}} >
      <AddCircleOutlineIcon sx={{fontSize:"60px"}}/>
      </div>
      <div  style={{float: "left", width: "26%",height:"26%",marginLeft:"0%",marginRight:"0%"}} >
      <Table11  name={key}/>
      </div>
      <div  style={{float: "left",width:"3%",marginRight:"3%",marginLeft:"1%",marginTop:"9%"}} >
      <DragHandleIcon sx={{fontSize:"60px"}}/>
      </div>
      <div  style={{float: "left", width: "26%",height:"26%",marginLeft:"0%",marginRight:"1%"}} >
      <Table10  name={arko}/>
      </div>
      </div>
      <div  style={{float: "left", width: "12%",height:"10%",marginLeft:"77%",marginRight:"0%",marginTop:"3%"}} >
      <Link to={`/sb`} style={{ textDecoration: 'none' }}>
        <button style={{width:"100%",height:"100%"}} className={'grad'}   >
        SubBytes
        </button>
        </Link>
      </div>
      
    </div>
    
  );
}

export default AddRoundKey;
