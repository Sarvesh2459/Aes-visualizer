import * as React from 'react';
import './App.css';
import { useState, useEffect } from "react";
import Table from './Table';
import Table2 from './Table2';
import Table3 from './Table3';
import Table4 from './Table4';
import Table5 from './Table5';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {arko,sb1,mat,final} from './Data'

function ShiftRows() {
  const [flag, setflag]=useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setflag((prevflag) => prevflag + 1);
    }, 1000);

    return () => clearInterval(interval,48000);
  }, []);
  
  return (
    <div >
    <p>shift row : {mat} </p>
    <h1 style={{marginLeft: "43%"}}>Shift Row</h1>
    <div style={{marginLeft: "35%",marginTop: "4%"}}>    
      {(flag>=1 && flag<3) && <div style={{padding:"2%"}} >
      <Table  name={sb1}/>
      </div>}
      {(flag>=3 && flag<5) && <div style={{padding:"2%"}} >
      <Table2 name={sb1}/>
      </div>}
      {(flag>=5 && flag<7) && <div style={{padding:"2%"}} >
      <Table3 name={sb1}/>
      </div>}
      {(flag>=7 && flag<9) && <div style={{padding:"2%"}} >
      <Table4 name={sb1}/>
      </div>}
      {(flag>=9 && flag<11) && <div style={{padding:"2%"}} >
      <Table5 name={mat}/>
      </div>}
      {(flag>=11) && <div style={{padding:"2%"}} >
      <Table name={sb1}/>
      <br/>
      <br/>
      <ArrowDownwardIcon sx={{fontSize:"80px", marginLeft :"15%"}}/>
      <br/>
      <br/>
      <Table5 name={mat}/>
      </div>}
    </div>
    </div>
  );
}

export default ShiftRows;


