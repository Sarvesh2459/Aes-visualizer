import './table1.css';
import * as React from 'react';

function Table(prop) {
    const arr=prop.name 
  return (
      <table>
        
        <tr>
          <th>{arr[0]}{arr[1]}</th>
          <th>{arr[8]}{arr[9]}</th>
          <th>{arr[16]}{arr[17]}</th>
          <th>{arr[24]}{arr[25]}</th>
        </tr>
        <tr>
          <th>{arr[2]}{arr[3]}</th>
          <th>{arr[10]}{arr[11]}</th>
          <th>{arr[18]}{arr[19]}</th>
          <th>{arr[26]}{arr[27]}</th>
        </tr>
        <tr>
          <th>{arr[4]}{arr[5]}</th>
          <th>{arr[12]}{arr[13]}</th>
          <th>{arr[20]}{arr[21]}</th>
          <th>{arr[28]}{arr[29]}</th>
        </tr>
        <tr>
          <th>{arr[6]}{arr[7]}</th>
          <th>{arr[14]}{arr[15]}</th>
          <th>{arr[22]}{arr[23]}</th>
          <th>{arr[30]}{arr[31]}</th>
        </tr>     
        
      </table>
    
  );
}

export default Table;