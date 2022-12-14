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
import Output from './output';
import { UserContext } from './UserContext';
import Table from './Table';

// import {Link} from 'react-router-dom'

export default function Home() {
  const {plaintext,key}=React.useContext(UserContext)
  const [round1, setround1]=useState(1)  
  // const [round2, setround2]=useState(0)
  var output=[];
  output.push(plaintext)
  useEffect(() => {
    const interval = setInterval(() => {
      setround1((prevround1) => prevround1 + 1);
      // setround2((prevround2) => prevround2 + 1);
    }, 250);

    return () => clearInterval(interval,48000);
  }, []);
  function ark(plaintext,key){
   
    var arko1='';
    for(var i=0;i<16;i++){
        arko1 = arko1.concat(decimalToHex(parseInt(key.slice(2*i,2*i+2),16)^parseInt(plaintext.slice(2*i,2*i+2),16)))
    }
    return arko1;
}

function decimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;
  
    while (hex.length < padding) {
        hex = "0" + hex;
    }
  
    return hex;
  }

function sb(plaintext){
    var Sbox = [99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,
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
        137,13,191,230,66,104,65,153,45,15,176,84,187,22];
   var sb2=''
    for (var i=0;i<16;i++){
     sb2 = sb2.concat(decimalToHex(Sbox[parseInt(plaintext.slice(2*i,2*i+2),16)]));
    };
    return sb2;
}
function sr(plaintext){
        var state = [];
        for(var i=0;i<16;i++){
        state.push(plaintext.slice(2*i,2*i+2))
        }

        [state[1],state[5],state[9],state[13]] = [state[5],state[9],state[13],state[1]];
        [state[2],state[6],state[10],state[14]] = [state[10],state[14],state[2],state[6]];
        [state[3],state[7],state[11],state[15]] = [state[15],state[3],state[7],state[11]];

        // const mat = state.join('');
        var mat1=''
        mat1 = state.join('');

        return mat1;
}
function aes_mul( a, b )	{
    var res = 0;
    while( a > 0 )	{
       if ( (a&1) !== 0 )
          res = res ^ b;		// "add" to the result
       a >>>= 1;			// shift a to get next higher-order bit
       b <<= 1;			// shift multiplier also
    }
    // now reduce it modulo x*8 + x4 + x*3 + x + 1
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
  function mc(plaintext){
    var final1='';
    const sb= "02030101010203010101020303010102";
    for(var j=0;j<4;j++){
        for(var i=0;i<4;i++)
            final1 = final1.concat(decimalToHex((aes_mul(parseInt(plaintext.slice(8*j,8*j+2),16),parseInt(sb.slice(8*i,8*i+2),16)))^(aes_mul(parseInt(plaintext.slice(8*j+2,8*j+4),16),parseInt(sb.slice(8*i+2,8*i+4),16)))^(aes_mul(parseInt(plaintext.slice(8*j+6,8*j+8),16),parseInt(sb.slice(8*i+6,8*i+8),16)))^(aes_mul(parseInt(plaintext.slice(8*j+4,8*j+6),16),parseInt(sb.slice(8*i+4,8*i+6),16)))));
    }
    return final1;
  }
function rot_word(temp){
    [temp[0],temp[1],temp[2],temp[3]] = [temp[1],temp[2],temp[3],temp[0]];
    return temp
  }
function sub_word(word){
    // eslint-disable-next-line no-array-constructor
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
    for(var i=0;i<4;i++){ word[i] = Sbox[word[i]]}
    return word;
  }
  
function KeyExpansion(k) {
    const rcon = [0x8d, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36,
      0x6c, 0xd8, 0xab, 0x4d, 0x9a, 0x2f, 0x5e, 0xbc, 0x63, 0xc6, 0x97,
      0x35, 0x6a, 0xd4, 0xb3, 0x7d, 0xfa, 0xef, 0xc5, 0x91, 0x39, 0x72,
      0xe4, 0xd3, 0xbd, 0x61, 0xc2, 0x9f, 0x25, 0x4a, 0x94, 0x33, 0x66,
      0xcc, 0x83, 0x1d, 0x3a, 0x74, 0xe8, 0xcb, 0x8d, 0x01, 0x02, 0x04,
      0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36, 0x6c, 0xd8, 0xab, 0x4d,
      0x9a, 0x2f, 0x5e, 0xbc, 0x63, 0xc6, 0x97, 0x35, 0x6a, 0xd4, 0xb3,
      0x7d, 0xfa, 0xef, 0xc5, 0x91, 0x39, 0x72, 0xe4, 0xd3, 0xbd, 0x61,
      0xc2, 0x9f, 0x25, 0x4a, 0x94, 0x33, 0x66, 0xcc, 0x83, 0x1d, 0x3a,
      0x74, 0xe8, 0xcb, 0x8d, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40,
      0x80, 0x1b, 0x36, 0x6c, 0xd8, 0xab, 0x4d, 0x9a, 0x2f, 0x5e, 0xbc,
      0x63, 0xc6, 0x97, 0x35, 0x6a, 0xd4, 0xb3, 0x7d, 0xfa, 0xef, 0xc5,
      0x91, 0x39, 0x72, 0xe4, 0xd3, 0xbd, 0x61, 0xc2, 0x9f, 0x25, 0x4a,
      0x94, 0x33, 0x66, 0xcc, 0x83, 0x1d, 0x3a, 0x74, 0xe8, 0xcb, 0x8d,
      0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36, 0x6c,
      0xd8, 0xab, 0x4d, 0x9a, 0x2f, 0x5e, 0xbc, 0x63, 0xc6, 0x97, 0x35,
      0x6a, 0xd4, 0xb3, 0x7d, 0xfa, 0xef, 0xc5, 0x91, 0x39, 0x72, 0xe4,
      0xd3, 0xbd, 0x61, 0xc2, 0x9f, 0x25, 0x4a, 0x94, 0x33, 0x66, 0xcc,
      0x83, 0x1d, 0x3a, 0x74, 0xe8, 0xcb, 0x8d, 0x01, 0x02, 0x04, 0x08,
      0x10, 0x20, 0x40, 0x80, 0x1b, 0x36, 0x6c, 0xd8, 0xab, 0x4d, 0x9a,
      0x2f, 0x5e, 0xbc, 0x63, 0xc6, 0x97, 0x35, 0x6a, 0xd4, 0xb3, 0x7d,
      0xfa, 0xef, 0xc5, 0x91, 0x39, 0x72, 0xe4, 0xd3, 0xbd, 0x61, 0xc2,
      0x9f, 0x25, 0x4a, 0x94, 0x33, 0x66, 0xcc, 0x83, 0x1d, 0x3a, 0x74,
      0xe8, 0xcb]
      var key = [];
      for(var i=0;i<16;i++){
      key.push(k.slice(2*i,2*i+2))
      }
    const nb= 4;
    const nk = 4;
    const nr = 10;
    var rcon_it = 1;
    const exp_key_size = nb * (nr + 1) * 4;
    var w = [];
    for( i=0;i<nk*4;i++){
      w[i] = parseInt(key[i],16)
    }
    var temp = [0,0,0,0];
    const offset = nk * 4;
    i = offset 
      while (i < exp_key_size){
          temp = w.slice(i-4,i);
          if (i % offset === 0){
              temp = rot_word(temp);
              temp = sub_word(temp);
              temp[0] = temp[0] ^ rcon[rcon_it];
              rcon_it += 1;
          }
          else if(nk > 6 && i % offset === 16){ 
              temp = sub_word(temp);
          }
  
          for (var j=0;j<4 ;j++){ w[i+j] = w[i-offset+j] ^ temp[j]}
          i += 4
      }
      var pre = [];
      for(i=0;i<exp_key_size;i++){
            pre.push(decimalToHex(w[i]))
      }
      var final = '';
      final = pre.join('');
      return final;
}
var totalkey = KeyExpansion(key);
// console.log(totalkey);
var curr = ark(plaintext,key);
for(var i=0;i<9;i++){
    curr = sb(curr);
    curr = sr(curr);
    curr = mc(curr);
    curr = ark(curr,totalkey.slice(32*(i+1),32*(i+1)+32));
    output.push(curr);
}
curr = sb(curr);
curr = sr(curr);
curr = ark(curr,totalkey.slice(32*(10),32*(10)+32));
curr = curr.toUpperCase()
output.push(curr)
console.log(output)

  return (
    <div className='Backgd' style={{height:"700px"}}>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <div style={{justifyContent:"center", alignItems:'center'}}>
    {(round1>=56)&& <h1 style={{color:"rgb(27, 191, 32)"}}>Encryption completed</h1>}
    {(round1<=3)&& <h1 style={{color:"rgb(27, 191, 32)"}}>Round 0</h1>}
    {(round1>3 && round1<44) && <h1 style={{color:"rgb(27, 191, 32)"}}>Round {Math.floor(round1/4)-1 }</h1>}
    {(round1>=44 && round1<56)&& <h1 style={{color:"rgb(27, 191, 32)"}}>Round 10</h1>}
    </div>
     </div>
     

    {round1 <=58 && <div style={{float: "left", width: "26%",height:"26%",marginLeft:"15%",marginRight:"0%",zIndex:"2"}}  >
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <div style={{backgroundColor: "#ED0800"}} className={(round1>=1 && round1<4) ?'button-glow':'button-18'}  >AddRoundKey
        </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <div  style={{backgroundColor:"#0000FF", color:"white"}} className={(round1>=8 && round1<44 && round1%4===0) ?'button-glow':'button-18'}  >
        SubBytes
        </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
     
        <div  style={{backgroundColor: "#ED0800"}} className={(round1>=8 && round1<44 && round1%4===1) ?'button-glow':'button-18'}  >
        ShiftRows
        </div>
     
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
       
        <div  style={{backgroundColor:"#0000FF", color:"white"}} className={(round1>=8 && round1<44 && round1%4===2) ?'button-glow':'button-18'}  >
        MixColumns
        </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <div  style={{backgroundColor: "#ED0800"}} className={(round1>=8 && round1<44 && round1%4===3) ?'button-glow':'button-18'}  >
        AddRoundKey
        </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <div  style={{backgroundColor:"#0000FF", color:"white"}} className={(round1>=44 && round1<47) ?'button-glow':'button-18'}  >
        SubBytes
        </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <div  style={{backgroundColor: "#ED0800"}} className={(round1>=47 && round1<50) ?'button-glow':'button-18'}  >
        ShiftRows
        </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
        </TimelineSeparator>
        <TimelineContent>
        <div style={{backgroundColor:"#0000FF", color:"white"}} className={(round1>=50 && round1<53) ?'button-glow':'button-18'}  >
        AddRoundKey
        </div>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>
    </div>}
    {(round1>=0 && round1<59)&& <div style={{float: "left", width: "26%",height:"26%",marginLeft:"16%",marginRight:"0%",marginTop:"10%",zIndex:"2"}} >
     {(round1<=7)&& <Table name={output[0]}/>}
     {(round1>7 && round1<44) && <Table name={output[Math.floor(round1/4)-2]}/>}
     {(round1>=44 && round1<56)&& <Table name={output[9]}/>}
     {(round1>=56 && round1<59)&& <Table name={output[10]}/>}
    </div>}
    {round1>=59 && 
      <div style={{float: "left", width: "100%",marginRight:"%",height:"60%"}}>
    <Output/>
    <div  style={{float: "left", width: "13%",height:"15%",marginLeft:"44%",marginTop:"5%"}} >
    <Link to={`/explain`} style={{ textDecoration: 'none' }}>
            <button className='button-18' style={{background:"#0000FF",width:"100%",height:"100%"}}>Step Visualization</button>
    </Link>
        </div>
      </div>}
    </div>
  );
}