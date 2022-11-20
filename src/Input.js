import './App.css';
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
        <div className='Backgd'>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',}}>
            <h1 style={{color:"rgb(27, 191, 32)"}}>AES Visualizer</h1>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',marginTop:"-46px"}}>
                <div style={{display: 'flex',  justifyContent:'right', alignItems:'right'}}>
                <h3 style={{color:"white"}}>By TechHeist3.0</h3>
                </div>
            </div>
        <div  style={{float: "left", width: "8%",height:"8%",marginLeft:"28%",marginRight:"10%",marginTop:"5%"}} >
        <input style={{width:"150%",height:"130%",textAlign:"center",color:"rgb(27, 191, 32)",borderRadius:"35px",fontSize:"20px"}} type="text" name="name" placeholder='Plain Text' autoComplete='off'
        onChange={(e)=>{
            setplaintext(e.target.value)
            plain_text=pt
            
        }}></input>
        </div>
        <div  style={{float: "left", width: "8%",height:"8%",marginLeft:"15%",marginRight:"30%",marginTop:"5%"}} >
        <input style={{width:"150%",height:"130%",textAlign:"center",color:"rgb(27, 191, 32)",borderRadius:"35px",fontSize:"20px"}} type="text" name="name" placeholder='Key' autoComplete='off'
        onChange={(e)=>{
        setkey(e.target.value)
        key_in=k
        }}></input>
        </div>
        <div  style={{float: "left", width: "30%",marginLeft:"35%",marginRight:"35%",marginTop:"7%"}} >
        <h1 style={{color:"rgb(27, 191, 32)",textAlign:"center",marginLeft:"2%"}}>The Choice is Yours</h1>
        </div>
        <div  style={{float: "left", width: "8%",height:"8%",marginLeft:"29%",marginRight:"10%",marginTop:"3%"}} >
            <Link to={`/explain/${k}`} style={{ textDecoration: 'none' }}>
            <button className='button-18' style={{background:"#0000FF",width:"150%",height:"150%"}}>Step Visualization</button>
            </Link>
        </div>
        <div  style={{float: "left", width: "8%",height:"8%",marginLeft:"13%",marginRight:"32%",marginTop:"3%"}} >
            <Link to={`/home`} style={{ textDecoration: 'none' }}>
            <button className='button-18' style={{background:"#ED0800",width:"150%",height:"150%"}}>Encrypt text</button>
            </Link>
        </div>
      
    </div>
    )
    
}

export {plain_text,key_in}

