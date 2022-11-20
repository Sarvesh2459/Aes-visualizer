import * as React from 'react';
import './App.css';
import { useState, useEffect } from "react";
import Table from './Table';
// import {arko,sb1,mat,final} from './Data'
import EastIcon from '@mui/icons-material/East';
import {UserContext} from './UserContext'


function SB() {
  const [flag, setflag]=useState(0)
  const {plaintext,setplaintext,key,setkey,arko,setarko,sb1,setsb1,mat,setmat,final,setfinal}=React.useContext(UserContext)
  useEffect(() => {
    const interval = setInterval(() => {
      setflag((prevflag) => prevflag + 1);
    }, 400);

    return () => clearInterval(interval,48000);
  }, []);
  return (
  <div className='Backgd'>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
    <h1  style={{color:"rgb(27, 191, 32)",backgroundColor:"black",borderRadius:"16px",marginTop:"4%"}}>S-box Substitution</h1>
    </div>
  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',marginTop:"2%"}}>
  
    <div  className={(flag<=0) ?'fadeIn':'fadeOut1'} style={{display: 'flex',  justifyContent:'center', alignItems:'center',width: "28%",zIndex:"1"}} >
      <Table  name={arko}/>
    </div>
    <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center',width: "15%"}} >
    <table style={{margin:"0%",width:"65%",height:"100%",border:"1px"}}>
        <tr style={{margin:"0%"}}>
          <th className='garvi'>{"S-box"}</th>
        </tr>
    </table>
    </div>
    <div className={(flag<=0) ?'fadeOut':'fadeIn'} style={{display: 'flex',  justifyContent:'center', alignItems:'center',width: "28%",zIndex:"2"}} >
      <Table name={sb1}/>
    </div>
</div> 
</div>
  );
}
export default SB;


