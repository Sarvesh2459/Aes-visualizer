import './App.css';
import './test.css';
import * as React from 'react';

import {UserContext} from './UserContext'
import {useEffect,useState} from 'react'
import MovingBlock from './MovingBlock';
import SBox from './SBox'
import RoundXor from './RoundXor'
import {Link} from 'react-router-dom'
import Finally from './Finally';

function KeyExpansion(){
  const {key}=React.useContext(UserContext)


const [flag, setflag]=useState(0)
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
function decimalToHex(d, padding) {
  var hex = Number(d).toString(16);
  padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

  while (hex.length < padding) {
      hex = "0" + hex;
  }

  return hex;
}

// const key=  "78797656453219674536897634567834";
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
  for(i=0;i<nk*4;i++){
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

        for (var j=0;j<4 ;j++){ w[i+j] = w[i-offset+j] ^ temp[j]};
        i += 4;
    }
    var pre = [];
    for( i=0;i<exp_key_size;i++){
          pre.push(decimalToHex(w[i]))
    }
    var final1 = '';
    final1 = pre.join('');
    return final1;
}

var totalkey = (KeyExpansion(key)).slice(32,64);
// console.log(key)




    
useEffect(() => {
  const interval = setInterval(() => {
    setflag((prevflag) => prevflag + 1);
  }, 250);
  

  return () => clearInterval(interval,48000);
}, []);

  return (
    <div className="Backgd">
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: "90%",marginLeft:"6%",height:"10%",marginTop:"%"}}>
        <h1  style={{color:"rgb(27, 191, 32)",width:"17%",backgroundColor:"black",borderRadius:"16px",marginTop:"%"}}>KeyExpansion</h1>
      </div>
      <div  style={{float: "left", width: "100%",height:"30%",marginLeft:"%",marginRight:"%",marginTop:"%"}} >
      {(flag<=14) && <MovingBlock/>}
      {(flag>15 && flag<=39) && <SBox name={key.slice(24,32)}/>}
      {(flag>=40 && flag<=64) && <RoundXor name={key.slice(24,32)}/>}
      {(flag>=65) && <Finally name={totalkey} b={key} c={key.slice(24,32)}/>}
      </div>
      <div  style={{float: "left", width: "10%",height:"10%",marginLeft:"77%",marginRight:"%",marginTop:"21%"}} >
            <Link to={`/home`} style={{ textDecoration: 'none' }}>
            <button className='button-18' style={{background:"#ED0800",width:"100%",height:"100%"}}>Encrypt text</button>
            </Link>
        </div>

    </div>
  );
  }

export default KeyExpansion;