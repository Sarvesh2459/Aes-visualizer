import * as React from 'react';
import './App.css';
import { useState, useEffect } from "react";
import Table13 from './Table13';
import Table14 from './Table14';
import Table15 from './Table15';
// import {arko,sb1,mat,final} from './Data'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DragHandleIcon from '@mui/icons-material/DragHandle';


function RoundXor(prop) {
  const [flag, setflag]=useState(0)
  var arr="00010000"
  useEffect(() => {
    const interval = setInterval(() => {
      setflag((prevflag) => prevflag + 1);
    }, 400);

    return () => clearInterval(interval,48000);
  }, []);
  return (
  <div>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',height:"4%"}}>
    <h1  style={{color:"rgb(27, 191, 32)",backgroundColor:"black",borderRadius:"16px",marginTop:"4%"}}>Adding Round Constant</h1>
    </div>
  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',marginTop:"2%",height:"70%"}}>
  
    <div  className={(flag<=0) ?'fadeIn':'fadeOut1'} style={{display: 'flex',  justifyContent:'center', alignItems:'center',width: "18%",zIndex:"1"}} >
      <Table14 name={prop.name}/>
    </div>
    <div className={(flag<=0) ?'fadeOut':'fadeIn'} style={{float: "left",width:"3%",marginRight:"%",marginLeft:"1%",marginTop:"1%"}} >
      <AddCircleOutlineIcon sx={{fontSize:"60px"}}/>
      </div>
    <div className={(flag<=0) ?'fadeOut':'fadeIn'} style={{display: 'flex',  justifyContent:'center', alignItems:'center',width: "18%",zIndex:"2"}} >
      <Table13 name={arr}/>
    </div>
    <div className={(flag<=0) ?'fadeOut':'fadeIn'} style={{float: "left",width:"3%",marginRight:"%",marginLeft:"1%",marginTop:"1%"}} >
      <DragHandleIcon sx={{fontSize:"60px"}}/>
      </div>
    <div className={(flag<=0) ?'fadeOut':'fadeIn'} style={{display: 'flex',  justifyContent:'center', alignItems:'center',width: "18%",zIndex:"2"}} >
      <Table15 name={prop.name}/>
    </div>
</div> 
</div>
  );
}
export default RoundXor;


