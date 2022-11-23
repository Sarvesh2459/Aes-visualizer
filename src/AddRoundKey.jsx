import './App.css';
import * as React from 'react';
import { useEffect } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import Table6 from './Table6';
import Table7 from './Table7';
import Table10 from './Table10';
import Table11 from './Table11';
import {UserContext} from './UserContext'
import {Link} from 'react-router-dom'

function AddRoundKey() {
  const {plaintext,setplaintext,key,setkey,arko,setarko,sb1,setsb1,mat,setmat,final,setfinal}=React.useContext(UserContext)
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
      <Link to={`/keyexpansion`} style={{ textDecoration: 'none' }}>
        <button style={{width:"80%",height:"80%"}} className={'grad'} role="button" >
        Key Expansion
        </button>
        </Link>
    </div>
    
  );
}

export default AddRoundKey;
