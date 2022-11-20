import * as React from 'react';
import './App.css';
import { useState } from "react";
import Table from './Table';
// import {arko,sb1,mat,final} from './Data'
import EastIcon from '@mui/icons-material/East';
import {UserContext} from './UserContext'


function SB() {
  const [visible, setvisible]=useState(true)
  const {plaintext,setplaintext,key,setkey,arko,setarko,sb1,setsb1,mat,setmat,final,setfinal}=React.useContext(UserContext)
  const change=()=>{
    setvisible(false)
  }
  return (
    <div className="App">
       <p>ark : {arko}</p>
       <p>sb: {sb1}</p>
       <div style={{margin: "auto", padding: "1%"}}  >
       <button className={visible ?'button-18':'fadeOut3'} onClick={change}>
                Sbox substitution
        </button>
        </div>
        <div style={{marginTop:"7%"}}>
      <div className={visible ?'fadeIn':'fadeOut1'} style={{marginLeft:"15%",float: "left", width: "40%"}} >
      <Table  name={arko}/>
      </div>
      <div className={visible ?'fadeOut':'fadeIn'}  style={{float: "left", width: "27%"}} >
      <EastIcon sx={{marginTop: "40%"  ,fontSize:"80px", marginLeft :"165%"}}/>
      </div>
      <div className={visible ?'fadeOut':'fadeIn'} style={{marginLeft:"1%",float: "right" , width: "42%"}} >
      <Table name={sb1}/>
      </div>
      </div>
    </div>
  );
}

export default SB;


