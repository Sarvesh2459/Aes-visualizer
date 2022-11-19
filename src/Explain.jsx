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

export default function Explain() {
  const { key } = useParams();
  console.log(key);
  return (
    <div>
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Link to={''} style={{ textDecoration: 'none' }}>
        <button  style={{backgroundColor: "#0E5E6F"}} className={'button-18'} role="button" >AddRoundKey
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
        <button  style={{backgroundColor:"#CFD2CF", color:"black"}} className={'button-18'} role="button" >
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
        <button  style={{backgroundColor: "#0E5E6F"}} className={'button-18'} role="button" >
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
        <Link to={'/mixcol'} style={{ textDecoration: 'none' }}>
        <button  style={{backgroundColor:"#CFD2CF", color:"black"}} className={'button-18'} role="button" >
        MixColumns
        </button>
        </Link></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
        </TimelineSeparator>
        <TimelineContent>
        <Link to={`/keyexpansion/${key}`} style={{ textDecoration: 'none' }}>
        <button  style={{backgroundColor:"#CFD2CF", color:"black"}} className={'button-18'} role="button" >
        Key Expansion
        </button>
        </Link>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>
    </div>
  );
}