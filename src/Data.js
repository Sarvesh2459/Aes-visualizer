import * as React from 'react';
import { UserContext } from './UserContext';

export default function Data() {
   const {plaintext,setplaintext,key,setkey,arko,setarko,sb1,setsb1,mat,setmat,final,setfinal}=React.useContext(UserContext)
   console.log(plaintext)
   console.log(key)


// var arko = ''
var arko1=''
for(var i=0;i<16;i++){
arko1 = arko1.concat(decimalToHex(parseInt(key.slice(2*i,2*i+2),16)^parseInt(plaintext.slice(2*i,2*i+2),16)))
}
setarko(arko1)



//sbox
var Sbox = new Array(99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,
    118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,
    147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,
    7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,
    47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,
    251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,
    188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,
    100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,
    50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,
    78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,
    116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,
    158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,
    137,13,191,230,66,104,65,153,45,15,176,84,187,22);
  
   
   //  var sb1=""; //output
   var sb2=''
    for (var i=0;i<16;i++){
     sb2 = sb2.concat(decimalToHex(Sbox[parseInt(arko.slice(2*i,2*i+2),16)]));
    };
    setsb1(sb2)

   //  shift row
   
var state = new Array();
for(var i=0;i<16;i++){
 state.push(sb1.slice(2*i,2*i+2))
}

[state[1],state[5],state[9],state[13]] = [state[5],state[9],state[13],state[1]];
[state[2],state[6],state[10],state[14]] = [state[10],state[14],state[2],state[6]];
[state[3],state[7],state[11],state[15]] = [state[15],state[3],state[7],state[11]];

// const mat = state.join('');
var mat1=''
 mat1 = state.join('');
setmat(mat1)





//mixcol

const sb= "02030101010203010101020303010102"; //const


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
// var final =""
var final1=''
for(var j=0;j<4;j++){
    for(var i=0;i<4;i++)
    final1 = final1.concat(decimalToHex((aes_mul(parseInt(mat.slice(8*j,8*j+2),16),parseInt(sb.slice(8*i,8*i+2),16)))^(aes_mul(parseInt(mat.slice(8*j+2,8*j+4),16),parseInt(sb.slice(8*i+2,8*i+4),16)))^(aes_mul(parseInt(mat.slice(8*j+6,8*j+8),16),parseInt(sb.slice(8*i+6,8*i+8),16)))^(aes_mul(parseInt(mat.slice(8*j+4,8*j+6),16),parseInt(sb.slice(8*i+4,8*i+6),16)))));
  }
  setfinal(final1)

   return(
      <></>
   )
}



