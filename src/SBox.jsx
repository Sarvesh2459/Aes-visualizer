import * as React from 'react';
import './App.css';
import { useState, useEffect } from "react";
import Table13 from './Table13';
import Table14 from './Table14';
// import Table15 from './Table15';
// import { height } from '@mui/system';
// import {arko,sb1,mat,final} from './Data'



function SBox(prop) {
  const [flag, setflag]=useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setflag((prevflag) => prevflag + 1);
    }, 400);

    return () => clearInterval(interval,48000);
  }, []);
  return (
  <div>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',height:"4%",width:"100%"}}>
    <h1  style={{color:"rgb(27, 191, 32)",backgroundColor:"black",borderRadius:"16px",marginTop:"4%"}}>S-box Substitution</h1>
    </div>
  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',marginTop:"2%",height:"70%"}}>
  
    <div  className={(flag<=0) ?'fadeIn':'fadeOut1'} style={{display: 'flex',  justifyContent:'center', alignItems:'center',width: "28%",zIndex:"1"}} >
      <Table13 name={prop.name}/>
    </div>
    <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center',width: "15%"}} >
    <table style={{margin:"0%",width:"65%",height:"100%",border:"1px"}}>
        <tr style={{margin:"0%"}}>
          <th className='garvi'>{"S-box"}</th>
        </tr>
    </table>
    </div>
    <div className={(flag<=0) ?'fadeOut':'fadeIn'} style={{display: 'flex',  justifyContent:'center', alignItems:'center',width: "28%",zIndex:"2"}} >
      <Table14 name={prop.name}/>
    </div>
</div> 
</div>
  );
}
export default SBox;


