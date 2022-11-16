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

function MixCol() {
  const { data } = useParams();
  const sb="01020304050607080910111213141516";
  return (
    <div style={{marginTop:"14%", marginLeft:"7%"}}>
      <div  style={{float: "left", width: "27%"}} >
      <Table6  name={sb}/>
      </div>
      <div  style={{float: "left", marginTop:"10%",marginRight:"3%"}} >
      <CloseIcon sx={{fontSize:"80px", marginRight :"25%"}}/>
      </div>
      <div  style={{float: "left", width: "27%"}} >
      <Table7  name={sb}/>
      </div>
      <div  style={{float: "left", marginTop:"10%",marginRight:"3%"}} >
      <DragHandleIcon sx={{fontSize:"80px", marginRight :"25%"}}/>
      </div>
      <div  style={{float: "left", width: "27%"}} >
      <Table8  name={sb}/>
      </div>
    </div>
    
  );
}

export default MixCol;
