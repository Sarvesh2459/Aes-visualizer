import * as React from 'react';
import { Link } from 'react-router-dom';
// import './button.css'
import { useState } from "react";
// import ScriptTag from 'react-script-tag';

var plain_text='637b76757b767563c0d27cc5d27cc5c0'
var key_in='00000000000000000000000000000000'
   export default function Input(){
    const [pt , setplaintext]=useState('')
    const [k,setkey]=useState('')
    // const pass_data=()=>{
    //     console.log(plain_text);
    //     console.log(key_in);
    //     <ScriptTag type="text/javascript" src="./Data.js" />    
    //     }
    return(
        <>
        <input type="text" name="name" placeholder='plain text' autoComplete='off'
        onChange={(e)=>{
            setplaintext(e.target.value)
            plain_text=pt
            
        }}></input>
        <input type="text" name="name" placeholder='key' autoComplete='off'
        onChange={(e)=>{
        setkey(e.target.value)
        key_in=k
        }}></input>
        <Link to={`/explain/${k}`} style={{ textDecoration: 'none' }}>
        <button >step Visualization</button>
        </Link>
        <Link to={`/home`} style={{ textDecoration: 'none' }}>
        <button  >encrypt text</button>
        </Link>
        </>
    )
    
}

export {plain_text,key_in}

