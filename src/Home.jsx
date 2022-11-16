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

export default function Home() {
  const [round1, setround1]=useState(1)  
  const [round2, setround2]=useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setround1((prevround1) => prevround1 + 1);
      setround2((prevround2) => prevround2 + 1);
    }, 250);

    return () => clearInterval(interval,48000);
  }, []);
  return (
    <div>
    <>
    {(round1>=56)&& <h1>Encryption completed</h1>}
    {(round1<=3)&& <h1>round 0</h1>}
    {(round1>3 && round1<44) && <h1>round {Math.floor(round1/4)-1 }</h1>}
    {(round1>=44 && round1<56)&& <h1>round 10</h1>}
    </>
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Link to={''} style={{ textDecoration: 'none' }}>
        <button style={{backgroundColor: "#0E5E6F"}} className={(round1>=1 && round1<4) ?'button-glow':'button-18'} role="button" >AddRoundKey
        </button>
        </Link>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Link to={'/sb'} style={{ textDecoration: 'none' }}>
        <button style={{backgroundColor:"#CFD2CF", color:"black"}} className={(round1>=8 && round1<44 && round1%4==0) ?'button-glow':'button-18'} role="button" >
        SubBytes
        </button>
        </Link>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Link to={'/shiftrows'} style={{ textDecoration: 'none' }}>
        <button style={{backgroundColor: "#0E5E6F"}} className={(round1>=8 && round1<44 && round1%4==1) ?'button-glow':'button-18'} role="button" >
        ShiftRows
        </button>
        </Link>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <button style={{backgroundColor:"#CFD2CF", color:"black"}} className={(round1>=8 && round1<44 && round1%4==2) ?'button-glow':'button-18'} role="button" >
        MixColumns
        </button></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <button style={{backgroundColor: "#0E5E6F"}} className={(round1>=8 && round1<44 && round1%4==3) ?'button-glow':'button-18'} role="button" >
        AddRoundKey
        </button>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <button style={{backgroundColor:"#CFD2CF", color:"black"}} className={(round2>=44 && round1<47) ?'button-glow':'button-18'} role="button" >
        SubBytes
        </button>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <button style={{backgroundColor: "#0E5E6F"}} className={(round1>=47 && round1<50) ?'button-glow':'button-18'} role="button" >
        ShiftRows
        </button>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
        </TimelineSeparator>
        <TimelineContent>
        <button style={{backgroundColor:"#CFD2CF", color:"black"}} className={(round1>=50 && round1<53) ?'button-glow':'button-18'} role="button" >
        AddRoundKey
        </button>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>
    </div>
  );
}