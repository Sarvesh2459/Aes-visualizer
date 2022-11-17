import './App.css';
import * as React from 'react';
import Home from './Home';
import { useParams } from 'react-router-dom';
import Table from './Table';
import CloseIcon from '@mui/icons-material/Close';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import Table6 from './Table6';
import Table7 from './Table7';
import Table8 from './Table8';
function decimalToHex(d, padding) {
  var hex = Number(d).toString(16);
  padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

  while (hex.length < padding) {
      hex = "0" + hex;
  }

  return hex;
}
function aes_mul( a, b )	{
  var res = 0;
  while( a > 0 )	{
     if ( (a&1) !== 0 )
        res = res ^ b;		// "add" to the result
     a >>>= 1;			// shift a to get next higher-order bit
     b <<= 1;			// shift multiplier also
  }
  // now reduce it modulo x**8 + x**4 + x**3 + x + 1
  var hbit = 0x10000;		// bit to test if we need to take action
  var modulus = 0x11b00;	// modulus - XOR by this to change value
  while( hbit >= 0x100 )	{
     if ( (res & hbit) !== 0 )		// if the high-order bit is set
        res ^= modulus;	// XOR with the modulus

     // prepare for the next loop
     hbit >>= 1;
     modulus >>= 1;
  }
  return res;
}

function MixCol() {
  const { data } = useParams();
  const sb= "02030101010203010101020303010102";
  const mat ="637b76757b767563c0d27cc5d27cc5c0";
  var final = "";
  for(var i=0;i<4;i++){
    for(var j=0;j<4;j++)
    final = final.concat(decimalToHex((aes_mul(parseInt(mat.slice(2*j,2*j+2),16),parseInt(sb.slice(8*i,8*i+2),16)))^(aes_mul(parseInt(mat.slice(2*j+8,2*j+10),16),parseInt(sb.slice(8*i+2,8*i+4),16)))^(aes_mul(parseInt(mat.slice(2*j+24,2*j+26),16),parseInt(sb.slice(8*i+6,8*i+8),16)))^(aes_mul(parseInt(mat.slice(2*j+16,2*j+18),16),parseInt(sb.slice(8*i+4,8*i+6),16)))));
  }

  return (
    <div style={{marginTop:"14%", marginLeft:"7%"}}>
      <div  style={{float: "left", width: "27%"}} >
      <Table6  name={sb}/>
      </div>
      <div  style={{float: "left", marginTop:"10%",marginRight:"3%"}} >
      <CloseIcon sx={{fontSize:"80px", marginRight :"25%"}}/>
      </div>
      <div  style={{float: "left", width: "27%"}} >
      <Table7  name={mat}/>
      </div>
      <div  style={{float: "left", marginTop:"10%",marginRight:"3%"}} >
      <DragHandleIcon sx={{fontSize:"80px", marginRight :"25%"}}/>
      </div>
      <div  style={{float: "left", width: "27%"}} >
      <Table8  name={final}/>
      </div>
    </div>
    
  );
}

export default MixCol;
