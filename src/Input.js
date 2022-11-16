import * as React from 'react';
import { Link } from 'react-router-dom';
// import './button.css'
import { useState } from "react";
// import KeyExpansion from './KeyExpansion';

export default function Input(){
    const [arr, setarr]=useState('')
    // const data=async()=>{
    //      console.log(arr);
    //      <KeyExpansion input={arr} />
    // }
    return(
        <>
        <input type="text" name="name" placeholder='array' autoComplete='off'
        onChange={(e)=>setarr(e.target.value)}></input>
        <Link to={`/keyexpansion/${arr}`} style={{ textDecoration: 'none' }}>
        <button>submit</button>
        </Link>
        </>
    )
}