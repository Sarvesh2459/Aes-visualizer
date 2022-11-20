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
    <div className='Backgd' style={{height:"700px"}}>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <div style={{justifyContent:"center", alignItems:'center'}}>
    {(round1>=56)&& <h1 style={{color:"rgb(27, 191, 32)"}}>Encryption completed</h1>}
    {(round1<=3)&& <h1 style={{color:"rgb(27, 191, 32)"}}>Round 0</h1>}
    {(round1>3 && round1<44) && <h1 style={{color:"rgb(27, 191, 32)"}}>Round {Math.floor(round1/4)-1 }</h1>}
    {(round1>=44 && round1<56)&& <h1 style={{color:"rgb(27, 191, 32)"}}>Round 10</h1>}
    </div>
</div>

    
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <div style={{backgroundColor: "#ED0800"}} className={(round1>=1 && round1<4) ?'button-glow':'button-18'}  >AddRoundKey
        </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <div  style={{backgroundColor:"#0000FF", color:"white"}} className={(round1>=8 && round1<44 && round1%4==0) ?'button-glow':'button-18'}  >
        SubBytes
        </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
     
        <div  style={{backgroundColor: "#ED0800"}} className={(round1>=8 && round1<44 && round1%4==1) ?'button-glow':'button-18'}  >
        ShiftRows
        </div>
     
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
       
        <div  style={{backgroundColor:"#0000FF", color:"white"}} className={(round1>=8 && round1<44 && round1%4==2) ?'button-glow':'button-18'}  >
        MixColumns
        </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <div  style={{backgroundColor: "#ED0800"}} className={(round1>=8 && round1<44 && round1%4==3) ?'button-glow':'button-18'}  >
        AddRoundKey
        </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <div  style={{backgroundColor:"#0000FF", color:"white"}} className={(round2>=44 && round1<47) ?'button-glow':'button-18'}  >
        SubBytes
        </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <div  style={{backgroundColor: "#ED0800"}} className={(round1>=47 && round1<50) ?'button-glow':'button-18'}  >
        ShiftRows
        </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
        </TimelineSeparator>
        <TimelineContent>
        <div style={{backgroundColor:"#0000FF", color:"white"}} className={(round1>=50 && round1<53) ?'button-glow':'button-18'}  >
        AddRoundKey
        </div>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>
    </div>
  );
}