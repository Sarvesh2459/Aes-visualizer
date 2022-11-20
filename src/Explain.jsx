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
import { useParams } from 'react-router-dom';
import Data from './Data';

export default function Explain() {
  const { key } = useParams();
  return (
    <>
    <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:"2%"}}>The Choice is yours</h1>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:"10%"}}>
    
    <Data/>
         
        <Link to={''} style={{ textDecoration: 'none', padding:"5%" }}>
        <button  style={{backgroundColor: "#0E5E6F"}} className={'button-18'} role="button" >AddRoundKey
        </button>
        </Link>
        
        <Link to={'/sb'} style={{ textDecoration: 'none',padding:"5%" }}>
        <button  style={{backgroundColor:"#CFD2CF", color:"black"}} className={'button-18'} role="button" >
        SubBytes
        </button>
        </Link>
        
        <Link to={'/shiftrows'} style={{ textDecoration: 'none',padding:"5%" }}>
        <button  style={{backgroundColor: "#0E5E6F"}} className={'button-18'} role="button" >
        ShiftRows
        </button>
        </Link>
        
        <Link to={'/mixcol'} style={{ textDecoration: 'none', padding:"5%" }}>
        <button  style={{backgroundColor:"#CFD2CF", color:"black"}} className={'button-18'} role="button" >
        MixColumns
        </button>
        </Link>
        <Link to={`/keyexpansion/${key}`} style={{ textDecoration: 'none', padding:"5%" }}>
        <button  style={{backgroundColor:"#CFD2CF", color:"black"}} className={'button-18'} role="button" >
        Key Expansion
        </button>
        </Link>
    </div>
    </>
  );
}