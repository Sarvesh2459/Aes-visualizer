import * as React from 'react';
import './App.css';
import { useState, useEffect } from "react";
import Table11 from './Table11';
import Table15 from './Table15';
// import Table10 from './Table10';

import Table17 from './Table17';
import Table18 from './Table18';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DragHandleIcon from '@mui/icons-material/DragHandle';
// import {arko,sb1,mat,final} from './Data'



function Finally(prop) {
  const [flag, setflag]=useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setflag((prevflag) => prevflag + 1);
    }, 250);

    return () => clearInterval(interval,48000);
  }, []);
  return (
  <div>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
    <h1  style={{color:"rgb(27, 191, 32)",backgroundColor:"black",borderRadius:"16px",marginTop:"4%"}}>Round 1 Key formation</h1>
    </div>
  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',marginTop:"2%"}}>
  
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',width: "28%",zIndex:"1"}} >
      <Table11 name={prop.b}/>
    </div>
    <div className={(flag<=0) ?'fadeOut':'fadeIn'} style={{float: "left",width:"3%",marginRight:"%",marginLeft:"1%",marginTop:"1%"}} >
      <AddCircleOutlineIcon sx={{fontSize:"60px"}}/>
      </div>
    <div className={(flag<=0) ?'fadeOut':'fadeIn'} style={{display: 'flex',  justifyContent:'center', alignItems:'center',width: "18%",zIndex:"2",marginLeft:"-1%",marginRight:"-2%"}} >
     {(flag>=1 && flag<=32)?<Table15 name={prop.c}/>: <Table17 name={prop.name}/>}
    </div>
    <div  className={(flag<=0) ?'fadeOut':'fadeIn'} style={{float: "left",width:"3%",marginRight:"1%",marginLeft:"%",marginTop:"1%"}} >
      <DragHandleIcon sx={{fontSize:"60px"}}/>
      </div>
    <div className={(flag<=0) ?'fadeOut':'fadeIn'} style={{display: 'flex',  justifyContent:'center', alignItems:'center',width: "28%",zIndex:"2"}} >
      <Table18 name={prop.name}/>
    </div>
</div> 
</div>
  );
}
export default Finally;


