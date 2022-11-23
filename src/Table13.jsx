import './table.css';
import * as React from 'react';

function Table13(prop) {
    const arr=prop.name 
  return (
      <table >
        
        <tr>
          <th>{arr[2]}{arr[3]}</th>
        </tr>
        <tr>
          <th>{arr[4]}{arr[5]}</th>
        </tr>
        <tr>
          <th>{arr[6]}{arr[7]}</th>
        </tr>
        <tr>
          <th>{arr[0]}{arr[1]}</th>
        </tr>     
        
      </table>
    
  );
}

export default Table13;