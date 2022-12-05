import './table1.css';
import * as React from 'react';
import {useEffect,useState} from 'react'

function Table7(prop) {
    const arr=prop.name 
    const [flag, setflag]=useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setflag((prevflag) => prevflag + 1);
    }, 250);

    return () => clearInterval(interval,48000);
  }, []);
  return (
      <table  className='tablekliye'>
        
        <tr>
        {flag>=1 && flag<=32 ?<th style={{color:"white"}}>{arr[0]}{arr[1]}</th>: <th>{arr[0]}{arr[1]}</th>}
        {flag>=33 && flag<=40  ?<th style={{color:"white"}}>{arr[8]}{arr[9]}</th>: <th>{arr[8]}{arr[9]}</th>}
        {flag>=41 && flag<=48 ?<th style={{color:"white"}}>{arr[16]}{arr[17]}</th>: <th>{arr[16]}{arr[17]}</th>}
        {flag>=49 && flag<=56 ?<th style={{color:"white"}}>{arr[24]}{arr[25]}</th>: <th>{arr[24]}{arr[25]}</th>}
        </tr>
        <tr>
        {flag>=1 && flag<=32 ? <th style={{color:"white"}}>{arr[2]}{arr[3]}</th>: <th>{arr[2]}{arr[3]}</th>}
        {flag>=33 && flag<=40 ?<th style={{color:"white"}}>{arr[10]}{arr[11]}</th>: <th>{arr[10]}{arr[11]}</th>}
        {flag>=41 && flag<=48 ?<th style={{color:"white"}}>{arr[18]}{arr[19]}</th>: <th>{arr[18]}{arr[19]}</th>}
        {flag>=49 && flag<=56 ?<th style={{color:"white"}}>{arr[26]}{arr[27]}</th>: <th>{arr[26]}{arr[27]}</th>}
        </tr>
        <tr>
        {flag>=1 && flag<=32? <th style={{color:"white"}}>{arr[4]}{arr[5]}</th>: <th>{arr[4]}{arr[5]}</th>}
        {flag>=33 && flag<=40 ?<th style={{color:"white"}}>{arr[12]}{arr[13]}</th>: <th>{arr[12]}{arr[13]}</th>}
        {flag>=41 && flag<=48 ?<th style={{color:"white"}}>{arr[20]}{arr[21]}</th>: <th>{arr[20]}{arr[21]}</th>}
        {flag>=49 && flag<=56 ?<th style={{color:"white"}}>{arr[28]}{arr[29]}</th>: <th>{arr[28]}{arr[29]}</th>}
        </tr>
        <tr>
        {flag>=1 && flag<=32? <th style={{color:"white"}}>{arr[6]}{arr[7]}</th> :<th>{arr[6]}{arr[7]}</th> }
        {flag>=33 && flag<=40 ?<th style={{color:"white"}}>{arr[14]}{arr[15]}</th>: <th>{arr[14]}{arr[15]}</th>}
        {flag>=41 && flag<=48 ?<th style={{color:"white"}}>{arr[22]}{arr[23]}</th>: <th>{arr[22]}{arr[23]}</th>}
        {flag>=49 && flag<=56 ?<th style={{color:"white"}}>{arr[30]}{arr[31]}</th>: <th>{arr[30]}{arr[31]}</th>}
        </tr>     
        
      </table>
    
  );
}

export default Table7;