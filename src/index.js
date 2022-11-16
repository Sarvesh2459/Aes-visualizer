import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import KeyExpansion from './KeyExpansion';
import Input from './Input';
import Home from './Home'
import SB from './SB';
import ShiftRows from './ShiftRows';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
				<Route path="/" element={<Home />} />
				<Route exact path="/input" element={<Input />} />
				<Route exact path="/keyexpansion/:data" element={<KeyExpansion />} />	
        <Route exact path="/sb" element={<SB />} />
        <Route exact path="/shiftrows" element={<ShiftRows />} />		

			</Routes>
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
