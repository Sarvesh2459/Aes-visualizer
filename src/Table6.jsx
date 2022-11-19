import './table.css';
import * as React from 'react';
import {useEffect,useState} from 'react'

function Table6(prop) {
    const arr=prop.name 
    const [flag, setflag]=useState(0)
    
  useEffect(() => {
    const interval = setInterval(() => {
      setflag((prevflag) => prevflag + 1);
    }, 250);
    

    return () => clearInterval(interval,48000);
  }, []);
  return (

      <table>
        
        {flag>=1 && flag<=32 ?<tr className='table-glow'>
          <th>{arr[0]}{arr[1]}</th>
          <th>{arr[2]}{arr[3]}</th>
          <th>{arr[4]}{arr[5]}</th>
          <th>{arr[6]}{arr[7]}</th>
        </tr>:
        <tr>
        <th>{arr[0]}{arr[1]}</th>
          <th>{arr[2]}{arr[3]}</th>
          <th>{arr[4]}{arr[5]}</th>
          <th>{arr[6]}{arr[7]}</th>
        </tr>}
        
        {flag>=33 && flag<=40 ?<tr  className='table-glow'>
          <th>{arr[8]}{arr[9]}</th>
          <th>{arr[10]}{arr[11]}</th>
          <th>{arr[12]}{arr[13]}</th>
          <th>{arr[14]}{arr[15]}</th>
        </tr>
        :
        <tr>
        <th>{arr[8]}{arr[9]}</th>
          <th>{arr[10]}{arr[11]}</th>
          <th>{arr[12]}{arr[13]}</th>
          <th>{arr[14]}{arr[15]}</th>
        </tr>}

        {flag>=41 && flag<=48 ?<tr  className='table-glow'>
        <th>{arr[16]}{arr[17]}</th>
          <th>{arr[18]}{arr[19]}</th>
          <th>{arr[21]}{arr[22]}</th>
          <th>{arr[23]}{arr[24]}</th>
        </tr>:
        <tr>
        <th>{arr[16]}{arr[17]}</th>
          <th>{arr[18]}{arr[19]}</th>
          <th>{arr[21]}{arr[22]}</th>
          <th>{arr[23]}{arr[24]}</th>
        </tr>}


        {flag>=49 && flag<=56 ?<tr  className='table-glow'>
          <th>{arr[25]}{arr[26]}</th>
          <th>{arr[27]}{arr[28]}</th>
          <th>{arr[29]}{arr[30]}</th>
          <th>{arr[30]}{arr[31]}</th>
        </tr>:
        <tr>
          <th>{arr[25]}{arr[26]}</th>
          <th>{arr[27]}{arr[28]}</th>
          <th>{arr[29]}{arr[30]}</th>
          <th>{arr[30]}{arr[31]}</th>
        </tr>   
        }  
        
      </table>
    
    
  );
}

export default Table6;