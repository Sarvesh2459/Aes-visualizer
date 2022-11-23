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
  const [key,setkey]=useState("78797656453219674536897634567834")
  const [arko,setarko]=useState("030c002d3f2027cc8da3f203422c6a0a")
  const [sb1,setsb1]=useState("7bfe63d875b7cc4b5d0a897b2c710267")
  const [mat,setmat]=useState("7bb78967750a02d85d71634b2cfecc7b")
  const [final,setfinal]=useState("dae96c7d2ebf083c01513763f6ffdcb0")
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
