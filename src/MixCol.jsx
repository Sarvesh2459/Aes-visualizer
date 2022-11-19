import './App.css';
import * as React from 'react';
import Home from './Home';
import { useParams } from 'react-router-dom';
import Table from './Table';
import CloseIcon from '@mui/icons-material/Close';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import Table6 from './Table6';
import Table7 from './Table7';
import Table8 from './Table8';
import {arko,sb1,mat,final} from './Data';

function MixCol() {
  const { data } = useParams();
  const sb= "02030101010203010101020303010102"; //const

  return (
    <div style={{marginLeft:"5%",marginRight:"0%",marginTop:"14%"}}>
      <div  style={{float: "left", width: "26%",height:"26%"}} >
      <Table6  name={sb}/>
      </div>
      <div  style={{float: "left",width:"4%",marginTop:"10%",marginRight:"3%",marginLeft:"2%"}} >
      <CloseIcon sx={{fontSize:"60px",marginTop:"14%"}}/>
      </div>
      <div  style={{float: "left", width: "26%",height:"26%"}} >
      <Table7  name={mat}/>
      </div>
      <div  style={{float: "left",width:"4%",marginTop:"10%",marginRight:"3%",marginLeft:"2%"}} >
      <DragHandleIcon sx={{fontSize:"60px",marginTop:"14%"}}/>
      </div>
      <div  style={{float: "left", width: "26%",height:"26%"}} >
      <Table8  name={final}/>
      </div>
    </div>
    
  );
}

export default MixCol;
