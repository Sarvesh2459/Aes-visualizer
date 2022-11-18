import './table.css';
import * as React from 'react';
import {useEffect,useState} from 'react'

function Table8(prop) {
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
        
        <tr>
          <th className={flag>=1 ? 'col-show': 'col-hide'}>{arr[0]}{arr[1]}</th>
          <th className={flag>=9 ? 'col-show': 'col-hide'}>{arr[8]}{arr[9]}</th>
          <th className={flag>=17 ? 'col-show': 'col-hide'}>{arr[16]}{arr[17]}</th>
          <th className={flag>=25 ? 'col-show': 'col-hide'}>{arr[24]}{arr[25]}</th>
        </tr>
        <tr>
          <th className={flag>=33 ? 'col-show': 'col-hide'}>{arr[2]}{arr[3]}</th>
          <th className={flag>=35 ? 'col-show': 'col-hide'}>{arr[10]}{arr[11]}</th>
          <th className={flag>=37 ? 'col-show': 'col-hide'}>{arr[18]}{arr[19]}</th>
          <th className={flag>=39 ? 'col-show': 'col-hide'}>{arr[26]}{arr[27]}</th>
        </tr>
        <tr>
          <th className={flag>=41 ? 'col-show': 'col-hide'}>{arr[4]}{arr[5]}</th>
          <th className={flag>=43 ? 'col-show': 'col-hide'}>{arr[12]}{arr[13]}</th>
          <th className={flag>=45 ? 'col-show': 'col-hide'}>{arr[20]}{arr[21]}</th>
          <th className={flag>=47 ? 'col-show': 'col-hide'}>{arr[28]}{arr[29]}</th>
        </tr>
        <tr>
          <th className={flag>=49 ? 'col-show': 'col-hide'}>{arr[6]}{arr[7]}</th>
          <th className={flag>=51 ? 'col-show': 'col-hide'}>{arr[14]}{arr[15]}</th>
          <th className={flag>=53 ? 'col-show': 'col-hide'}>{arr[22]}{arr[23]}</th>
          <th className={flag>=55 ? 'col-show': 'col-hide'}>{arr[30]}{arr[31]}</th>
        </tr>     
        
      </table>
    
  );
}

export default Table8;