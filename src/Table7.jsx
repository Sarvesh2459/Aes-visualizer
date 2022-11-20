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
        {(flag>=1 && flag<=8) ||(flag>=33 && flag<=34) ||(flag>=41 && flag<=42)||(flag>=49 && flag<=50)  ?<th style={{color:"white"}}>{arr[0]}{arr[1]}</th>: <th>{arr[0]}{arr[1]}</th>}
        {(flag>=9 && flag<=16) ||(flag>=35 && flag<=36) ||(flag>=43 && flag<=44)||(flag>=51 && flag<=52)  ?<th style={{color:"white"}}>{arr[8]}{arr[9]}</th>: <th>{arr[8]}{arr[9]}</th>}
        {(flag>=17 && flag<=24) ||(flag>=37 && flag<=38) ||(flag>=45 && flag<=46)||(flag>=53 && flag<=54) ?<th style={{color:"white"}}>{arr[16]}{arr[17]}</th>: <th>{arr[16]}{arr[17]}</th>}
        {(flag>=25 && flag<=32) ||(flag>=39 && flag<=40) ||(flag>=47 && flag<=48)||(flag>=55 && flag<=56) ?<th style={{color:"white"}}>{arr[24]}{arr[25]}</th>: <th>{arr[24]}{arr[25]}</th>}
        </tr>
        <tr>
        {(flag>=1 && flag<=8) ||(flag>=33 && flag<=34) ||(flag>=41 && flag<=42)||(flag>=49 && flag<=50) ? <th style={{color:"white"}}>{arr[2]}{arr[3]}</th>: <th>{arr[2]}{arr[3]}</th>}
        {(flag>=9 && flag<=16) ||(flag>=35 && flag<=36) ||(flag>=43 && flag<=44)||(flag>=51 && flag<=52) ?<th style={{color:"white"}}>{arr[10]}{arr[11]}</th>: <th>{arr[10]}{arr[11]}</th>}
        {(flag>=17 && flag<=24) ||(flag>=37 && flag<=38) ||(flag>=45 && flag<=46)||(flag>=53 && flag<=54) ?<th style={{color:"white"}}>{arr[18]}{arr[19]}</th>: <th>{arr[18]}{arr[19]}</th>}
        {(flag>=25 && flag<=32) ||(flag>=39 && flag<=40) ||(flag>=47 && flag<=48)||(flag>=55 && flag<=56) ?<th style={{color:"white"}}>{arr[26]}{arr[27]}</th>: <th>{arr[26]}{arr[27]}</th>}
        </tr>
        <tr>
        {(flag>=1 && flag<=8) ||(flag>=33 && flag<=34) ||(flag>=41 && flag<=42)||(flag>=49 && flag<=50)? <th style={{color:"white"}}>{arr[4]}{arr[5]}</th>: <th>{arr[4]}{arr[5]}</th>}
        {(flag>=9 && flag<=16) ||(flag>=35 && flag<=36) ||(flag>=43 && flag<=44)||(flag>=51 && flag<=52) ?<th style={{color:"white"}}>{arr[12]}{arr[13]}</th>: <th>{arr[12]}{arr[13]}</th>}
        {(flag>=17 && flag<=24) ||(flag>=37 && flag<=38) ||(flag>=45 && flag<=46)||(flag>=53 && flag<=54) ?<th style={{color:"white"}}>{arr[20]}{arr[21]}</th>: <th>{arr[20]}{arr[21]}</th>}
        {(flag>=25 && flag<=32) ||(flag>=39 && flag<=40) ||(flag>=47 && flag<=48)||(flag>=55 && flag<=56) ?<th style={{color:"white"}}>{arr[28]}{arr[29]}</th>: <th>{arr[28]}{arr[29]}</th>}
        </tr>
        <tr>
        {(flag>=1 && flag<=8) ||(flag>=33 && flag<=34) ||(flag>=41 && flag<=42)||(flag>=49 && flag<=50)? <th style={{color:"white"}}>{arr[6]}{arr[7]}</th> :<th>{arr[6]}{arr[7]}</th> }
        {(flag>=9 && flag<=16) ||(flag>=35 && flag<=36) ||(flag>=43 && flag<=44)||(flag>=51 && flag<=52) ?<th style={{color:"white"}}>{arr[14]}{arr[15]}</th>: <th>{arr[14]}{arr[15]}</th>}
        {(flag>=17 && flag<=24) ||(flag>=37 && flag<=38) ||(flag>=45 && flag<=46)||(flag>=53 && flag<=54) ?<th style={{color:"white"}}>{arr[22]}{arr[23]}</th>: <th>{arr[22]}{arr[23]}</th>}
        {(flag>=25 && flag<=32) ||(flag>=39 && flag<=40) ||(flag>=47 && flag<=48)||(flag>=55 && flag<=56) ?<th style={{color:"white"}}>{arr[30]}{arr[31]}</th>: <th>{arr[30]}{arr[31]}</th>}
        </tr>     
        
      </table>
    
  );
}

export default Table7;