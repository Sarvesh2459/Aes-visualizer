import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import KeyExpansion from './KeyExpansion';
import Input ,{plaintext,key} from './Input';
import Home from './Home'
import SB from './SB';
import ShiftRows from './ShiftRows';
import MixCol from './MixCol';
import Explain from './Explain';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
				<Route path="/home" element={<Home />} />
				<Route exact path="/" element={<Input />} />
				<Route exact path="/keyexpansion/:data" element={<KeyExpansion />} />	
        <Route exact path="/sb" element={<SB />} />
        <Route exact path="/shiftrows" element={<ShiftRows />} />
        <Route exact path="/mixcol" element={<MixCol />} />		
        <Route exact path="/explain/:key" element={<Explain/>} />

			</Routes>
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
