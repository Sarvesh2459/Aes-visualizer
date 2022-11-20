import * as React from 'react';
import './App.css';
import Home from './Home';
import KeyExpansion from './KeyExpansion';
import Input ,{plaintext,key} from './Input';
import SB from './SB';
import ShiftRows from './ShiftRows';
import MixCol from './MixCol';
import Explain from './Explain';
import {UserContext} from './UserContext'
import { Route, Routes } from 'react-router-dom';
import {useState} from 'react'
import AddRoundKey from './AddRoundKey';

function App() {
  const [plaintext,setplaintext]=useState("7b75767b7a123eabc8957b75767a123e")
  const [key,setkey]=useState("12345678901234567890123456789012")
  const [arko,setarko]=useState("")
  const [sb1,setsb1]=useState("")
  const [mat,setmat]=useState("")
  const [final,setfinal]=useState("")
  return (
    <div >
    <UserContext.Provider value={{plaintext,setplaintext,key,setkey,arko,setarko,sb1,setsb1,mat,setmat,final,setfinal}}>
      <Routes>
				<Route path="/home" element={<Home />} />
				<Route exact path="/" element={<Input />} />
				<Route exact path="/keyexpansion" element={<KeyExpansion />} />	
        <Route exact path="/sb" element={<SB />} />
        <Route exact path="/shiftrows" element={<ShiftRows />} />
        <Route exact path="/mixcol" element={<MixCol />} />		
        <Route exact path="/explain" element={<Explain/>} />
        <Route exact path="/addroundkey" element={<AddRoundKey/>} />

			</Routes>
    </UserContext.Provider>
    </div>
  );
}

export default App;
