import * as React from 'react';
import './App.css';
import { useState } from "react";
import Table from './Table';

function SB() {
  const [visible, setvisible]=useState(true)
  const change=()=>{
    setvisible(false)
  }
  const sb="63636363636363636363636363636363";
  const sb1="73636363636363636363636363636363";
  return (
    <div className="App">
      
       <div style={{margin: "auto", padding: "1%"}}  >
       <button className={visible ?'button-18':'fadeOut3'} onClick={change}>
                Sbox substitution
        </button>
        </div>
        <div style={{marginTop:"7%"}}>
      <div className={visible ?'fadeIn':'fadeOut1'} style={{marginLeft:"15%",float: "left", width: "40%"}} >
      <Table  name={sb}/>
      </div>
      <div className={visible ?'fadeOut':'fadeIn'} style={{marginLeft:"1%",float: "right" , width: "42%"}} >
      <Table name={sb1}/>
      </div>
      </div>
    </div>
  );
}

export default SB;


