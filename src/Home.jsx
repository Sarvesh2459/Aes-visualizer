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
  const [round, setround]=useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setround((prevround) => prevround + 1);
    }, 1000);

    return () => clearInterval(interval,48000);
  }, []);
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Link to={''} style={{ textDecoration: 'none' }}>
        <button style={{backgroundColor: "#0E5E6F"}} class="button-18" role="button" >AddRoundKey
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
        <button style={{backgroundColor:"#CFD2CF", color:"black"}} class="button-18" role="button" >
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
        <button style={{backgroundColor: "#0E5E6F"}} class="button-18" role="button" >
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
        <button style={{backgroundColor:"#CFD2CF", color:"black"}} class="button-18" role="button" >
        MixColumns
        </button></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <button style={{backgroundColor: "#0E5E6F"}} class="button-18" role="button" >
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
        <button style={{backgroundColor:"#CFD2CF", color:"black"}} class="button-18" role="button" >
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
        <button style={{backgroundColor: "#0E5E6F"}} class="button-18" role="button" >
        ShiftRows
        </button>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
        </TimelineSeparator>
        <TimelineContent>
        <button style={{backgroundColor:"#CFD2CF", color:"black"}} class="button-18" role="button" >
        AddRoundKey
        </button>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>
  );
}