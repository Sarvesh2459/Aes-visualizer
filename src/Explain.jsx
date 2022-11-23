import * as React from 'react';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import './App.css'
import Data from './Data'

export default function Explain() {
  return (
    <div className='Backgd'>
      <Data/>
      <div  style={{float: "left", width: "60%",marginLeft:"21%",marginRight:"20%",marginTop:"4%",textAlign:"center"}} >
        <h1 style={{display:"inline",color:"white"}} > The </h1>
        <h1 className='lineth' style={{display:"inline",color:"white"}}>Matrix</h1>
         <h1 style={{display:"inline",color:"white"}}> AES is everywhere. It is all around us. Even now in this very room</h1>
        </div>
    <div  style={{float: "left", width: "16%",height:"16%",marginLeft:"29%",marginRight:"7%",marginTop:"5%"}} >
        <Link to={'/addroundkey'} style={{ textDecoration: 'none' }}>
        <button  style={{backgroundColor: "#0000FF" ,width:"80%",height:"80%"}} className={'button-18'} role="button" >AddRoundKey
        </button>
        </Link>
    </div>
    <div  style={{float: "left", width: "16%",height:"16%",marginLeft:"7%",marginRight:"0%",marginTop:"5%"}} >
        <Link to={'/sb'} style={{ textDecoration: 'none' }}>
        <button  style={{backgroundColor:"#ED0800",width:"80%",height:"80%"}} className={'button-18'} role="button" >
        SubBytes
        </button>
        </Link>
    </div>
    <div  style={{float: "left", width: "16%",height:"16%",marginLeft:"44%",marginRight:"38%",marginTop:"2%"}} >
        <Link to={`/keyexpansion`} style={{ textDecoration: 'none' }}>
        <button style={{width:"80%",height:"80%"}} className={'grad'} role="button" >
        Key Expansion
        </button>
        </Link>
    </div>
    <div  style={{float: "left", width: "16%",height:"16%",marginLeft:"29%",marginRight:"7%",marginTop:"2%"}} >
        <Link to={'/shiftrows'} style={{ textDecoration: 'none' }}>
        <button  style={{backgroundColor: "#0000FF",width:"80%",height:"80%"}} className={'button-18'} role="button" >
        ShiftRows
        </button>
        </Link>
    </div>
    <div  style={{float: "left", width: "16%",height:"16%",marginLeft:"7%",marginRight:"0%",marginTop:"2%"}} >
        <Link to={'/mixcol'} style={{ textDecoration: 'none' }}>
        <button  style={{backgroundColor:"#ED0800",width:"80%",height:"80%"}} className={'button-18'} role="button" >
        MixColumns
        </button>
        </Link>
    </div>
    
    </div>
      
  );
}