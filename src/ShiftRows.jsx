import * as React from 'react';
import './App.css';
import { useState, useEffect } from "react";
import Table from './Table';
import Table2 from './Table2';
import Table3 from './Table3';
import Table4 from './Table4';
import Table5 from './Table5';
import EastIcon from '@mui/icons-material/East';
import {Link} from 'react-router-dom'
// import {arko,sb1,mat,final} from './Data'
import {UserContext} from './UserContext'

function ShiftRows() {
  const [flag, setflag]=useState(0)
  const {plaintext,setplaintext,key,setkey,arko,setarko,sb1,setsb1,mat,setmat,final,setfinal}=React.useContext(UserContext)
  useEffect(() => {
    const interval = setInterval(() => {
      setflag((prevflag) => prevflag + 1);
    }, 1000);

    return () => clearInterval(interval,48000);
  }, []);
  
  return (
    <div className='Backgd'>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
    <h1  style={{color:"rgb(27, 191, 32)",backgroundColor:"black",borderRadius:"16px",marginTop:"4%"}}>Shift Rows</h1>
    </div>
    <div style={{marginTop: "4%" }}>    
      {(flag>=1 && flag<3) && <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <Table  name={sb1}/>
      </div>}
      {(flag>=3 && flag<5) && <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <Table2 name={sb1}/>
      </div>}
      {(flag>=5 && flag<7) && <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <Table3 name={sb1}/>
      </div>}
      {(flag>=7 && flag<9) && <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <Table4 name={sb1}/>
      </div>}
      {(flag>=9 && flag<11) && <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <Table5 name={mat}/>
      </div>}
      {(flag>=11) && <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >
      <div  style={{width: "27%",display: 'flex',  justifyContent:'center', alignItems:'center'}} >
      <Table name={sb1}/>
      </div>
      <div  style={{width: "5%",marginLeft:"5%",marginRight:"5%",display: 'flex',  justifyContent:'center', alignItems:'center'}} >
      <EastIcon sx={{marginTop: "40%"  ,fontSize:"80px" }}/>
      </div>
      <div  style={{width: "27%",display: 'flex',  justifyContent:'center', alignItems:'center'}} >
      <Table5  name={mat}/>
      </div>
      </div>}
    </div>
        {(flag>=1)&& <div  style={{float: "left", width: "10%",height:"10%",marginLeft:"77%",marginRight:"%",marginTop:"3%"}} >
        <Link to={'/mixcol'} style={{ textDecoration: 'none' }}>
        <button  style={{backgroundColor:"#ED0800",width:"100%",height:"100%"}} className={'button-18'} role="button" >
        MixColumns
        </button>
        </Link>
        </div>}
    </div>
  );
}

export default ShiftRows;


