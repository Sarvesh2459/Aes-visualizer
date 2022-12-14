import './table.css';
import * as React from 'react';

import { useState, useEffect } from "react";

function Table17(prop) {
    const arr=prop.name 
    const [flag, setflag]=useState(33)
    useEffect(() => {
        const interval = setInterval(() => {
          setflag((prevflag) => prevflag + 1);
        }, 250);
    
        return () => clearInterval(interval,48000);
      }, []);
  return (
    <>
      {(flag>=35 && flag<=40)&&<table >
        
        <tr>
          <th style={{color:"white"}}>{arr[0]}{arr[1]}</th>
        </tr>
        <tr>
          <th style={{color:"white"}}>{arr[2]}{arr[3]}</th>
        </tr>
        <tr>
          <th style={{color:"white"}}>{arr[4]}{arr[5]}</th>
        </tr>
        <tr>
          <th style={{color:"white"}}>{arr[6]}{arr[7]}</th>
        </tr>     
        
      </table>}
      
      {(flag>=43 && flag<=48)&&<table >
        
        <tr>
          <th style={{color:"rgb(27, 191, 32)"}} >{arr[8]}{arr[9]}</th>
        </tr>
        <tr>
          <th style={{color:"rgb(27, 191, 32)"}} >{arr[10]}{arr[11]}</th>
        </tr>
        <tr>
          <th style={{color:"rgb(27, 191, 32)"}} >{arr[12]}{arr[13]}</th>
        </tr>
        <tr>
          <th style={{color:"rgb(27, 191, 32)"}} >{arr[14]}{arr[15]}</th>
        </tr>     
        
      </table>}

      {(flag>=51)&&<table >
        
        <tr>
          <th style={{color:"white"}}>{arr[16]}{arr[17]}</th>
        </tr>
        <tr>
          <th style={{color:"white"}}>{arr[18]}{arr[19]}</th>
        </tr>
        <tr>
          <th style={{color:"white"}}>{arr[20]}{arr[21]}</th>
        </tr>
        <tr>
          <th style={{color:"white"}}>{arr[22]}{arr[23]}</th>
        </tr>     
        
      </table>}

      {/* <table >
        
        <tr>
          <th>{arr[24]}{arr[25]}</th>
        </tr>
        <tr>
          <th>{arr[26]}{arr[27]}</th>
        </tr>
        <tr>
          <th>{arr[28]}{arr[29]}</th>
        </tr>
        <tr>
          <th>{arr[30]}{arr[31]}</th>
        </tr>     
        
      </table> */}
      </>
    
  );
}

export default Table17;